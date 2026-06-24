const fs = require('fs');
const path = require('path');

const baseDir = "c:/Users/MOXIE/Desktop/Vesti";

function cleanHtmlFile(fullPath) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // Remove literal '\n' strings that were accidentally written to the HTML
    if (content.includes('\\n')) {
        content = content.split('\\n').join('\n');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log("Fixed literal \\n in: " + fullPath);
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
            cleanHtmlFile(fullPath);
        }
    }
}

traverse(baseDir);
console.log("Newline cleanup done.");
