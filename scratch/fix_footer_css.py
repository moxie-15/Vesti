import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

new_footer_html = """<footer class="footer" style="background-color: #13110f; color: #FFF; padding: 80px 0 40px; font-family: 'Inter', sans-serif;">
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
</footer>"""

footer_pattern = re.compile(r'<footer class="footer">.*?</footer>', re.DOTALL)
style_pattern = re.compile(r'<style>\s*/\* Animations \*/.*?</style>', re.DOTALL)

# 1. Handle CSS extraction from index.html
index_path = os.path.join(base_dir, "index.html")
css_dir = os.path.join(base_dir, "assets", "css")
if not os.path.exists(css_dir):
    os.makedirs(css_dir)

if os.path.exists(index_path):
    with open(index_path, 'r', encoding='utf-8') as f:
        index_content = f.read()

    style_match = style_pattern.search(index_content)
    if style_match:
        # Extract content inside <style> and </style>
        style_content = style_match.group(0).replace('<style>', '').replace('</style>', '').strip()
        
        # Save to assets/css/global-inline.css
        css_path = os.path.join(css_dir, "global-inline.css")
        with open(css_path, 'w', encoding='utf-8') as f:
            f.write(style_content)
            
        # Replace the inline style block with a link
        link_tag = '<link href="assets/css/global-inline.css" rel="stylesheet"/>'
        index_content = index_content.replace(style_match.group(0), link_tag)
        
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(index_content)
        print("Successfully extracted CSS from index.html to assets/css/global-inline.css")

# 2. Globally replace footer in all HTML files
def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if '<footer class="footer">' in content:
            new_content = footer_pattern.sub(new_footer_html, content)
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated footer in: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.html'):
            process_file(os.path.join(root, file))

print("Footer replacement script complete.")
