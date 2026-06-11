import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

for country in countries:
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if not os.path.exists(html_path):
        continue
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace padding: 40px 60px 48px; with padding: 40px 160px 48px 60px;
    # to avoid the flag overlapping the text
    new_content = re.sub(r'padding: 40px 60px 48px;', r'padding: 40px 160px 48px 60px;', content)
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Caption padding updated to prevent flag overlap!")
