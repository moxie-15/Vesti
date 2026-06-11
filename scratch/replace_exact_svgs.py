import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

svg_business = """<div class="icon-wrapper">
                        <svg class="service-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: filter 0.3s ease;">
  <circle cx="40" cy="20" r="12" fill="#060E42" />
  <path d="M20 60 C 20 40 28 36 40 36 C 52 36 60 40 60 60 V 64 H 20 V 60 Z" fill="#060E42" />
  <path d="M32 36 L 40 52 L 48 36 Z" fill="white" />
  <path d="M38 38 L 42 38 L 41 48 L 40 50 L 39 48 Z" fill="#060E42" />
</svg>
                    </div>"""

svg_work = """<div class="icon-wrapper">
                        <svg class="service-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: filter 0.3s ease;">
  <path d="M30 25 V 15 C 30 10 50 10 50 15 V 25" stroke="#060E42" stroke-width="6" stroke-linecap="round" />
  <rect x="10" y="25" width="60" height="40" rx="6" fill="#060E42" />
  <path d="M 10 35 L 40 50 L 70 35" stroke="white" stroke-width="4" stroke-linejoin="round" />
</svg>
                    </div>"""

svg_tourist = """<div class="icon-wrapper">
                        <svg class="service-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: filter 0.3s ease;">
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
</svg>
                    </div>"""

svg_student = """<div class="icon-wrapper">
                        <svg class="service-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: filter 0.3s ease;">
  <path d="M25 40 V 50 A 15 10 0 0 0 55 50 V 40" fill="#060E42" />
  <path d="M40 20 L 10 35 L 40 50 L 70 35 Z" fill="#060E42" />
  <path d="M40 35 Q 65 35 65 55" stroke="#060E42" stroke-width="4" fill="none" />
  <path d="M62 55 L 68 55 L 70 65 L 65 62 L 60 65 Z" fill="#060E42" />
  <circle cx="40" cy="35" r="4" fill="#FFFFFF" />
</svg>
                    </div>"""

for country in countries:
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if os.path.exists(html_path):
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # We will replace the previous SVGs using the same logic
        pattern1 = r'<div class="icon-wrapper">.*?</div>\s*<div class="service-content">\s*<h3>BUSINESS VISA</h3>'
        repl1 = svg_business + '\n                    <div class="service-content">\n                        <h3>BUSINESS VISA</h3>'
        content = re.sub(pattern1, repl1, content, flags=re.DOTALL)

        pattern2 = r'<div class="icon-wrapper">.*?</div>\s*<div class="service-content">\s*<h3>WORK VISA</h3>'
        repl2 = svg_work + '\n                    <div class="service-content">\n                        <h3>WORK VISA</h3>'
        content = re.sub(pattern2, repl2, content, flags=re.DOTALL)

        pattern3 = r'<div class="icon-wrapper">.*?</div>\s*<div class="service-content">\s*<h3>TOURIST VISA</h3>'
        repl3 = svg_tourist + '\n                    <div class="service-content">\n                        <h3>TOURIST VISA</h3>'
        content = re.sub(pattern3, repl3, content, flags=re.DOTALL)

        pattern4 = r'<div class="icon-wrapper">.*?</div>\s*<div class="service-content">\s*<h3>STUDENT VISA</h3>'
        repl4 = svg_student + '\n                    <div class="service-content">\n                        <h3>STUDENT VISA</h3>'
        content = re.sub(pattern4, repl4, content, flags=re.DOTALL)

        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Exact replica SVGs injected successfully!")
