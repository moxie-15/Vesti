import os
import re

html_files = [r"c:\Users\MOXIE\Desktop\Vesti\index.html"]

root_dir = r"c:\Users\MOXIE\Desktop\Vesti\pages\countries"
for root, dirs, files in os.walk(root_dir):
    for f in files:
        if f.endswith(".html"):
            html_files.append(os.path.join(root, f))

nav_menu_new = '''<ul class="nav-menu" id="nav-menu">
                <li class="dropdown">
                    <a href="#" class="nav-link">Products <i data-lucide="chevron-down" class="nav-chevron"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="passports.html">Passports</a></li>
                        <li><a href="consultation.html">Consultation</a></li>
                        <li><a href="visas.html">Visas</a></li>
                        <li><a href="banking.html">Global Banking</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="nav-link">Company <i data-lucide="chevron-down" class="nav-chevron"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="about.html">About Vesti</a></li>
                        <li><a href="careers.html">Careers</a></li>
                        <li><a href="press.html">Press</a></li>
                        <li><a href="faqs.html">FAQs</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="updates.html">Vesti Updates</a></li>
                    </ul>
                </li>
            </ul>'''

agent_modal_new = '''<div class="agent-modal-overlay" id="agentModal">
        <div class="agent-modal">
            <button class="agent-close-btn" onclick="document.getElementById('agentModal').classList.remove('active'); document.getElementById('floatingAgentBtn').style.display='flex';">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="agent-modal-left" style="background: url('../../../assets/expert-bunmi.jpg') center/cover; position: relative; background-color: #060E42;">
                <div style="position: absolute; inset: 0; background-color: rgba(6, 14, 66, 0.4);"></div>
                <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 50%; background: linear-gradient(to top, rgba(6, 14, 66, 0.9), transparent);"></div>
                <div style="position: absolute; bottom: 30px; left: 30px; color: #FFF; font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 24px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); z-index: 2;">Bunmi from Vesti</div>
                <div style="position: absolute; bottom: 12px; left: 30px; color: #4ADE80; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 6px; z-index: 2;">
                    <span style="width: 8px; height: 8px; background: #4ADE80; border-radius: 50%; display: inline-block;"></span> Available Now
                </div>
            </div>
            <div class="agent-modal-right">
                <h2 class="agent-title" style="font-size: 28px; margin-bottom: 8px;">Your Global Mobility Score</h2>
                <p class="agent-desc" style="font-size: 14px; margin-bottom: 24px;">Based on your achievement markers, we identified six pathways. Three are within reach today.</p>
                
                <div class="assessment-cards" style="display: flex; flex-direction: column; gap: 12px; max-height: 350px; overflow-y: auto; padding-right: 10px;">
                    <!-- US O-1A Visa -->
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

                    <!-- US EB-1A -->
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
    
    <script>
        function submitAssessment() {
            const rightPanel = document.querySelector('.agent-modal-right');
            rightPanel.innerHTML = 
                <div style="display:flex; flex-direction:column; height:100%; justify-content:center;">
                    <div style="display:flex; align-items:center; gap: 12px; margin-bottom:20px;">
                        <div style="width:12px; height:12px; background:#4ADE80; border-radius:50%; animation: pulse 1.5s infinite;"></div>
                        <h2 class="agent-title" style="font-size: 24px; margin:0;">Live Agent Connected</h2>
                    </div>
                    <p class="agent-desc">Hi! I'm Bunmi. I see you're looking at the US pathways. Let's get started on your application roadmap.</p>
                    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:16px; margin-bottom:20px;">
                        <p style="margin:0; font-size:14px; color:#4A5568;"><em>Type your message here...</em></p>
                    </div>
                    <button class="agent-action-btn" style="padding: 12px 0; font-size: 14px; border:none; border-radius:8px; cursor:pointer; background:#060E42; color:#fff; width:100%;">Start Chat</button>
                </div>
            ;
        }
        
        setTimeout(() => {
            document.getElementById('agentModal').classList.add('active');
            const btn = document.getElementById('floatingAgentBtn');
            if (btn) btn.style.display = 'none';
        }, 3000);
    </script>'''

footer_new = '''<footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand-col" style="max-width: 300px;">
                    <a href="index.html" class="footer-logo" style="margin-bottom: 20px; display:inline-block; text-decoration:none;">
                        <span style="font-family:'Outfit',sans-serif; font-weight:800; font-size:32px; color:white;">Vesti</span>
                    </a>
                    <p style="color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
                        The operating system for global talent migration. Built for the ambitious, guided by humans.
                    </p>
                </div>

                <div class="footer-col">
                    <h5>INTELLIGENCE</h5>
                    <ul>
                        <li><a href="scoring.html">O-1 Scoring</a></li>
                        <li><a href="eb1a-roadmap.html">EB-1A Roadmap</a></li>
                        <li><a href="niw-builder.html">NIW Builder</a></li>
                        <li><a href="express-entry.html">Express Entry</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h5>HUMAN LAYER</h5>
                    <ul>
                        <li><a href="network.html">Expert Network</a></li>
                        <li><a href="legal-reviews.html">Legal Reviews</a></li>
                        <li><a href="concierge.html">Concierge</a></li>
                        <li><a href="success-stories.html">Success Stories</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h5>COMPANY</h5>
                    <ul>
                        <li><a href="methodology.html">Methodology</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="careers.html">Careers</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h5>LEGAL</h5>
                    <ul>
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms of Service</a></li>
                        <li><a href="aml.html">AML</a></li>
                        <li><a href="disclosures.html">Disclosures</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-disclaimer" style="border-top: 1px solid rgba(255,255,255,0.1); margin-top: 40px; padding-top: 20px; text-align: center;">
                <p style="color: rgba(255,255,255,0.5); font-size: 13px;">© 2026 Vesti Global Mobility Intelligence | <a href="privacy.html" style="color: rgba(255,255,255,0.5); text-decoration: none;">Privacy</a> | <a href="terms.html" style="color: rgba(255,255,255,0.5); text-decoration: none;">Terms</a></p>
            </div>
        </div>
    </footer>'''

for filepath in html_files:
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        content = re.sub(r'<ul class="nav-menu" id="nav-menu">.*?</ul>', nav_menu_new, content, flags=re.DOTALL)
        content = re.sub(r'<footer class="footer">.*?</footer>', footer_new, content, flags=re.DOTALL)
        content = re.sub(r'<div class="agent-modal-overlay" id="agentModal">.*?</div>\s*<script>.*?</script>', agent_modal_new, content, flags=re.DOTALL)
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
            
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

print("UI Updates applied.")
