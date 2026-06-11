import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
qualify_path = os.path.join(workspace_dir, 'qualify.html')

with open(qualify_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to remove the top announcement bar, nav, and footer.
# But keep the <head> tags for CSS.
head_match = re.search(r'(<!DOCTYPE html>.*?</head>)', content, re.DOTALL)
head = head_match.group(1) if head_match else ''

# Get the modal content (everything inside <div class="qualify-page-container"...> up to the scripts)
modal_match = re.search(r'(<div class="qualify-page-container".*?<script src="https://unpkg.com/lucide@latest">)', content, re.DOTALL)
modal_content = modal_match.group(1) if modal_match else ''

# Get the scripts
scripts_match = re.search(r'(<script>\s*lucide.createIcons\(\);.*?</script>)', content, re.DOTALL)
scripts = scripts_match.group(1) if scripts_match else ''

# Modify the container style to match the dark overlay
modal_content = re.sub(
    r'<div class="qualify-page-container"[^>]*>', 
    '<div class="qualify-page-container" style="padding: 60px 20px; background: rgba(6, 14, 66, 0.95); min-height: 100vh; display: flex; justify-content: center; align-items: center;">',
    modal_content
)

# Re-add the close button if it was removed
if 'lucide="x"' not in modal_content:
    modal_content = modal_content.replace(
        '<div class="qualify-content">',
        '<div class="qualify-content" style="position: relative;">\n    <button onclick="history.back()" style="position: absolute; top: 20px; right: 20px; background: transparent; border: none; cursor: pointer; color: #64748b;"><i data-lucide="x"></i></button>'
    )

new_html = f"""{head}
<body style="margin: 0; background-color: #060E42;">

<style>
.qualify-content {{
    background: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
}}
.form-grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }}
.form-group {{ display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }}
.form-input {{ padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit'; font-size: 1rem; }}
.btn-primary {{ background: #5a9e3a; color: white; border: none; padding: 14px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%; margin-top: 20px; font-size: 1.1rem; }}
.elig-progress-bar {{ display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 20px; }}
.elig-progress-step {{ width: 12px; height: 12px; border-radius: 50%; background: #e2e8f0; }}
.elig-progress-step.active {{ background: #5a9e3a; }}
.elig-progress-line {{ height: 2px; flex: 1; background: #e2e8f0; }}
.elig-title {{ font-size: 1.8rem; color: #060E42; margin-bottom: 10px; font-weight: 800; }}
.elig-subtitle {{ color: #64748b; margin-bottom: 30px; font-size: 1rem; }}
.radio-group {{ display: flex; flex-direction: column; gap: 10px; }}
.radio-option {{ display: flex; align-items: center; gap: 10px; }}
.elig-input-label {{ font-size: 0.85rem; font-weight: 700; color: #334155; text-transform: uppercase; letter-spacing: 0.5px; }}
</style>

{modal_content}

{scripts}

</body>
</html>
"""

with open(qualify_path, 'w', encoding='utf-8') as f:
    f.write(new_html)

print("qualify.html updated to match the exact picture without header/footer.")
