const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
        .replace(/Australia/g, 'Australia')
        .replace(/Australia/g, 'Australia')
        .replace(/australia/gi, 'australia')
        .replace(/australia/gi, 'australia')
        .replace(/\bNZD\b/g, 'AUD')
        .replace(/\bNZ\b/g, 'AU');

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function walk(dir) {
    let list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        let stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('.git') && !file.includes('assets') && !file.includes('node_modules')) {
                walk(file);
            }
        } else {
            if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.md')) {
                replaceInFile(file);
            }
        }
    });
}

walk(__dirname);
