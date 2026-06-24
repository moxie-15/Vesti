const fs = require('fs');
const path = require('path');

const baseDir = "c:/Users/MOXIE/Desktop/Vesti";

const replacements = [
    { old: /#060E42/gi, new: '#13110f' },
    { old: /#C0C71E/gi, new: '#00c758' },
    { old: /#62943B/gi, new: '#00a544' },
    { old: /#63A146/gi, new: '#00a544' },
    { old: /#F4FAF2/gi, new: '#f9f5f0' }
];

function processFile(fullPath) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let originalContent = content;
    
    replacements.forEach(rep => {
        content = content.replace(rep.old, rep.new);
    });
    
    if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log("Updated colors in: " + fullPath);
    }
}

function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'scratch') {
                traverse(fullPath);
            }
        } else if (file.endsWith('.html') || file.endswith('.css') || file.endswith('.js')) {
            processFile(fullPath);
        }
    }
}

traverse(baseDir);
console.log("Color replacement complete.");
