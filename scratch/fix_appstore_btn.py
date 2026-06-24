import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # 1. Fix .download-btn
        new_content = re.sub(
            r'(\.download-btn\s*\{[^\}]*?)background-color:\s*[^;]+;',
            r'\1background-color: #f9f5f0;',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )
        new_content = re.sub(
            r'(\.download-btn\s*\{[^\}]*?)border:\s*[^;]+;',
            r'\1border: 1px solid #f9f5f0;',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )
        
        # 2. Fix .download-btn:hover
        new_content = re.sub(
            r'(\.download-btn:hover\s*\{[^\}]*?)background-color:\s*[^;]+;',
            r'\1background-color: #E2E8F0;',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )
        new_content = re.sub(
            r'(\.download-btn:hover\s*\{[^\}]*?)border-color:\s*[^;]+;',
            r'\1border-color: #E2E8F0;',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )
        
        # 3. Fix .download-btn-icon
        new_content = re.sub(
            r'(\.download-btn-icon\s*\{[^\}]*?)color:\s*[^;]+;',
            r'\1color: #13110f;',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )
        new_content = re.sub(
            r'(\.download-btn-icon\s*\{[^\}]*?)fill:\s*[^;]+;',
            r'\1fill: #13110f;',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )
        
        # 4. Fix .download-btn-sub
        new_content = re.sub(
            r'(\.download-btn-sub\s*\{[^\}]*?)color:\s*[^;]+;',
            r'\1color: rgba(19, 17, 15, 0.8);',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )
        
        # 5. Fix .download-btn-main
        new_content = re.sub(
            r'(\.download-btn-main\s*\{[^\}]*?)color:\s*[^;]+;',
            r'\1color: #13110f;',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )

        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated app store buttons in: {filepath}")
    except Exception as e:
        pass

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.css'):
            process_file(os.path.join(root, file))

print("App Store button light theme wrap complete.")
