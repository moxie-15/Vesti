import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
nz_html_path = os.path.join(workspace_dir, 'New_zealand', 'index.html')

if os.path.exists(nz_html_path):
    with open(nz_html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace wikimedia links with local nz-landscape images
    content = re.sub(r'<img src="https://upload\.wikimedia\.org[^"]+" alt="Auckland Skyline"', r'<img src="assets/nz-landscape-1.png" alt="Auckland Skyline"', content)
    content = re.sub(r'<img src="https://upload\.wikimedia\.org[^"]+" alt="Mount Cook"', r'<img src="assets/nz-landscape-2.png" alt="Mount Cook"', content)
    content = re.sub(r'<img src="https://upload\.wikimedia\.org[^"]+" alt="Hobbiton Movie Set"', r'<img src="assets/nz-landscape-3.png" alt="Hobbiton Movie Set"', content)
    content = re.sub(r'<img src="https://upload\.wikimedia\.org[^"]+" alt="Milford Sound"', r'<img src="assets/nz-scenic-travel.png" alt="Milford Sound"', content)

    with open(nz_html_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("New Zealand images fixed.")
