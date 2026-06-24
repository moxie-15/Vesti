import os
import re

nav_html_template = '''<ul class="nav-menu" id="nav-menu">
    <li class="dropdown" style="position: relative;">
        <a href="#" class="nav-link">Products <i data-lucide="chevron-down" class="nav-chevron"></i></a>
        <ul class="dropdown-menu" style="display: none; position: absolute; top: 100%; left: 0; background: #060E42; padding: 10px 0; border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.2); min-width: 180px; z-index: 1000; list-style: none; margin: 0;">
            <li><a href="{prefix}passports.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px;">Passports</a></li>
            <li><a href="{prefix}consultation.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px;">Consultation</a></li>
            <li><a href="{prefix}visas.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px;">Visas</a></li>
            <li><a href="{prefix}banking.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px;">Global Banking</a></li>
        </ul>
    </li>
    <li class="dropdown" style="position: relative;">
        <a href="#" class="nav-link">Company <i data-lucide="chevron-down" class="nav-chevron"></i></a>
        <ul class="dropdown-menu" style="display: none; position: absolute; top: 100%; left: 0; background: #060E42; padding: 10px 0; border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.2); min-width: 180px; z-index: 1000; list-style: none; margin: 0;">
            <li><a href="{prefix}about.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px;">About Vesti</a></li>
            <li><a href="{prefix}careers.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px;">Careers</a></li>
            <li><a href="{prefix}press.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px;">Press</a></li>
            <li><a href="{prefix}faqs.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px;">FAQs</a></li>
            <li><a href="{prefix}contact.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px;">Contact Us</a></li>
            <li><a href="{prefix}updates.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px;">Vesti Updates</a></li>
        </ul>
    </li>
    <li class="dropdown" style="position: relative;">
        <a href="{prefix}index.html" class="nav-link">Countries <i data-lucide="chevron-down" class="nav-chevron"></i></a>
    </li>
</ul>'''

