import os

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

old_svg_business = """<svg class="service-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color: #62943B; transition: color 0.3s ease;">
  <path d="M12 56 V 32 A 6 6 0 0 1 24 32" />
  <path d="M52 56 V 32 A 6 6 0 0 0 40 32" />
  <path d="M24 56 V 20 A 8 8 0 0 1 40 20 V 56" />
  <path d="M28 56 V 44 A 4 4 0 0 1 36 44 V 56" />
  <line x1="8" y1="56" x2="56" y2="56" />
  <line x1="28" y1="32" x2="36" y2="32" />
  <line x1="28" y1="24" x2="36" y2="24" />
</svg>"""

old_svg_work = """<svg class="service-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color: #62943B; transition: color 0.3s ease;">
  <path d="M24 18 V 12 A 4 4 0 0 1 40 12 V 18" />
  <rect x="8" y="18" width="48" height="34" rx="4" />
  <line x1="20" y1="18" x2="20" y2="52" />
  <line x1="44" y1="18" x2="44" y2="52" />
</svg>"""

old_svg_tourist = """<svg class="service-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color: #62943B; transition: color 0.3s ease;">
  <rect x="8" y="24" width="48" height="32" rx="4" />
  <path d="M22 24 L 26 16 H 38 L 42 24" />
  <circle cx="32" cy="40" r="10" />
  <circle cx="44" cy="30" r="2" fill="currentColor" />
</svg>"""

old_svg_student = """<svg class="service-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color: #62943B; transition: color 0.3s ease;">
  <path d="M32 16 L 10 26 L 32 36 L 54 26 Z" />
  <path d="M20 31.5 V 42 A 12 8 0 0 0 44 42 V 31.5" />
  <path d="M54 26 V 44" />
  <circle cx="54" cy="46" r="2" />
</svg>"""

new_svg_business = """<svg class="service-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: filter 0.3s ease;">
  <circle cx="40" cy="20" r="12" fill="#060E42" />
  <path d="M20 60 C 20 40 28 36 40 36 C 52 36 60 40 60 60 V 64 H 20 V 60 Z" fill="#060E42" />
  <path d="M32 36 L 40 52 L 48 36 Z" fill="white" />
  <path d="M38 38 L 42 38 L 41 48 L 40 50 L 39 48 Z" fill="#060E42" />
</svg>"""

new_svg_work = """<svg class="service-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: filter 0.3s ease;">
  <path d="M30 25 V 15 C 30 10 50 10 50 15 V 25" stroke="#060E42" stroke-width="6" stroke-linecap="round" />
  <rect x="10" y="25" width="60" height="40" rx="6" fill="#060E42" />
  <path d="M 10 35 L 40 50 L 70 35" stroke="white" stroke-width="4" stroke-linejoin="round" />
</svg>"""

new_svg_tourist = """<svg class="service-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: filter 0.3s ease;">
  <!-- Person Head -->
  <circle cx="25" cy="15" r="5" fill="#060E42" />
  <!-- Person Body & Legs -->
  <rect x="20" y="22" width="10" height="25" rx="3" fill="#060E42" />
  <rect x="21" y="45" width="3" height="20" rx="1.5" fill="#060E42" />
  <rect x="26" y="45" width="3" height="20" rx="1.5" fill="#060E42" />
  <!-- Person Arms -->
  <rect x="15" y="24" width="3" height="18" rx="1.5" fill="#060E42" />
  <rect x="32" y="24" width="3" height="18" rx="1.5" fill="#060E42" />
  
  <!-- Large Suitcase -->
  <rect x="42" y="40" width="16" height="25" rx="3" fill="#060E42" />
  <path d="M46 40 V 35 C 46 33 54 33 54 35 V 40" stroke="#060E42" stroke-width="3" fill="none" />
  <circle cx="45" cy="65" r="2" fill="#060E42" />
  <circle cx="55" cy="65" r="2" fill="#060E42" />
  <line x1="42" y1="48" x2="58" y2="48" stroke="white" stroke-width="2" />
  <line x1="42" y1="55" x2="58" y2="55" stroke="white" stroke-width="2" />
  
  <!-- Small Suitcase -->
  <rect x="55" y="50" width="12" height="15" rx="2" fill="#060E42" />
  <path d="M58 50 V 46 C 58 45 64 45 64 46 V 50" stroke="#060E42" stroke-width="2" fill="none" />
  <circle cx="57" cy="65" r="1.5" fill="#060E42" />
  <circle cx="65" cy="65" r="1.5" fill="#060E42" />
  <circle cx="61" cy="57" r="2" fill="white" />
</svg>"""

new_svg_student = """<svg class="service-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: filter 0.3s ease;">
  <path d="M25 40 V 50 A 15 10 0 0 0 55 50 V 40" fill="#060E42" />
  <path d="M40 20 L 10 35 L 40 50 L 70 35 Z" fill="#060E42" />
  <path d="M40 35 Q 65 35 65 55" stroke="#060E42" stroke-width="4" fill="none" />
  <path d="M62 55 L 68 55 L 70 65 L 65 62 L 60 65 Z" fill="#060E42" />
  <circle cx="40" cy="35" r="4" fill="#FFFFFF" />
</svg>"""

for country in countries:
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if os.path.exists(html_path):
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()

        content = content.replace(old_svg_business, new_svg_business)
        content = content.replace(old_svg_work, new_svg_work)
        content = content.replace(old_svg_tourist, new_svg_tourist)
        content = content.replace(old_svg_student, new_svg_student)

        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
    # Also update CSS
    css_path = os.path.join(workspace_dir, country, 'css', 'style.css')
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            css_content = f.read()
            
        css_content = css_content.replace('color: var(--text-white) !important;', 'filter: brightness(0) invert(1) !important;')
        
        with open(css_path, 'w', encoding='utf-8') as f:
            f.write(css_content)

print("Exact replica SVGs injected safely!")
