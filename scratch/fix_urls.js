const fs = require('fs');
const path = require('path');

const baseDir = "c:/Users/MOXIE/Desktop/Vesti";

function getDepthString(logicalPath) {
    const parts = logicalPath.split('/');
    if (parts.length <= 1) return './';
    return '../'.repeat(parts.length - 1);
}

function processHtmlFile(fullPath) {
    let content = fs.readFileSync(fullPath, 'utf8');
    const logicalPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
    const depth = getDepthString(logicalPath);
    
    let modified = false;

    // Fix url('...')
    // Matches url('assets/...') or url('../Assets/...') or url("...")
    const urlRegex = /url\(['"]?(?:\.\.\/)*[aA]ssets\/?(.*?)(?:\.jpg|\.png|\.svg|\.jpeg)['"]?\)/gi;
    
    content = content.replace(urlRegex, (match, filename) => {
        // e.g. filename might be "usa_1" if we didn't capture extension, wait the regex captures up to the extension
        // Let's rewrite the regex to be safer
        return match;
    });

    // Let's use a simpler regex: /url\(['"]?(?:\.\.\/)*[aA]ssets\/(.*?)['"]?\)/gi
    const betterUrlRegex = /url\(['"]?(?:\.\.\/)*[aA]ssets\/(.*?)['"]?\)/gi;
    content = content.replace(betterUrlRegex, (match, innerPath) => {
        // innerPath is like "usa_1.png" or "images/usa_1.png"
        // Wait, some might already be fixed if they had images/
        let filename = innerPath;
        if (filename.startsWith('images/')) {
            filename = filename.replace('images/', '');
        }
        modified = true;
        return `url('${depth}assets/images/${filename}')`;
    });

    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log("Fixed inline URLs in: " + logicalPath);
    }
}

function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') traverse(fullPath);
        } else if (fullPath.endsWith('.html')) {
            processHtmlFile(fullPath);
        }
    }
}

traverse(baseDir);
console.log("URL fix complete!");
