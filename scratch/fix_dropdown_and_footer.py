import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

def process_html(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # 1. Fix the double footer issue
        footer_pattern = re.compile(r'<footer class="footer"[^>]*>.*?</footer>', re.IGNORECASE | re.DOTALL)
        footers = footer_pattern.findall(new_content)
        if len(footers) > 1:
            parts = footer_pattern.split(new_content)
            res = ""
            for i in range(len(parts) - 1):
                res += parts[i]
                if i == len(parts) - 2:
                    res += footers[-1]
            res += parts[-1]
            new_content = res

        # 2. Add the Countries dropdown
        dropdown_regex = re.compile(r'(<li class="dropdown"[^>]*>)\s*<a href="([^"]*?)index\.html" class="nav-link">Countries <i data-lucide="chevron-down" class="nav-chevron"></i></a>\s*</li>', re.IGNORECASE | re.DOTALL)
        
        # We also need to add a small style block to make hover work if it doesn't exist
        hover_style = """<style>.dropdown:hover .country-dropdown-menu { opacity: 1 !important; visibility: visible !important; transform: translateY(0) !important; display: block !important; }</style>"""
        
        dropdown_html = r"""\1
        <a href="\2index.html" class="nav-link">Countries <i data-lucide="chevron-down" class="nav-chevron"></i></a>
        """ + hover_style + r"""
        <ul class="country-dropdown-menu" style="display: none; position: absolute; top: 100%; left: 0; background: #13110f; padding: 10px 0; border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.2); min-width: 180px; z-index: 1000; list-style: none; margin: 0; opacity: 0; visibility: hidden; transition: all 0.3s ease; transform: translateY(10px);">
            <li><a href="\2pages/countries/usa/index.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">USA</a></li>
            <li><a href="\2pages/countries/canada/index.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">Canada</a></li>
            <li><a href="\2pages/countries/australia/index.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">Australia</a></li>
            <li><a href="\2pages/countries/New_zealand/index.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">New Zealand</a></li>
            <li><a href="\2pages/countries/france/index.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">France</a></li>
            <li><a href="\2pages/countries/spain/index.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">Spain</a></li>
            <li><a href="\2pages/countries/all countries/main.html" style="display: block; padding: 10px 20px; color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">All Countries</a></li>
        </ul>
    </li>
"""
        new_content = dropdown_regex.sub(dropdown_html, new_content)
        
        # Also fix Company dropdown hover if it's broken
        company_dropdown_regex = re.compile(r'(<ul class="dropdown-menu"[^>]*>)', re.IGNORECASE)
        # Actually I already have a dropdown class hover style from above, so maybe I just apply `.dropdown-menu` to it as well:
        hover_style2 = """<style>.dropdown:hover .dropdown-menu { opacity: 1 !important; visibility: visible !important; transform: translateY(0) !important; display: block !important; }</style>"""
        if "dropdown:hover .dropdown-menu" not in new_content:
            new_content = new_content.replace('</nav>', hover_style2 + '\n</nav>')

        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {filepath}")
    except Exception as e:
        print(f"Error HTML {filepath}: {e}")

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.html'):
            process_html(os.path.join(root, file))

print("Fixes applied.")
