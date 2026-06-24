import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

def process_html(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # 1. Replace #E5E7EB with #FFFFFF in the logo SVG
        new_content = re.sub(
            r'fill="#E5E7EB"',
            r'fill="#FFFFFF"',
            new_content, flags=re.IGNORECASE
        )
        
        # 2. Add global font-smoothing to eliminate chromatic aberration (red/blue fringing on Windows ClearType)
        if "</head>" in new_content and "font-smoothing: antialiased" not in new_content:
            head_style = """<style>
    body, h1, h2, h3, h4, h5, h6, p, a, span { 
        -webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale; 
        text-rendering: optimizeLegibility; 
    }
</style>
</head>"""
            new_content = new_content.replace("</head>", head_style)

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

print("Logo and text fringing fixes applied.")
