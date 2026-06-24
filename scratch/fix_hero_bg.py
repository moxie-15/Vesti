import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

replacements = [
    (re.compile(r'linear-gradient\(to right, #F0Fdf4, #FFFFFF\)', re.IGNORECASE), r'#f9f5f0'),
    (re.compile(r'#F8FAF7', re.IGNORECASE), r'#f9f5f0'),
    (re.compile(r'#F8FAFC', re.IGNORECASE), r'#f9f5f0'),
    (re.compile(r'#F0FDF4', re.IGNORECASE), r'#f9f5f0'),
    (re.compile(r'#E2E8F0', re.IGNORECASE), r'#f9f5f0'),
    (re.compile(r'rgba\(240,\s*253,\s*244,\s*[0-9.]+\)', re.IGNORECASE), r'#f9f5f0'),
]

# For the logo, the user said "exact light colour and dark colour of the we vesti page". 
# The light color is cream (#f9f5f0), dark color is charcoal (#13110f). 
# Wait, if we replace the green logo with cream and charcoal:
# The svg had #00c758 (light green) and #00a544 (dark green).
# Let's replace #00c758 with #f9f5f0 and #00a544 with #13110f.
logo_replacements = [
    (re.compile(r'#00c758', re.IGNORECASE), r'#f9f5f0'),
    (re.compile(r'#00a544', re.IGNORECASE), r'#13110f'),
]

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        for pattern, replacement in replacements:
            new_content = pattern.sub(replacement, new_content)
            
        # Only replace logo colors in the svg itself? The logo colors were used elsewhere too (buttons).
        # Actually, the user said "the svg cuuent light green and dark green colour will be chaneg to the exact light colour and dark colour of the we vesti page"
        # So we should strictly target the SVG fill attributes.
        # `<path d="..." fill="#00c758"></path>`
        
        svg_pattern_1 = re.compile(r'fill="#00c758"', re.IGNORECASE)
        new_content = svg_pattern_1.sub('fill="#f9f5f0"', new_content)
        
        svg_pattern_2 = re.compile(r'fill="#00a544"', re.IGNORECASE)
        # ONLY if it's inside an svg or logo context, but let's just replace all fill="#00a544" 
        new_content = svg_pattern_2.sub('fill="#13110f"', new_content)

        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated backgrounds and logo in: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.html') or file.endswith('.css'):
            process_file(os.path.join(root, file))

print("Background and logo replacement complete.")
