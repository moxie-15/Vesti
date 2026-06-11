import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

for country in countries:
    # 1. FIX LOCALSTORAGE SCOPING FOR PRICES
    files_to_fix = ['portal-settings.html', 'travel-fees.html', 'checkout.html']
    storage_key = f"vesti_portal_config_{country.lower()}"
    
    for file_name in files_to_fix:
        html_path = os.path.join(workspace_dir, country, file_name)
        if os.path.exists(html_path):
            with open(html_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace the generic key with the country-specific key
            content = content.replace("'vesti_portal_config'", f"'{storage_key}'")
            content = content.replace("'vesti_portal_config_saved'", f"'{storage_key}_saved'")
            
            with open(html_path, 'w', encoding='utf-8') as f:
                f.write(content)

    # 2. FIX MOBILE IMAGE & FLAG POSITIONING CSS
    css_path = os.path.join(workspace_dir, country, 'css', 'style.css')
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            css = f.read()
        
        # Remove any existing hero-flag-box rules we added earlier
        css = re.sub(r'\.hero-flag-box\s*\{[^}]*\}\s*', '', css)
        
        # Better mobile CSS
        mobile_css = """
    .hero-flag-box {
        bottom: 10px !important;
        right: 15px !important;
        transform: scale(0.65) !important;
        transform-origin: bottom right !important;
        z-index: 20 !important;
    }
    .hero-visual {
        height: 320px !important;
        max-width: 360px !important;
        margin: 0 auto 30px !important;
        position: relative !important;
    }
    .hero-image-oval {
        width: 100% !important;
        height: 100% !important;
    }
"""
        # Inject into max-width: 768px media query
        match = re.search(r'@media\s*\(\s*max-width:\s*768px\s*\)\s*\{', css)
        if match:
            idx = match.end()
            css = css[:idx] + mobile_css + css[idx:]

        with open(css_path, 'w', encoding='utf-8') as f:
            f.write(css)

print("Fixed local storage for prices and mobile image positioning!")
