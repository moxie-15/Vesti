import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

svg_business = """<svg class="service-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color: #62943B; transition: color 0.3s ease;">
  <path d="M12 56 V 32 A 6 6 0 0 1 24 32" />
  <path d="M52 56 V 32 A 6 6 0 0 0 40 32" />
  <path d="M24 56 V 20 A 8 8 0 0 1 40 20 V 56" />
  <path d="M28 56 V 44 A 4 4 0 0 1 36 44 V 56" />
  <line x1="8" y1="56" x2="56" y2="56" />
  <line x1="28" y1="32" x2="36" y2="32" />
  <line x1="28" y1="24" x2="36" y2="24" />
</svg>"""

svg_work = """<svg class="service-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color: #62943B; transition: color 0.3s ease;">
  <path d="M24 18 V 12 A 4 4 0 0 1 40 12 V 18" />
  <rect x="8" y="18" width="48" height="34" rx="4" />
  <line x1="20" y1="18" x2="20" y2="52" />
  <line x1="44" y1="18" x2="44" y2="52" />
</svg>"""

svg_tourist = """<svg class="service-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color: #62943B; transition: color 0.3s ease;">
  <rect x="8" y="24" width="48" height="32" rx="4" />
  <path d="M22 24 L 26 16 H 38 L 42 24" />
  <circle cx="32" cy="40" r="10" />
  <circle cx="44" cy="30" r="2" fill="currentColor" />
</svg>"""

svg_student = """<svg class="service-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color: #62943B; transition: color 0.3s ease;">
  <path d="M32 16 L 10 26 L 32 36 L 54 26 Z" />
  <path d="M20 31.5 V 42 A 12 8 0 0 0 44 42 V 31.5" />
  <path d="M54 26 V 44" />
  <circle cx="54" cy="46" r="2" />
</svg>"""

for country in countries:
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if os.path.exists(html_path):
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Replace Business Visa lucide icon
        content = re.sub(
            r'<i data-lucide="building-2"[^>]*></i>',
            svg_business,
            content
        )

        # Replace Work Visa lucide icon
        content = re.sub(
            r'<i data-lucide="briefcase"[^>]*></i>',
            svg_work,
            content
        )

        # Replace Tourist Visa lucide icon
        content = re.sub(
            r'<i data-lucide="camera"[^>]*></i>',
            svg_tourist,
            content
        )

        # Replace Student Visa lucide icon
        content = re.sub(
            r'<i data-lucide="graduation-cap"[^>]*></i>',
            svg_student,
            content
        )
        
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Custom SVGs created and injected into all files!")
