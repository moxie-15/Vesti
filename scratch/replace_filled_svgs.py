import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

svg_business = """<div class="icon-wrapper">
                        <svg class="service-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: filter 0.3s ease;">
  <defs>
    <linearGradient id="bldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#060E42" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </linearGradient>
    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#62943B" />
      <stop offset="100%" stop-color="#C0C71E" />
    </linearGradient>
  </defs>
  <rect x="20" y="15" width="40" height="55" rx="4" fill="url(#bldGrad)" />
  <rect x="10" y="35" width="15" height="35" rx="3" fill="url(#glassGrad)" />
  <rect x="55" y="35" width="15" height="35" rx="3" fill="url(#glassGrad)" />
  <rect x="30" y="25" width="20" height="15" rx="2" fill="url(#glassGrad)" />
  <path d="M35 70 V 55 A 5 5 0 0 1 45 55 V 70" fill="#FFFFFF" opacity="0.9" />
</svg>
                    </div>"""

svg_work = """<div class="icon-wrapper">
                        <svg class="service-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: filter 0.3s ease;">
  <defs>
    <linearGradient id="briefcaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#060E42" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </linearGradient>
    <linearGradient id="flapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#62943B" />
      <stop offset="100%" stop-color="#4A752C" />
    </linearGradient>
  </defs>
  <path d="M30 25 V 15 C 30 10 50 10 50 15 V 25" stroke="#C0C71E" stroke-width="6" stroke-linecap="round" />
  <rect x="10" y="25" width="60" height="45" rx="6" fill="url(#briefcaseGrad)" />
  <path d="M 10 25 L 40 45 L 70 25 Z" fill="url(#flapGrad)" />
  <path d="M 10 25 L 40 45 L 70 25" stroke="#FFFFFF" stroke-width="3" stroke-linejoin="round" opacity="0.8" />
  <circle cx="40" cy="45" r="5" fill="#FFD700" />
</svg>
                    </div>"""

svg_tourist = """<div class="icon-wrapper">
                        <svg class="service-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: filter 0.3s ease;">
  <defs>
    <linearGradient id="camGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#060E42" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </linearGradient>
    <linearGradient id="lensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C0C71E" />
      <stop offset="100%" stop-color="#62943B" />
    </linearGradient>
  </defs>
  <rect x="10" y="30" width="60" height="40" rx="6" fill="url(#camGrad)" />
  <path d="M25 30 L 30 20 H 50 L 55 30 Z" fill="url(#camGrad)" />
  <circle cx="40" cy="50" r="16" fill="#FFFFFF" />
  <circle cx="40" cy="50" r="10" fill="url(#lensGrad)" />
  <circle cx="60" cy="40" r="4" fill="#FFD700" />
  <rect x="15" y="26" width="8" height="4" rx="2" fill="#C0C71E" />
</svg>
                    </div>"""

svg_student = """<div class="icon-wrapper">
                        <svg class="service-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: filter 0.3s ease;">
  <defs>
    <linearGradient id="capGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#060E42" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </linearGradient>
    <linearGradient id="tasselGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#C0C71E" />
      <stop offset="100%" stop-color="#FFD700" />
    </linearGradient>
  </defs>
  <path d="M25 40 V 55 A 15 10 0 0 0 55 55 V 40" fill="#62943B" />
  <path d="M40 20 L 10 35 L 40 50 L 70 35 Z" fill="url(#capGrad)" />
  <path d="M40 35 Q 65 35 65 55" stroke="url(#tasselGrad)" stroke-width="3" fill="none" />
  <path d="M62 55 H 68 L 70 65 H 60 Z" fill="url(#tasselGrad)" />
  <circle cx="40" cy="35" r="4" fill="#FFD700" />
</svg>
                    </div>"""

for country in countries:
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if os.path.exists(html_path):
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 1. Business Visa
        pattern1 = r'<div class="icon-wrapper">.*?</div>\s*<div class="service-content">\s*<h3>BUSINESS VISA</h3>'
        repl1 = svg_business + '\n                    <div class="service-content">\n                        <h3>BUSINESS VISA</h3>'
        content = re.sub(pattern1, repl1, content, flags=re.DOTALL)

        # 2. Work Visa
        pattern2 = r'<div class="icon-wrapper">.*?</div>\s*<div class="service-content">\s*<h3>WORK VISA</h3>'
        repl2 = svg_work + '\n                    <div class="service-content">\n                        <h3>WORK VISA</h3>'
        content = re.sub(pattern2, repl2, content, flags=re.DOTALL)

        # 3. Tourist Visa
        pattern3 = r'<div class="icon-wrapper">.*?</div>\s*<div class="service-content">\s*<h3>TOURIST VISA</h3>'
        repl3 = svg_tourist + '\n                    <div class="service-content">\n                        <h3>TOURIST VISA</h3>'
        content = re.sub(pattern3, repl3, content, flags=re.DOTALL)

        # 4. Student Visa
        pattern4 = r'<div class="icon-wrapper">.*?</div>\s*<div class="service-content">\s*<h3>STUDENT VISA</h3>'
        repl4 = svg_student + '\n                    <div class="service-content">\n                        <h3>STUDENT VISA</h3>'
        content = re.sub(pattern4, repl4, content, flags=re.DOTALL)

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

print("Premium filled SVGs injected and CSS updated!")