modal_html_template = '''<div class="agent-modal-overlay" id="agentModal">
    <div class="agent-modal">
        <button class="agent-close-btn" onclick="document.getElementById('agentModal').classList.remove('active'); document.getElementById('floatingAgentBtn').style.display='flex';">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        
        <div id="modal-state-initial" style="display: flex; width: 100%; height: 100%;">
            <div class="agent-modal-left" style="background: url('{img_path}') center/cover; position: relative;">
                <div style="position: absolute; inset: 0; background-color: rgba(235, 226, 212, 0.5); mix-blend-mode: multiply;"></div>
                <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 50%; background: linear-gradient(to top, rgba(6, 14, 66, 0.8), transparent);"></div>
                <div style="position: absolute; bottom: 20px; left: 20px; color: #FFF; font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); z-index: 2;">Bunmi from Vesti</div>
            </div>
            <div class="agent-modal-right">
                <h2 class="agent-title">Need help with your Visa? 👋</h2>
                <p class="agent-desc">Hi! I'm Bunmi from the Vesti support team. I noticed you're looking at our global mobility pathways. Let me know if you need an expert to guide you through the process!</p>
                <button class="agent-action-btn" onclick="showAssessmentState()" style="padding: 16px 0; font-size: 16px; border:none; border-radius:12px; cursor:pointer; background:#060E42; color:#fff; width:100%; display:flex; justify-content:center; align-items:center; gap:8px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Talk to a Live Agent
                </button>
            </div>
        </div>
        
        <div id="modal-state-assessment" style="display: none; width: 100%; height: 100%;">
            <div class="agent-modal-left" style="background-color: #060E42; position: relative;">
                <div style="position: absolute; bottom: 30px; left: 30px; color: #FFF; font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 24px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); z-index: 2;">Bunmi from Vesti</div>
                <div style="position: absolute; bottom: 12px; left: 30px; color: #4ADE80; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 6px; z-index: 2;">
                    <span style="width: 8px; height: 8px; background: #4ADE80; border-radius: 50%; display: inline-block;"></span> Available Now
                </div>
            </div>
            <div class="agent-modal-right">
                <h2 class="agent-title" style="font-size: 28px; margin-bottom: 8px;">Your Global Mobility Score</h2>
                <p class="agent-desc" style="font-size: 14px; margin-bottom: 24px;">Based on your achievement markers, we identified six pathways. Three are within reach today.</p>
                
                <div class="assessment-cards" style="display: flex; flex-direction: column; gap: 12px; max-height: 350px; overflow-y: auto; padding-right: 10px;">
                    <div class="pathway-card" style="border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; background: #F8FAFC;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <h4 style="margin:0; font-family: 'Outfit', sans-serif; font-size: 16px; color: #060E42;">United States | O-1A Visa</h4>
                            <span style="background: #D1FAE5; color: #065F46; padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: 700;">84% Match</span>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 16px; font-size: 12px; color: #4A5568;">
                            <div><strong>Strength:</strong> Extraordinary</div>
                            <div><strong>Risk Profile:</strong> Low</div>
                            <div style="grid-column: span 2;"><strong>Processing:</strong> 15 Days (Premium)</div>
                        </div>
                        <button class="agent-action-btn" onclick="submitAssessment()" style="padding: 10px 0; font-size: 14px; border:none; border-radius:8px; cursor:pointer; background:#060E42; color:#fff; width:100%;">View Roadmap</button>
                    </div>

                    <div class="pathway-card" style="border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; background: #F8FAFC;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <h4 style="margin:0; font-family: 'Outfit', sans-serif; font-size: 16px; color: #060E42;">United States | EB-1A</h4>
                            <span style="background: #FEF3C7; color: #92400E; padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: 700;">61% Match</span>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 16px; font-size: 12px; color: #4A5568;">
                            <div><strong>Strength:</strong> Emerging</div>
                            <div><strong>Gap:</strong> 2 Peer Reviews</div>
                            <div style="grid-column: span 2;"><strong>Timeline:</strong> 12–18 Months</div>
                        </div>
                        <button class="agent-action-btn" onclick="submitAssessment()" style="padding: 10px 0; font-size: 14px; background: #EDF2F7; color: #060E42; border:none; border-radius:8px; cursor:pointer; width:100%;">Bridge the Gap</button>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
</div>'''

footer_cols_html_template = '''<div class="footer-col">
    <h5>INTELLIGENCE</h5>
    <ul>
        <li><a href="{prefix}scoring.html">O-1 Scoring</a></li>
        <li><a href="{prefix}eb1a-roadmap.html">EB-1A Roadmap</a></li>
        <li><a href="{prefix}niw-builder.html">NIW Builder</a></li>
        <li><a href="{prefix}express-entry.html">Express Entry</a></li>
    </ul>
</div>
<div class="footer-col">
    <h5>HUMAN LAYER</h5>
    <ul>
        <li><a href="{prefix}network.html">Expert Network</a></li>
        <li><a href="{prefix}legal-reviews.html">Legal Reviews</a></li>
        <li><a href="{prefix}concierge.html">Concierge</a></li>
        <li><a href="{prefix}success-stories.html">Success Stories</a></li>
    </ul>
</div>
<div class="footer-col">
    <h5>COMPANY</h5>
    <ul>
        <li><a href="{prefix}methodology.html">Methodology</a></li>
        <li><a href="{prefix}pricing.html">Pricing</a></li>
        <li><a href="{prefix}careers.html">Careers</a></li>
        <li><a href="{prefix}contact.html">Contact</a></li>
    </ul>
</div>
<div class="footer-col">
    <h5>LEGAL</h5>
    <ul>
        <li><a href="{prefix}privacy.html">Privacy Policy</a></li>
        <li><a href="{prefix}terms.html">Terms of Service</a></li>
        <li><a href="{prefix}aml.html">AML</a></li>
        <li><a href="{prefix}disclosures.html">Disclosures</a></li>
    </ul>
</div>'''

