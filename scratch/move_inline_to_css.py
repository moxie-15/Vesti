import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

for country in countries:
    css_path = os.path.join(workspace_dir, country, 'css', 'style.css')
    html_path = os.path.join(workspace_dir, country, 'index.html')
    
    if not os.path.exists(css_path) or not os.path.exists(html_path):
        continue
        
    with open(css_path, 'r', encoding='utf-8') as f:
        css_content = f.read()

    # Add Desktop CSS for the elements that were relying on inline styles
    desktop_css = """

/* --- MOVED FROM INLINE STYLES --- */
.hero-visual {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 480px;
    height: 480px;
    margin-left: auto;
}

.hero-visual-frame {
    box-shadow: 0 20px 45px rgba(0,0,0,0.35);
    border: 1.5px solid rgba(255,255,255,0.15);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
}

.hero-flag-box {
    position: absolute;
    bottom: 40px;
    right: 20px;
    width: 140px;
    height: 90px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    border-radius: 8px;
    overflow: hidden;
    border: 3px solid white;
    z-index: 5;
}
"""
    css_content = re.sub(r'/\* --- MOVED FROM INLINE STYLES --- \*/.*?(?=\Z|\n\s*\n\s*/\*|\n@media)', '', css_content, flags=re.DOTALL)
    # Put it right before the first media query
    css_content = css_content.replace('/* "?"? Tablet (%992px) "?"? */', desktop_css + '\n/* "?"? Tablet (%992px) "?"? */')

    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css_content)

    # Now STRIP the inline styles from HTML
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    html_content = re.sub(
        r'<div class="hero-visual"\s+style="[^"]*">',
        r'<div class="hero-visual">',
        html_content
    )
    html_content = re.sub(
        r'<div class="hero-visual-frame"\s+style="[^"]*">',
        r'<div class="hero-visual-frame">',
        html_content
    )
    html_content = re.sub(
        r'<div class="hero-flag-box"\s+style="[^"]*">',
        r'<div class="hero-flag-box">',
        html_content
    )

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html_content)

print("Inline styles moved to CSS properly for all countries.")
