const fs = require('fs');
const path = require('path');

const baseDir = "c:/Users/MOXIE/Desktop/Vesti";

const footerTemplate = (depth) => `
<footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand-col">
                    <a href="${depth}index.html" class="footer-logo" style="display:flex; align-items:center; gap:0px; text-decoration:none;">
                        <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg"
                            overflow="visible">
                            <path d="M33 0C32.7 1.08 32.2 2.06 31.8 3.07C30.4 6.45 28.8 9.83 27.3 13.22C24.5 19.53 21.7 25.84 18.9 32.16C18.7 32.76 18.4 33 17.7 33H10.9C10.2 33 10.2 32.93 10.4 32.37C12.5 27.68 14.5 22.99 16.6 18.3C18.6 13.73 20.6 9.2 22.6 4.61C22.7 4.3 22.9 4.14 23.2 4.02C26.3 2.73 29.4 1.43 32.5 0.14C32.6 0.1 32.7 0.05 32.8 0H33Z" fill="#C0C71E" />
                            <path d="M0 9.4H7.5C8.2 9.4 8.2 9.45 7.9 10.1C6.8 12.82 5.6 15.54 4.4 18.26C4.3 18.42 4.3 18.69 4.1 18.69C3.8 18.68 3.8 18.41 3.7 18.25C2.6 15.67 1.4 13.07 0.3 10.47C0.2 10.26 0.1 10.07 0 9.87V9.4Z" fill="#C0C71E" />
                            <path d="M5.1 21.31C5.1 21.19 5.2 21.06 5.2 20.94C6.5 17.95 7.8 14.99 9.1 12C9.4 11.29 9.7 10.6 10.1 9.89C10.2 9.62 10.4 9.4 10.7 9.28C13.7 7.99 16.8 6.72 19.8 5.45C20 5.38 20.2 5.23 20.3 5.36C20.5 5.53 20.3 5.7 20.2 5.87C17.9 10.99 15.6 16.11 13.4 21.24C12.1 24.22 10.8 27.22 9.6 30.21C9.5 30.36 9.5 30.6 9.3 30.62C9.1 30.64 9 30.38 8.9 30.22C7.7 27.27 6.4 24.32 5.2 21.38C5.1 21.36 5.1 21.34 5.1 21.31Z" fill="#62943B" />
                        </svg>
                        <span style="font-family:'Outfit',sans-serif; font-weight:700; font-size:22px; color:inherit; letter-spacing:-0.5px; line-height:1; margin-left:-6px;">esti</span>
                    </a>
                    <div class="footer-socials">
                        <a href="https://x.com/Vestiofficial" target="_blank" aria-label="Twitter" class="social-icon-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/vestiofficial" target="_blank" aria-label="LinkedIn" class="social-icon-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        <a href="https://www.facebook.com/wevestiofficial/" target="_blank" aria-label="Facebook" class="social-icon-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/Vestiofficial" target="_blank" aria-label="Instagram" class="social-icon-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                    </div>
                </div>
                <div class="footer-col">
                    <h5>PRODUCTS</h5>
                    <ul>
                        <li><a href="https://wevesti.com/banking" target="_blank" rel="noopener">Financial Services</a></li>
                        <li><a href="https://wevesti.com/immigration" target="_blank" rel="noopener">Migration Services</a></li>
                        <li><a href="https://wevesti.com/events" target="_blank" rel="noopener">Events</a></li>
                        <li><a href="https://wevesti.com/prosper-conference" target="_blank" rel="noopener">Prosper Conference</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5>COMPANY</h5>
                    <ul>
                        <li><a href="https://wevesti.com/about" target="_blank" rel="noopener">About Us</a></li>
                        <li><a href="https://wevesti.com/career" target="_blank" rel="noopener">Careers</a></li>
                        <li><a href="https://wevesti.com/newsroom" target="_blank" rel="noopener">News Room</a></li>
                        <li><a href="https://wevesti.com/success-stories" target="_blank" rel="noopener">Success Story</a></li>
                        <li><a href="https://wevesti.com/expansion" target="_blank" rel="noopener">Vesti Expansion</a></li>
                        <li><a href="https://wevesti.com/resources" target="_blank" rel="noopener">Resource</a></li>
                        <li><a href="https://wevesti.com/team" target="_blank" rel="noopener">Team</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5>LEGAL</h5>
                    <ul>
                        <li><a href="https://wevesti.com/aml" target="_blank" rel="noopener">AML</a></li>
                        <li><a href="https://wevesti.com/faq" target="_blank" rel="noopener">FAQ</a></li>
                        <li><a href="https://wevesti.com/disclosures" target="_blank" rel="noopener">Disclosures</a></li>
                        <li><a href="https://wevesti.com/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5>CONTACT</h5>
                    <ul>
                        <li><a href="mailto:help@wevesti.com">help@wevesti.com</a></li>
                        <li><a href="https://intercom.help/vesti" target="_blank" rel="noopener">Help Center</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-disclaimer">
                <p>Vesti partners with Stripe Payments Company for money transmission services and account services with funds held at Evolve Bank & Trust, Member FDIC. Vesti Visa® Prepaid Cards are issued by Celtic Bank®, Member FDIC, pursuant to a license from Visa USA Inc.</p>
                <p style="margin-top: 15px;"><strong>Disclaimer :</strong> Vesti operates differently from a traditional law firm. We offer limited immigration services through licensed attorneys, but our owners are not lawyers themselves. This may impact certain protections, such as attorney-client privilege. We are also independently owned and unaffiliated with any government agency. Before using our services, please carefully review our privacy policy, terms of use, and fee agreement. Remember, nothing on our website constitutes legal advice. For personalized legal guidance, always consult a licensed attorney.</p>
                <p style="margin-top: 20px;">Copyrights &copy; Vesti 2026</p>
            </div>
        </div>
    </footer>`;

