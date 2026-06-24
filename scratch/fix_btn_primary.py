import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # 1. Fix .btn-primary background and color
        new_content = re.sub(
            r'(\.btn-primary\s*\{[^\}]*?)background-color:\s*[^;]+;',
            r'\1background-color: #f9f5f0;',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )
        new_content = re.sub(
            r'(\.btn-primary\s*\{[^\}]*?)color:\s*[^;]+;',
            r'\1color: #13110f;',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )
        new_content = re.sub(
            r'(\.btn-primary\s*\{[^\}]*?)box-shadow:\s*[^;]+;',
            r'\1box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )
        
        # 2. Fix .btn-primary:hover background
        new_content = re.sub(
            r'(\.btn-primary:hover\s*\{[^\}]*?)background-color:\s*[^;]+;',
            r'\1background-color: #E2E8F0;',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )

        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated btn-primary in: {filepath}")
    except Exception as e:
        pass

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.css'):
            process_file(os.path.join(root, file))

print("btn-primary light theme wrap complete.")
