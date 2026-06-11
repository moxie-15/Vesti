import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

for country in countries:
    # 1. FIX INDEX.HTML TEXT & MOBILE FLAG CSS
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if os.path.exists(html_path):
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if country != 'New_zealand':
            # Fix Hero title text
            content = re.sub(rf'(<span class="text-success">{country.replace("_", " ").title()} )Visitor Visa:', rf'\1Pathways:', content, flags=re.IGNORECASE)
            # Fix subtitle text
            content = content.replace('visitor visa and set up your pre-arrival', 'pathways and set up your pre-arrival')
            content = content.replace('Tourist & Visitor Visas', 'Visas')
            # Fix <title> tag
            content = content.replace('Visitors', 'Pathways')
        
        # Add a class to the inline flag div to make it easier to style on mobile
        content = content.replace('<div style="position: absolute; bottom: 40px; right: 20px; width: 140px; height: 90px; box-shadow: 0 \n10px 30px rgba(0,0,0,0.3); border-radius: 8px; overflow: hidden; border: 3px solid white; z-index: 5;">',
                                  '<div class="hero-flag-box" style="position: absolute; bottom: 40px; right: 20px; width: 140px; height: 90px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border-radius: 8px; overflow: hidden; border: 3px solid white; z-index: 5;">')
        content = content.replace('<div style="position: absolute; bottom: 40px; right: 20px; width: 140px; height: 90px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border-radius: 8px; overflow: hidden; border: 3px solid white; z-index: 5;">',
                                  '<div class="hero-flag-box" style="position: absolute; bottom: 40px; right: 20px; width: 140px; height: 90px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border-radius: 8px; overflow: hidden; border: 3px solid white; z-index: 5;">')

        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(content)

    # 2. FIX CSS MEDIA QUERIES
    css_path = os.path.join(workspace_dir, country, 'css', 'style.css')
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            css = f.read()
        
        # In max-width: 1024px, swap the order so text is on top (order: 1) and image is below (order: 2)
        css = css.replace('.hero-content {\n        order: 2;', '.hero-content {\n        order: 1;')
        css = css.replace('.hero-visual {\n        order: 1;', '.hero-visual {\n        order: 2;')
        
        # If the swap is already done or formatted slightly differently, let's just do a regex replace
        css = re.sub(r'(\.hero-content\s*\{\s*order:\s*)2', r'\g<1>1', css)
        css = re.sub(r'(\.hero-visual\s*\{\s*order:\s*)1', r'\g<1>2', css)

        # Add responsive flag rule inside the 768px media query
        if '.hero-flag-box {' not in css:
            mobile_flag_css = """
    .hero-flag-box {
        bottom: -10px !important;
        right: 10% !important;
        transform: scale(0.65);
    }
"""
            # Inject into max-width: 768px
            # Find the first occurrence of @media (max-width: 768px)
            match = re.search(r'@media\s*\(\s*max-width:\s*768px\s*\)\s*\{', css)
            if match:
                idx = match.end()
                css = css[:idx] + mobile_flag_css + css[idx:]

        with open(css_path, 'w', encoding='utf-8') as f:
            f.write(css)

print("Fixed HTML text and Mobile CSS for all countries!")