const getDepthString = (logicalPath) => {
    const parts = logicalPath.split('/');
    if (parts.length <= 1) return './';
    return '../'.repeat(parts.length - 1);
};

const navItemsTemplate = (depth) => `
            <ul class="nav-menu" id="nav-menu">
                <li class="dropdown">
                    <a href="${depth}index.html#pathways" class="nav-link">Products <i data-lucide="chevron-down" class="nav-chevron"></i></a>
                </li>
                <li class="dropdown">
                    <a href="${depth}index.html#scroll-stacking" class="nav-link">Company <i data-lucide="chevron-down" class="nav-chevron"></i></a>
                </li>
                <li class="dropdown">
                    <a href="${depth}index.html" class="nav-link">Countries <i data-lucide="chevron-down" class="nav-chevron"></i></a>
                </li>
            </ul>

            <div class="nav-cta">
                <a href="https://site.wevesti.com/auth" target="_blank" rel="noopener" class="btn-signin">Sign In</a>
                <a href="https://site.wevesti.com/register" target="_blank" rel="noopener" class="btn btn-primary">Create an account</a>
            </div>

            <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">
                <i data-lucide="menu"></i>
            </button>
        </div>
    </nav>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
        <ul class="mobile-menu">
            <li><a href="${depth}index.html#pathways" class="mobile-link">Products</a></li>
            <li><a href="${depth}index.html#scroll-stacking" class="mobile-link">Company</a></li>
            <li><a href="${depth}index.html" class="mobile-link">Countries</a></li>
            <li class="mobile-drawer-ctas">
                <a href="https://site.wevesti.com/auth" target="_blank" rel="noopener" class="btn btn-outline w-full">Sign In</a>
                <a href="https://site.wevesti.com/register" target="_blank" rel="noopener" class="btn btn-primary w-full">Create an account</a>
            </li>
        </ul>
    </div>
`;

function processHtmlFile(fullPath) {
    let content = fs.readFileSync(fullPath, 'utf8');
    const logicalPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
    const depth = getDepthString(logicalPath);
    let modified = false;

    // 1. Replace the inner parts of the navbar (keep the logo-area untouched)
    const navRegex = /<ul class="nav-menu" id="nav-menu">[\s\S]*?<\/nav>/i;
    if (navRegex.test(content)) {
        content = content.replace(navRegex, navItemsTemplate(depth));
        modified = true;
    }

    // Remove any existing mobile-drawer so we don't duplicate it (in case it existed before </nav>)
    const drawerRegex = /<!-- Mobile Navigation Drawer -->[\s\S]*?<\/div>\s*?(?=<!--|^\s*<section|^\s*<div)/im;
    if (drawerRegex.test(content)) {
        // We already injected it as part of navItemsTemplate
        // Actually, we must be careful. If we just injected it right after nav, let's remove the OLD one.
        // Let's just do a string replacement for the old drawer if it exists AFTER our injection.
        // Wait, safer to just replace from <ul class="nav-menu"> to the end of <div class="mobile-drawer">...</div> if it exists.
    }

    // Actually, let's refine the replacement:
    const fullNavDrawerRegex = /<ul class="nav-menu" id="nav-menu">[\s\S]*?(?:<\/nav>\s*<!-- Mobile Navigation Drawer -->[\s\S]*?<\/div>|<\/nav>)/i;
    if (fullNavDrawerRegex.test(content)) {
        content = content.replace(fullNavDrawerRegex, navItemsTemplate(depth).trim());
        modified = true;
    }

    // 2. Replace Footer
    const footerRegex = /<footer class="footer">[\s\S]*?<\/footer>/i;
    if (footerRegex.test(content)) {
        content = content.replace(footerRegex, footerTemplate(depth).trim());
        modified = true;
    }

    // 3. Inject script.js if missing
    if (!content.includes('script.js')) {
        const scriptTag = `<script src="${depth}assets/js/script.js"></script>\n</body>`;
        content = content.replace(/<\/body>/i, scriptTag);
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log("Fixed Nav & Footer in: " + logicalPath);
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
console.log("Nav and footer fix complete!");
