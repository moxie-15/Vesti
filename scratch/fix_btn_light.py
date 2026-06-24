import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # We need to replace the background-color and color of .btn-create-account
        # Currently it might be background-color: #13110f; color: #FFFFFF;
        # We want background-color: #f9f5f0; color: #13110f;
        
        new_content = re.sub(
            r'(\.btn-create-account\s*\{\s*)background-color:\s*#[0-9a-fA-F]+;\s*color:\s*#[0-9a-fA-F]+;',
            r'\1background-color: #f9f5f0;\n            color: #13110f;',
            new_content, flags=re.IGNORECASE
        )
        
        new_content = re.sub(
            r'(\.btn-create-account:hover\s*\{\s*)background-color:\s*#[0-9a-fA-F]+;',
            r'\1background-color: #E2E8F0;',
            new_content, flags=re.IGNORECASE
        )

        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated btn-create-account in: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.html') or file.endswith('.css'):
            process_file(os.path.join(root, file))

print("Button light theme wrap complete.")
