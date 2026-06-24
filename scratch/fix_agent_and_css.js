const fs = require('fs');
const path = require('path');

const baseDir = "c:/Users/MOXIE/Desktop/Vesti";
const styleCssPath = path.join(baseDir, 'assets/css/style.css');
const scriptJsPath = path.join(baseDir, 'assets/js/script.js');

// 1. Ensure style.css has the global navbar and footer CSS, plus the Agent Modal CSS
const globalCSS = `
/* Premium Navbar Styling */
.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
    background-color: rgba(6, 14, 66, 0.95) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    padding: 15px 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.nav-menu {
    display: flex;
    gap: 30px;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-menu .nav-link {
    color: rgba(255, 255, 255, 0.85);
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease, transform 0.2s ease;
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-menu .nav-link:hover {
    color: #FFFFFF;
    transform: translateY(-1px);
}

.nav-cta {
    display: flex;
    align-items: center;
}

.btn-signin {
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    margin-right: 25px;
    text-decoration: none;
    font-size: 15px;
    transition: opacity 0.2s;
}

.btn-signin:hover {
    opacity: 0.8;
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
}

.mobile-drawer {
    display: none;
}

@media (max-width: 992px) {
    .nav-menu, .nav-cta {
        display: none;
    }
    .mobile-menu-btn {
        display: block;
    }
    .mobile-drawer.active {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #060E42;
        padding: 20px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
    .mobile-menu {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .mobile-link {
        color: white;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
    }
    .mobile-drawer-ctas {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 15px;
    }
}

/* Agent Popup Modal */
.agent-modal-overlay {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(6, 14, 66, 0.6);
    backdrop-filter: blur(5px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.agent-modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

.agent-modal {
    background: #FFFFFF;
    width: 90%;
    max-width: 750px;
    border-radius: 24px;
    display: flex;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.2);
    transform: scale(0.8) translateY(50px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    min-height: 400px;
}

.agent-modal-overlay.active .agent-modal {
    transform: scale(1) translateY(0);
}

.agent-modal-left {
    width: 45%;
    background: #62943B;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
}

.agent-modal-right {
    width: 55%;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.agent-close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #F3F4F6;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #4B5563;
    transition: all 0.2s;
    z-index: 10;
}

.agent-close-btn:hover {
    background: #E5E7EB;
    color: #111827;
    transform: rotate(90deg);
}

.agent-title {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    color: #060E42;
    margin: 0 0 15px;
    font-weight: 700;
}

.agent-desc {
    font-family: 'Inter', sans-serif;
    color: #4B5563;
    font-size: 15px;
    line-height: 1.6;
    margin: 0 0 30px;
}

@media (max-width: 768px) {
    .agent-modal {
        flex-direction: column;
        max-width: 400px;
    }
    .agent-modal-left {
        width: 100%;
        height: 200px;
    }
    .agent-modal-right {
        width: 100%;
        padding: 30px 20px;
    }
}
`;

if (fs.existsSync(styleCssPath)) {
    let css = fs.readFileSync(styleCssPath, 'utf8');
    if (!css.includes('.agent-modal-overlay')) {
        fs.appendFileSync(styleCssPath, '\\n' + globalCSS);
        console.log("Appended missing global CSS to style.css");
    }
}

// 2. Remove inline CSS and Agent Modal text from ALL HTML files
function cleanHtmlFile(fullPath) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // Remove literal '/* Agent Popup Modal */' text outside style tag
    if (content.includes('/* Agent Popup Modal */')) {
        content = content.split('/* Agent Popup Modal */').join('');
        modified = true;
    }
    
    // Remove inline Agent Popup CSS
    const agentModalCssRegex = new RegExp('<style>[\\\\s\\\\S]*?\\\\.agent-modal-overlay[\\\\s\\\\S]*?<\\\\/style>', 'i');
    if (agentModalCssRegex.test(content)) {
        content = content.replace(agentModalCssRegex, '');
        modified = true;
    }

    // Fix literal '\n' issue in HTML
    if (content.includes('</div>\\n        </div>\\n    </div>')) {
        content = content.replace(/<\/div>\\n        <\/div>\\n    <\/div>/g, '</div></div></div>');
        modified = true;
    }

    // Fix agent modal close button logic to not crash if btn doesn't exist
    const oldCloseLogic = "document.getElementById('floatingAgentBtn').style.display='flex';";
    const newCloseLogic = "let fb = document.getElementById('floatingAgentBtn'); if(fb) fb.style.display='flex';";
    if (content.includes(oldCloseLogic)) {
        content = content.split(oldCloseLogic).join(newCloseLogic);
        modified = true;
    }

    // Instead of complex regex, let's just strip the known auto trigger text
    const triggerSnippet1 = "let modal = document.getElementById('agentModal');";
    const triggerSnippet2 = "if (modal) modal.classList.add('active');";
    const triggerSnippet3 = "document.getElementById('agentModal').classList.add('active');";

    if (content.includes(triggerSnippet1)) {
        content = content.split(triggerSnippet1).join('// Smart agent popup disabled');
        modified = true;
    }
    if (content.includes(triggerSnippet2)) {
        content = content.split(triggerSnippet2).join('');
        modified = true;
    }
    if (content.includes(triggerSnippet3)) {
        content = content.split(triggerSnippet3).join('// Smart agent popup disabled');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log("Cleaned HTML in: " + path.relative(baseDir, fullPath));
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

// 3. Centralize Smart Agent Popup Logic in script.js
const smartAgentScript = `

// Smart Agent Logic
document.addEventListener('DOMContentLoaded', () => {
    // Only popup automatically if we are NOT on the assessment page
    if (!window.location.pathname.includes('assessment')) {
        // Smart Check: Don't popup if user has dismissed it recently (sessionStorage)
        if (!sessionStorage.getItem('agentDismissed')) {
            setTimeout(() => {
                const modal = document.getElementById('agentModal');
                const btn = document.getElementById('floatingAgentBtn');
                if (modal) modal.classList.add('active');
                if (btn) btn.style.display = 'none';
            }, 3000);
        }
    }

    // Handle Close Button smartly
    const closeBtns = document.querySelectorAll('.agent-close-btn');
    closeBtns.forEach(btn => {
        // Override inline onclick for safer handling
        btn.onclick = null;
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.getElementById('agentModal');
            const floatingBtn = document.getElementById('floatingAgentBtn');
            if (modal) modal.classList.remove('active');
            if (floatingBtn) floatingBtn.style.display = 'flex';
            sessionStorage.setItem('agentDismissed', 'true');
        });
    });
});
`;

if (fs.existsSync(scriptJsPath)) {
    let scriptContent = fs.readFileSync(scriptJsPath, 'utf8');
    if (!scriptContent.includes('Smart Agent Logic')) {
        fs.appendFileSync(scriptJsPath, '\\n' + smartAgentScript);
        console.log("Appended smart agent logic to script.js");
    }
}
