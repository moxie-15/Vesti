import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

for country in countries:
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if not os.path.exists(html_path):
        continue
        
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Clean up <div class="hero-visual" style="...">
    content = re.sub(
        r'<div class="hero-visual"\s+style="[^"]*">',
        r'<div class="hero-visual">',
        content
    )

    # 2. Clean up <div class="hero-visual-frame" style="...">
    content = re.sub(
        r'<div class="hero-visual-frame"\s+style="[^"]*">',
        r'<div class="hero-visual-frame">',
        content
    )

    # 3. Clean up the hero-flag-box
    content = re.sub(
        r'<div class="hero-flag-box"\s+style="[^"]*">',
        r'<div class="hero-flag-box">',
        content
    )
    
    # 4. Clean up the slide captions padding which had insane padding
    content = re.sub(
        r'(<div class="slide-caption"\s+style="[^"]*padding:\s*)40px 160px 48px 60px([^"]*">)',
        r'\1 40px 20px 20px 20px\2',
        content
    )
    
    # 5. Clean up any inline opacity or max-height that might interfere
    # Wait, the slideshow script uses inline opacity! So we can't strip inline styles from `.hero-slide` entirely, but we can clean it up.
    # The slides have: `style="position: absolute; top:0; left:0; width:100%; height:100%; opacity:...; ..."`
    # Which is fine.

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("HTML inline styles cleaned up for all countries.")
