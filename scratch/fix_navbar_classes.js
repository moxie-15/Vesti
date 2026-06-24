const fs = require('fs');
const path = require('path');

const baseDir = "c:/Users/MOXIE/Desktop/Vesti";

function processHtmlFile(fullPath) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // The CSS has `.nav-links` but the HTML has `<ul class="nav-menu">`.
    // Let's change the CSS to match the HTML so the design works again.
    if (content.includes('.nav-links {') || content.includes('.nav-links a')) {
        content = content.replace(/\.nav-links\b/g, '.nav-menu');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log("Fixed navbar CSS class names in: " + fullPath);
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
console.log("Navbar class sync complete.");
