import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

# 1. Create qualify.html by taking the shell of france/index.html but replacing the body with the eligibility form.
france_html_path = os.path.join(workspace_dir, 'france', 'index.html')
with open(france_html_path, 'r', encoding='utf-8') as f:
    france_html = f.read()

# Extract header
header_match = re.search(r'(<!DOCTYPE html>.*?</nav>\s*</header>)', france_html, re.DOTALL)
header = header_match.group(1) if header_match else ''

# Extract footer
footer_match = re.search(r'(<!-- Modern Footer -->.*</html>)', france_html, re.DOTALL)
footer = footer_match.group(1) if footer_match else ''

# Extract Eligibility Modal Form (we will make it not a modal)
modal_match = re.search(r'(<!-- Eligibility Modal Form -->.*?)(?=<!-- Scripts -->|<script src="https://unpkg.com/lucide@latest">)', france_html, re.DOTALL)
eligibility_content = modal_match.group(1) if modal_match else ''

# Clean up eligibility_content to make it a standalone page section instead of a modal
# Remove modal background and close button
eligibility_content = re.sub(r'<div class="modal" id="eligibility-modal">', '<div class="qualify-page-container" style="padding: 120px 20px; background-color: #f8fafc; min-height: 100vh; display: flex; justify-content: center; align-items: center;">', eligibility_content)
eligibility_content = re.sub(r'<button class="modal-close[^>]+>.*?</button>', '', eligibility_content, flags=re.DOTALL)
eligibility_content = re.sub(r'class="modal-content', 'class="qualify-content', eligibility_content)

# Remove "for a France Pathway" and "the France Pathway" to make it generic
eligibility_content = eligibility_content.replace('for a France Pathway', 'for Vesti Pathways')
eligibility_content = eligibility_content.replace('the France Pathway', 'our pathways')

# Extract the script that handles the modal logic (step 1 to 2 to 3)
script_match = re.search(r'(<script>\s*// --- Modal Logic ---.*?</script>)', france_html, re.DOTALL)
if not script_match:
    # If not found, look for general script block
    script_match = re.search(r'(<script>.*?document\.getElementById\("elig-step-2"\).*?</script>)', france_html, re.DOTALL)
script_content = script_match.group(1) if script_match else ''

# Adjust the script to not hide/show the modal, just handle the steps
script_content = re.sub(r'function openEligibilityModal\(\) \{.*?(?=function closeEligibilityModal)', '', script_content, flags=re.DOTALL)
script_content = re.sub(r'function closeEligibilityModal\(\) \{.*?(?=function goEligStep2)', '', script_content, flags=re.DOTALL)

# Let's write qualify.html
qualify_html = f"""{header}

<style>
.qualify-content {{
    background: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
    max-width: 600px;
    width: 100%;
}}
.form-grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }}
.form-group {{ display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }}
.form-input {{ padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit'; font-size: 1rem; }}
.btn-primary {{ background: var(--primary, #060E42); color: white; border: none; padding: 14px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }}
.elig-progress-bar {{ display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 20px; }}
.elig-progress-step {{ width: 12px; height: 12px; border-radius: 50%; background: #e2e8f0; }}
.elig-progress-step.active {{ background: var(--primary, #060E42); }}
.elig-progress-line {{ height: 2px; flex: 1; background: #e2e8f0; }}
.elig-title {{ font-size: 2rem; color: #060E42; margin-bottom: 10px; text-align: center; }}
.elig-subtitle {{ text-align: center; color: #64748b; margin-bottom: 30px; }}
.radio-group {{ display: flex; flex-direction: column; gap: 10px; }}
.radio-option {{ display: flex; align-items: center; gap: 10px; }}
</style>

{eligibility_content}

<!-- Scripts -->
<script src="https://unpkg.com/lucide@latest"></script>
<script>
  lucide.createIcons();
</script>
{script_content}

{footer}
"""

qualify_path = os.path.join(workspace_dir, 'qualify.html')
with open(qualify_path, 'w', encoding='utf-8') as f:
    f.write(qualify_html)


# 2. Now loop through all index.html files and remove the modal, and change the button to a link.
for country in countries:
    idx_path = os.path.join(workspace_dir, country, 'index.html')
    if not os.path.exists(idx_path):
        continue
    
    with open(idx_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Change button to link
    # From: <button id="hero-btn-qualify" class="btn btn-outline btn-lg" onclick="window.openEligibilityModal()"...>See If You Qualify</button>
    # To: <a href="../qualify.html" id="hero-btn-qualify" class="btn btn-outline btn-lg"...>See If You Qualify</a>
    content = re.sub(r'<button\s+id="hero-btn-qualify"\s+class="btn\s+btn-outline\s+btn-lg"\s+onclick="window\.openEligibilityModal\(\)"([^>]*)>\s*See If You Qualify\s*</button>', 
                     r'<a href="../qualify.html" id="hero-btn-qualify" class="btn btn-outline btn-lg" style="background: transparent; color: white; border: 2px solid rgba(255,255,255,0.3); border-radius: 6px; padding: 12px 30px; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; height: 48px;">See If You Qualify</a>', content)

    # Remove the modal block
    content = re.sub(r'<!-- Eligibility Modal Form -->.*?<!-- Scripts -->', '<!-- Scripts -->', content, flags=re.DOTALL)
    
    # Remove the script block handling the modal logic
    # We will just look for the openEligibilityModal function block, but since the whole modal logic was specific to the modal,
    # and we moved it to qualify.html, we can just remove the whole "Modal Logic" section.
    content = re.sub(r'// --- Modal Logic ---.*?// --- Navigation ---', '// --- Navigation ---', content, flags=re.DOTALL)

    with open(idx_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Created qualify.html and updated all country pages.")
