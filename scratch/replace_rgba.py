import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

replacements = [
    (re.compile(r'rgba\(\s*6\s*,\s*14\s*,\s*66\s*,\s*([0-9.]+)\s*\)', re.IGNORECASE), r'rgba(19, 17, 15, \1)'),
    (re.compile(r'rgba\(\s*98\s*,\s*148\s*,\s*59\s*,\s*([0-9.]+)\s*\)', re.IGNORECASE), r'rgba(0, 165, 68, \1)'),
    (re.compile(r'rgba\(\s*192\s*,\s*199\s*,\s*30\s*,\s*([0-9.]+)\s*\)', re.IGNORECASE), r'rgba(0, 199, 88, \1)'),
    (re.compile(r'rgba\(\s*244\s*,\s*250\s*,\s*242\s*,\s*([0-9.]+)\s*\)', re.IGNORECASE), r'rgba(249, 245, 240, \1)')
]

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        for pattern, replacement in replacements:
            new_content = pattern.sub(replacement, new_content)
            
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated RGBA in: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.html') or file.endswith('.css'):
            process_file(os.path.join(root, file))

print("RGBA replacement complete.")
