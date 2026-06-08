import os
import re

themes = {
    'canada': {'primary': '#E31837', 'hover': '#B2132A', 'glow': 'rgba(227, 24, 55, 0.25)'},
    'australia': {'primary': '#FFCD00', 'hover': '#E5B800', 'glow': 'rgba(255, 205, 0, 0.25)'},
    'usa': {'primary': '#3C3B6E', 'hover': '#2B2A50', 'glow': 'rgba(60, 59, 110, 0.25)'},
    'france': {'primary': '#0055A4', 'hover': '#003E7A', 'glow': 'rgba(0, 85, 164, 0.25)'},
    'spain': {'primary': '#F1BF00', 'hover': '#CFA400', 'glow': 'rgba(241, 191, 0, 0.25)'}
}

for code, colors in themes.items():
    css_path = f"{code}/css/style.css"
    if not os.path.exists(css_path): continue
    
    with open(css_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace Vesti default CSS vars
    content = re.sub(r'--primary:\s*#[a-zA-Z0-9]+;', f"--primary: {colors['primary']};", content)
    content = re.sub(r'--primary-hover:\s*#[a-zA-Z0-9]+;', f"--primary-hover: {colors['hover']};", content)
    content = re.sub(r'--border-glow:\s*rgba\([^)]+\);', f"--border-glow: {colors['glow']};", content)
    
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Color themes applied!")
