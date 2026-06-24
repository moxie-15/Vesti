import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

def process_css(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # Hardcode replace for .btn-primary
        # We know it looks exactly like:
        # .btn-primary {
        #     background-color: #13110f;
        #     color: var(--text-white);
        #     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        # }
        
        # Or it might have var(--primary) if the script failed.
        # Let's replace the whole block
        new_content = re.sub(
            r'\.btn-primary\s*\{[^\}]*\}',
            '.btn-primary {\n    background-color: #f9f5f0;\n    color: #13110f;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n}',
            new_content, flags=re.IGNORECASE | re.DOTALL
        )

        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated btn-primary in: {filepath}")
    except Exception as e:
        pass

def process_html(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # Remove stray agent modal outside of the main modal overlay
        # The stray one is usually near the end of the file, outside of <div class="agent-modal-overlay">
        # Let's target the exact HTML that was pasted:
        stray_modal_regex = r'<div class="agent-modal-right">\s*<h2 class="agent-title">Need help with your Visa\? 👋</h2>\s*<p class="agent-desc">Hi! I\'m Bunmi from the Vesti support team\. I noticed you\'re looking at our global mobility pathways\. Let me know if you need an expert to guide you through the process!</p>\s*<a class="agent-action-btn" href="tel:\+1234567890">\s*<svg.*?</svg>\s*Talk to a Live Agent\s*</a>\s*</div>'
        
        new_content = re.sub(stray_modal_regex, '', new_content, flags=re.IGNORECASE | re.DOTALL)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Removed stray modal from: {filepath}")
    except Exception as e:
        print(f"Error HTML {filepath}: {e}")

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in dirs: dirs.remove('node_modules')
    if '.git' in dirs: dirs.remove('.git')
    if 'scratch' in dirs: dirs.remove('scratch')
    for file in files:
        if file.endswith('.css'):
            process_css(os.path.join(root, file))
        elif file.endswith('.html'):
            process_html(os.path.join(root, file))

print("Fixes applied.")
