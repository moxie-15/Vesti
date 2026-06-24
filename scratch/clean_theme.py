import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # 1. Fix .btn-create-account
        new_content = re.sub(
            r'(\.btn-create-account\s*\{[^}]*?)background-color:\s*#[0-9a-fA-F]+;',
            r'\1background-color: #f9f5f0;',
            new_content, flags=re.IGNORECASE|re.DOTALL
        )
        new_content = re.sub(
            r'(\.btn-create-account\s*\{[^}]*?)color:\s*#[0-9a-fA-F]+;',
            r'\1color: #13110f;',
            new_content, flags=re.IGNORECASE|re.DOTALL
        )
        new_content = re.sub(
            r'(\.btn-create-account:hover\s*\{[^}]*?)background-color:\s*#[0-9a-fA-F]+;',
            r'\1background-color: #E2E8F0;',
            new_content, flags=re.IGNORECASE|re.DOTALL
        )
        new_content = re.sub(
            r'box-shadow:\s*0\s+5px\s+15px\s+rgba\(0,\s*165,\s*68,\s*0\.3\)',
            r'box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1)',
            new_content, flags=re.IGNORECASE
        )

        # 2. Fix .gradient-text (ambitious.)
        new_content = re.sub(
            r'linear-gradient\(90deg,\s*#13110f,\s*#00a544\)',
            r'linear-gradient(90deg, #13110f, #737373)',
            new_content, flags=re.IGNORECASE
        )

        # 3. Fix Scan My Profile button
        new_content = re.sub(
            r'(\.btn-scan-ai[^>]*?)background-color:\s*#00a544',
            r'\1background-color: #13110f',
            new_content, flags=re.IGNORECASE
        )

        # 4. Fix other inline greens
        new_content = re.sub(r'#00a544', r'#13110f', new_content, flags=re.IGNORECASE)
        new_content = re.sub(r'#00c758', r'#13110f', new_content, flags=re.IGNORECASE)
        
        # 5. Fix green dot in tag "12 NEW NIW APPROVALS TODAY" and "Available Now"
        # The dot used #4ADE80 or #00a544
        new_content = re.sub(r'#4ADE80', r'#13110f', new_content, flags=re.IGNORECASE)
        
        # 6. Fix "84% Match" tags (were light green background, dark green text)
        new_content = re.sub(r'#D1FAE5', r'#E2E8F0', new_content, flags=re.IGNORECASE) # Light grey background
        new_content = re.sub(r'#065F46', r'#13110f', new_content, flags=re.IGNORECASE) # Charcoal text

        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Cleaned theme in: {filepath}")
    except Exception as e:
        pass

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.html') or file.endswith('.css'):
            process_file(os.path.join(root, file))

print("Clean theme applied successfully.")
