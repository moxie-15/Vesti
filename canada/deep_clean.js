const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Lingering Terms Replace
    content = content.replace(/\bINZ\b/g, 'DHA');
    content = content.replace(/\bNZeTA\b/gi, 'ETA');
    content = content.replace(/\bAotearoa\b/g, 'Australia');
    content = content.replace(/\bZealand\b/gi, 'Australia');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Deep cleaned ${filePath}`);
    }
}

function walk(dir) {
    let list = fs.readdirSync(dir);
    list.forEach(function(file) {
        let fullPath = path.join(dir, file);
        let stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            if (!fullPath.includes('.git') && !fullPath.includes('assets') && !fullPath.includes('node_modules')) {
                walk(fullPath);
            }
        } else {
            if (fullPath.endsWith('.html') || fullPath.endsWith('.js') || fullPath.endsWith('.css') || fullPath.endsWith('.md')) {
                replaceInFile(fullPath);
            }
        }
    });
}

walk(__dirname);
