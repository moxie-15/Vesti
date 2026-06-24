import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # Replace the dull grey with a brighter silver/white in the logo paths
        new_content = re.sub(r'fill="#A3A3A3"', r'fill="#E5E7EB"', new_content)
        # Replace the cream with pure white in the logo paths
        new_content = re.sub(r'fill="#f9f5f0"', r'fill="#FFFFFF"', new_content)

        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Brightened logo in: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.html'):
            process_file(os.path.join(root, file))

print("Logo brightening complete.")
