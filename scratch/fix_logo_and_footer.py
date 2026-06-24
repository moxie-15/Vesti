import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

new_footer_html = """
<footer class="footer" style="background-color: #13110f; color: #FFF; padding: 80px 0 40px; font-family: 'Inter', sans-serif;">
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 40px;">
            <div style="flex: 1; min-width: 250px; max-width: 350px;">
                <h2 style="font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 32px; color: #FFF; margin-bottom: 20px; letter-spacing: -0.5px;">Vesti</h2>
                <p style="font-size: 14px; color: #A3A3A3; line-height: 1.6;">The operating system for global talent migration. Built for the ambitious, guided by humans.</p>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 60px;">
                <div class="footer-col">
                    <h5 style="font-size: 12px; font-weight: 700; color: #FFF; margin-bottom: 20px; letter-spacing: 1px;">INTELLIGENCE</h5>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 15px;">
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">O-1 Scoring</a></li>
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">EB-1A Roadmap</a></li>
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">NIW Builder</a></li>
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">Express Entry</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5 style="font-size: 12px; font-weight: 700; color: #FFF; margin-bottom: 20px; letter-spacing: 1px;">HUMAN LAYER</h5>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 15px;">
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">Expert Network</a></li>
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">Legal Reviews</a></li>
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">Concierge</a></li>
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">Success Stories</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5 style="font-size: 12px; font-weight: 700; color: #FFF; margin-bottom: 20px; letter-spacing: 1px;">COMPANY</h5>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 15px;">
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">Methodology</a></li>
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">Pricing</a></li>
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">Careers</a></li>
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5 style="font-size: 12px; font-weight: 700; color: #FFF; margin-bottom: 20px; letter-spacing: 1px;">LEGAL</h5>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 15px;">
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">Privacy Policy</a></li>
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">Terms of Service</a></li>
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">AML</a></li>
                        <li><a href="#" style="color: #A3A3A3; text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#A3A3A3'">Disclosures</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div style="margin-top: 60px; padding-top: 20px; color: #A3A3A3; font-size: 12px; text-align: left;">
        </div>
    </div>
</footer>
</body>"""

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # 1. Fix the logo bleeding: Change the #13110f path in the SVG to #A3A3A3 (silver/grey)
        # This will give the logo depth (Cream + Silver) instead of Cream + Charcoal (which disappears)
        # We know the path had fill="#13110f"
        new_content = re.sub(r'<path d="M5\.1 21\.31.*?fill="#13110f"></path>', 
                             r'<path d="M5.1 21.31C5.1 21.19 5.2 21.06 5.2 20.94C6.5 17.95 7.8 14.99 9.1 12C9.4 11.29 9.7 10.6 10.1 9.89C10.2 9.62 10.4 9.4 10.7 9.28C13.7 7.99 16.8 6.72 19.8 5.45C20 5.38 20.2 5.23 20.3 5.36C20.5 5.53 20.3 5.7 20.2 5.87C17.9 10.99 15.6 16.11 13.4 21.24C12.1 24.22 10.8 27.22 9.6 30.21C9.5 30.36 9.5 30.6 9.3 30.62C9.1 30.64 9 30.38 8.9 30.22C7.7 27.27 6.4 24.32 5.2 21.38C5.1 21.36 5.1 21.34 5.1 21.31Z" fill="#A3A3A3"></path>', 
                             new_content, flags=re.DOTALL)
                             
        # 2. Add footer to index.html if missing
        if filepath.endswith('index.html') and '<footer' not in new_content:
            new_content = new_content.replace('</body>', new_footer_html)

        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated logo/footer in: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.html'):
            process_file(os.path.join(root, file))

print("Logo fix and Footer injection complete.")
