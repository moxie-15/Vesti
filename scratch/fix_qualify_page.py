import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'

france_html_path = os.path.join(workspace_dir, 'france', 'index.html')
with open(france_html_path, 'r', encoding='utf-8') as f:
    france_html = f.read()

header_match = re.search(r'(<!DOCTYPE html>.*?</nav>)', france_html, re.DOTALL)
header = header_match.group(1) if header_match else ''
header = header.replace('href="css/style.css"', 'href="france/css/style.css"')
header = header.replace('href="css/scrolling.css"', 'href="france/css/scrolling.css"')
header = header.replace('href="assets/favicon.svg"', 'href="france/assets/favicon.svg"')
header = header.replace('src="assets/logo.png"', 'src="france/assets/logo.png"')
header = header.replace('href="index.html"', 'href="france/index.html"')

footer_match = re.search(r'(<!-- Detailed Vesti Footer -->.*</html>)', france_html, re.DOTALL)
footer = footer_match.group(1) if footer_match else ''
footer = footer.replace('src="assets/logo.png"', 'src="france/assets/logo.png"')

old_france_path = os.path.join(workspace_dir, 'scratch', 'france_modal.html')
try:
    with open(old_france_path, 'r', encoding='utf-16') as f:
        old_html = f.read()
except UnicodeError:
    with open(old_france_path, 'r', encoding='utf-8') as f:
        old_html = f.read()

# Instead of regex, let's use string operations to find the modal
start_idx = old_html.find('<!-- Eligibility Modal Form -->')
end_idx = old_html.find('<!-- Payment Gateway Modal -->')

if start_idx != -1 and end_idx != -1:
    eligibility_content = old_html[start_idx:end_idx]
else:
    print("Could not find start or end tags for modal!")
    eligibility_content = ""

# Now find the script
script_start = old_html.find('<script>\n    // --- Modal Logic ---')
script_end = old_html.find('</script>', script_start) + len('</script>')
if script_start != -1 and script_end != -1:
    script_content = old_html[script_start:script_end]
else:
    script_content = ""

# Clean up modal
eligibility_content = re.sub(r'<div class="modal" id="eligibility-modal">', '<div class="qualify-page-container" style="padding: 120px 20px; background-color: #f8fafc; min-height: 100vh; display: flex; justify-content: center; align-items: center;">', eligibility_content)
eligibility_content = re.sub(r'<button class="modal-close[^>]+>.*?</button>', '', eligibility_content, flags=re.DOTALL)
eligibility_content = re.sub(r'class="modal-content', 'class="qualify-content', eligibility_content)
eligibility_content = eligibility_content.replace('for a France Pathway', 'for Vesti Pathways')
eligibility_content = eligibility_content.replace('the France Pathway', 'our pathways')

qualify_html = f"""{header}

<style>
.qualify-content {{
    background: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
}}
.form-grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }}
.form-group {{ display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }}
.form-input {{ padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit'; font-size: 1rem; }}
.btn-primary {{ background: var(--primary, #060E42); color: white; border: none; padding: 14px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%; margin-top: 20px; }}
.elig-progress-bar {{ display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 20px; }}
.elig-progress-step {{ width: 12px; height: 12px; border-radius: 50%; background: #e2e8f0; }}
.elig-progress-step.active {{ background: var(--primary, #060E42); }}
.elig-progress-line {{ height: 2px; flex: 1; background: #e2e8f0; }}
.elig-title {{ font-size: 2rem; color: #060E42; margin-bottom: 10px; text-align: center; }}
.elig-subtitle {{ text-align: center; color: #64748b; margin-bottom: 30px; }}
.radio-group {{ display: flex; flex-direction: column; gap: 10px; }}
.radio-option {{ display: flex; align-items: center; gap: 10px; }}
.qualify-page-container {{
    padding: 120px 20px;
    background-color: #f8fafc;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}}
</style>

{eligibility_content}

{script_content}
<script src="https://unpkg.com/lucide@latest"></script>
<script>
  lucide.createIcons();
  
  // Custom qualify logic, remove modal toggles
  function nextStep1() {{
      document.getElementById('elig-step-1').style.display = 'none';
      document.getElementById('elig-step-2').style.display = 'block';
      document.getElementById('elig-step-text').innerText = 'Step 2 of 3';
      document.getElementById('elig-dot-2').classList.add('active');
      document.getElementById('elig-line-1').classList.add('active');
  }}
  
  function nextStep2() {{
      document.getElementById('elig-step-2').style.display = 'none';
      document.getElementById('elig-step-3').style.display = 'block';
      document.getElementById('elig-step-text').innerText = 'Step 3 of 3';
      document.getElementById('elig-dot-3').classList.add('active');
      document.getElementById('elig-line-2').classList.add('active');
  }}

  function submitEligibilityForm(e) {{
      e.preventDefault();
      alert('Thank you for submitting! A Vesti expert will contact you shortly to confirm your eligibility.');
  }}
</script>

{footer}
"""

qualify_path = os.path.join(workspace_dir, 'qualify.html')
with open(qualify_path, 'w', encoding='utf-8') as f:
    f.write(qualify_html)

print("qualify.html fully rebuilt!")
