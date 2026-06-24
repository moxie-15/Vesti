const fs = require('fs');
const path = require('path');

const baseDir = "c:/Users/MOXIE/Desktop/Vesti";

function cleanHtmlFile(fullPath) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    const badScript = `
    <!-- Script to trigger modal after a few seconds -->
    <script>
        setTimeout(() => {
            // Smart agent popup disabled
            document.getElementById('floatingAgentBtn').style.display = 'none';
        }, 3000); // Popup appears 3 seconds after page loads
    </script>`;

    // We'll use a regex to be more flexible with whitespace
    const badScriptRegex = /<!-- Script to trigger modal after a few seconds -->\s*<script>\s*setTimeout\(\(\) => \{\s*\/\/ Smart agent popup disabled\s*(?:let fb = )?document\.getElementById\('floatingAgentBtn'\)\.style\.display = 'none';\s*\}, 3000\); \/\/ Popup appears 3 seconds after page loads\s*<\/script>/i;

    if (badScriptRegex.test(content)) {
        content = content.replace(badScriptRegex, '');
        modified = true;
    }

    const anotherBadScriptRegex = /<!-- Script to trigger modal after a few seconds -->\s*<script>\s*setTimeout\(\(\) => \{\s*let btn = document\.getElementById\('floatingAgentBtn'\);\s*\/\/ Smart agent popup disabled\s*if \(btn\) btn\.style\.display = 'none';\s*\}, 3000\); \/\/ Popup appears 3 seconds after page loads\s*<\/script>/i;
    
    if (anotherBadScriptRegex.test(content)) {
        content = content.replace(anotherBadScriptRegex, '');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log("Cleaned leftover script in: " + fullPath);
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
console.log("Cleanup done.");
