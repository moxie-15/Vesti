import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # Replace the body background color and add margin:0 padding:0
        new_content = re.sub(
            r'<body\s+style="([^"]*)"',
            lambda m: '<body style="' + m.group(1).replace('background-color: #FFFFFF !important;', 'margin: 0; padding: 0; background-color: #f9f5f0 !important;') + '"',
            new_content
        )
        
        # If the body tag didn't have the exact style string, try a more general replacement
        if new_content == content:
             new_content = re.sub(
                 r'<body(.*?)background-color:\s*#FFFFFF\s*!important;(.*?)>',
                 r'<body\1margin: 0; padding: 0; background-color: #f9f5f0 !important;\2>',
                 new_content, flags=re.IGNORECASE
             )

        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed body in: {filepath}")
    except Exception as e:
        pass

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.html'):
            process_file(os.path.join(root, file))

print("Body background and margin fix complete.")
