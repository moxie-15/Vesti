import os
import re

base_dir = r"c:\Users\MOXIE\Desktop\Vesti"
html_files = [os.path.join(base_dir, "index.html")]

root_dir = os.path.join(base_dir, "pages", "countries")
for root, dirs, files in os.walk(root_dir):
    for f in files:
        if f.endswith(".html"):
            html_files.append(os.path.join(root, f))

for filepath in html_files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Fix the CSS paths
        if filepath == os.path.join(base_dir, "index.html"):
            content = content.replace('href="assets/style.css"', 'href="pages/countries/all countries/style.css"')
            content = content.replace('href="assets/scrolling.css"', 'href="pages/countries/all countries/scrolling.css"')
        else:
            rel_path = os.path.relpath(filepath, base_dir)
            depth = rel_path.count(os.sep)
            prefix = '../' * depth
            css_path = prefix + 'pages/countries/all countries/'
            content = content.replace('href="' + prefix + 'assets/style.css"', 'href="' + css_path + 'style.css"')
            content = content.replace('href="' + prefix + 'assets/scrolling.css"', 'href="' + css_path + 'scrolling.css"')

        # Fix the bunmi image name
        content = content.replace('expert-bunmi.jpg', 'expert-bunmi-BGTZe3Yq.jpg')

        # Also, fix the messed up nav-menu in the pages/countries files (from the greedy regex issue).
        # But wait, fixing the greedy regex issue is complex for a simple script. Let's just fix CSS and Image for now.

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
            
    except Exception as e:
        print(f"Error in {filepath}: {str(e)}")

print("Fixed CSS links and image names!")
