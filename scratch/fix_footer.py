import os
import subprocess
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

for country in countries:
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if not os.path.exists(html_path):
        continue

    # Get the original file content from before I broke the footer
    result = subprocess.run(['git', 'show', f'ef36f69:{country}/index.html'], capture_output=True, text=True, encoding='utf-8')
    if result.returncode != 0:
        continue
    
    old_content = result.stdout
    
    # Extract the footer and everything after it from the old content
    footer_start = old_content.find('<!-- Detailed Vesti Footer -->')
    if footer_start == -1:
        continue
    
    footer_and_scripts = old_content[footer_start:]
    
    # Read the current broken content
    with open(html_path, 'r', encoding='utf-8') as f:
        current_content = f.read()
    
    # Find where the modal currently is
    modal_start = current_content.find('<!-- Eligibility Modal Form -->')
    if modal_start != -1:
        # Get everything BEFORE the modal
        top_content = current_content[:modal_start]
        
        # Get the modal itself (up to </script>)
        modal_match = re.search(r'(<!-- Eligibility Modal Form -->.*?</script>)', current_content, re.DOTALL)
        modal_content = modal_match.group(1) if modal_match else ''
        
        # Reconstruct the file: Top -> Modal -> Footer & Scripts
        # Wait, the footer usually goes BEFORE the modal, or the modal goes right before </body>!
        # Let's put the footer back, then put the modal right before <!-- Core App logic -->
        
        # In old_content, the footer_and_scripts contains <!-- Detailed Vesti Footer --> ... </footer> ... <!-- Country Data --> <script src="js/countries.js"></script> ... <!-- Core App logic -->
        
        # Let's inject the modal right before <!-- Country Data --> in the footer_and_scripts
        inject_pos = footer_and_scripts.find('<!-- Country Data -->')
        if inject_pos == -1:
            inject_pos = footer_and_scripts.find('<!-- Core App logic -->')
            
        if inject_pos != -1:
            fixed_footer = footer_and_scripts[:inject_pos] + '\n' + modal_content + '\n\n    ' + footer_and_scripts[inject_pos:]
            new_content = top_content + fixed_footer
            
            with open(html_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
                print(f"Fixed footer for {country}")
