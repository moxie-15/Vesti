import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

# Let's fix the button colors in CSS
css_replacements = [
    (re.compile(r'\.btn-create-account\s*\{\s*background-color:\s*#[0-9a-fA-F]+;\s*color:\s*#[0-9a-fA-F]+;', re.IGNORECASE), 
     r'.btn-create-account {\n            background-color: #f9f5f0;\n            color: #13110f;'),
    (re.compile(r'\.btn-primary\s*\{\s*background-color:\s*#[0-9a-fA-F]+;\s*color:\s*#[0-9a-fA-F]+;', re.IGNORECASE), 
     r'.btn-primary {\n            background-color: #13110f;\n            color: #f9f5f0;'),
    (re.compile(r'\.btn-primary:hover\s*\{\s*background-color:\s*#[0-9a-fA-F]+;', re.IGNORECASE), 
     r'.btn-primary:hover {\n            background-color: #2a2520;'), # Lighter charcoal for hover
    (re.compile(r'background-color:\s*#00a544', re.IGNORECASE), r'background-color: #13110f'),
    (re.compile(r'color:\s*#00a544', re.IGNORECASE), r'color: #13110f'),
    (re.compile(r'background:\s*#00a544', re.IGNORECASE), r'background: #13110f'),
]

# Let's make the logo entirely Cream (#f9f5f0) in the navbar so it contrasts well against the Charcoal (#13110f)
html_replacements = [
    # Replace all SVG green fills with cream
    (re.compile(r'fill="#00c758"', re.IGNORECASE), r'fill="#f9f5f0"'),
    (re.compile(r'fill="#00a544"', re.IGNORECASE), r'fill="#f9f5f0"'),
    # Fix the scan profile button
    (re.compile(r'background-color:\s*#00a544', re.IGNORECASE), r'background-color: #13110f'),
]

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        if filepath.endswith('.css'):
            for pattern, replacement in css_replacements:
                new_content = pattern.sub(replacement, new_content)
        elif filepath.endswith('.html'):
            for pattern, replacement in html_replacements:
                new_content = pattern.sub(replacement, new_content)
            
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated buttons/logo in: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.html') or file.endswith('.css'):
            process_file(os.path.join(root, file))

print("Button and logo replacement complete.")