def process_file(filepath, base_dir):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Determine prefix for paths
        rel_path = os.path.relpath(filepath, base_dir)
        depth = rel_path.count(os.sep)
        prefix = '../' * depth
        img_path = prefix + 'assets/expert-bunmi.jpg'
        
        # Some users had broken assets paths in index.html like "all countries/"
        # We replace any "all countries/" with "assets/" in the content to be safe.
        content = content.replace('href="all countries/', 'href="assets/')
        content = content.replace('href="../../all countries/', 'href="../../assets/')

        # 1. Fix "/* Agent Popup Modal */" string
        content = content.replace('/* Agent Popup Modal */', '')

        # 2. Replace Modal
        modal_html = modal_html_template.replace('{img_path}', img_path)
        content = re.sub(r'<div class="agent-modal-overlay" id="agentModal">.*?</div>\s*</div>\s*</div>', modal_html, content, flags=re.DOTALL)
        # If the above fails because the regex didn't match the closing tags well, use a safer regex:
        content = re.sub(r'<div class="agent-modal-overlay" id="agentModal">.*?</script>', modal_html + '\n<script id="agent-modal-script">function showAssessmentState(){document.getElementById("modal-state-initial").style.display="none";document.getElementById("modal-state-assessment").style.display="flex"}function submitAssessment(){const rightPanel=document.querySelector("#modal-state-assessment .agent-modal-right");rightPanel.innerHTML=<div style="display:flex; flex-direction:column; height:100%; justify-content:center;"><div style="display:flex; align-items:center; gap: 12px; margin-bottom:20px;"><div style="width:12px; height:12px; background:#4ADE80; border-radius:50%; animation: pulse 1.5s infinite;"></div><h2 class="agent-title" style="font-size: 24px; margin:0;">Live Agent Connected</h2></div><p class="agent-desc">Hi! I\'m Bunmi. I see you\'re looking at the US pathways. Let\'s get started on your application roadmap.</p><div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:16px; margin-bottom:20px;"><p style="margin:0; font-size:14px; color:#4A5568;"><em>Type your message here...</em></p></div><button class="agent-action-btn" style="padding: 12px 0; font-size: 14px; border:none; border-radius:8px; cursor:pointer; background:#060E42; color:#fff; width:100%;">Start Chat</button></div>}setTimeout(()=>{document.getElementById("agentModal").classList.add("active");const btn=document.getElementById("floatingAgentBtn");if(btn)btn.style.display="none"},3000);</script>', content, flags=re.DOTALL)

        # 3. Replace Nav
        nav_html = nav_html_template.replace('{prefix}', prefix)
        content = re.sub(r'<ul class="nav-menu" id="nav-menu">.*?</ul>', nav_html, content, flags=re.DOTALL)

        # 4. Replace Footer columns
        footer_cols_html = footer_cols_html_template.replace('{prefix}', prefix)
        # find the 4 existing footer-cols and replace them
        # We will use regex to find <div class="footer-grid">...<div class="footer-disclaimer">
        # and replace the content between footer-brand-col and footer-disclaimer
        
        match = re.search(r'(<div class="footer-brand-col".*?</div>)(.*?)<div class="footer-disclaimer"', content, flags=re.DOTALL)
        if match:
            new_grid_content = match.group(1) + footer_cols_html + '<div class="footer-disclaimer"'
            content = content[:match.start()] + new_grid_content + content[match.end():]

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
            
    except Exception as e:
        print(f"Error in {filepath}: {str(e)}")

base_dir = r"c:\Users\MOXIE\Desktop\Vesti"
html_files = [os.path.join(base_dir, "index.html")]

root_dir = os.path.join(base_dir, "pages", "countries")
for root, dirs, files in os.walk(root_dir):
    for f in files:
        if f.endswith(".html"):
            html_files.append(os.path.join(root, f))

for fp in html_files:
    process_file(fp, base_dir)

print("Perfect UI fixes applied.")
