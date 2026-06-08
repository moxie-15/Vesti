import os
import re

folders = ['canada', 'australia', 'usa', 'france', 'spain', 'New_zealand']

for folder in folders:
    css_path = f"{folder}/css/style.css"
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            css = f.read()
        
        # Replace hardcoded greens with var(--primary)
        css = re.sub(r'color:\s*#[a-zA-Z0-9]+;\s*/\*\s*text-success\s*\*/', 'color: var(--primary);', css)
        css = re.sub(r'\.text-success\s*{\s*color:\s*#[a-zA-Z0-9]+;?', '.text-success { color: var(--primary);', css)
        css = re.sub(r'\.btn-success\s*{\s*background-color:\s*#[a-zA-Z0-9]+;?', '.btn-success { background-color: var(--primary);', css)
        css = re.sub(r'\.btn-success:hover\s*{\s*background-color:\s*#[a-zA-Z0-9]+;?', '.btn-success:hover { background-color: var(--primary-hover);', css)
        css = re.sub(r'\.highlight-green\s*{\s*color:\s*#[a-zA-Z0-9]+;?', '.highlight-green { color: var(--primary);', css)
        css = re.sub(r'\.highlight-green\s*{\s*background:\s*rgba\([^)]+\);?', '.highlight-green { background: var(--border-glow);', css)

        with open(css_path, 'w', encoding='utf-8') as f:
            f.write(css)
            
    # Also fix the au-tourist-beach.png in HTML files
    html_path = f"{folder}/index.html"
    if os.path.exists(html_path):
        with open(html_path, 'r', encoding='utf-8') as f:
            html = f.read()
            
        html = html.replace('assets/au-tourist-beach.png', 'assets/hero-landscape.png')
        html = html.replace('assets/nz-tourist-beach.png', 'assets/hero-landscape.png')
        
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(html)

print("Dynamic styles and images fixed!")
