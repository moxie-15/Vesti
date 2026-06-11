import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

for country in countries:
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if os.path.exists(html_path):
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Replace Business Visa image
        content = re.sub(
            r'<img[^>]*src="[^"]*s1\.png"[^>]*>',
            r'<i data-lucide="building-2" style="width: 64px; height: 64px; color: #62943B; stroke-width: 1.5; transition: color 0.3s ease;" class="service-icon"></i>',
            content
        )

        # Replace Work Visa image
        content = re.sub(
            r'<img[^>]*src="[^"]*s2\.png"[^>]*>',
            r'<i data-lucide="briefcase" style="width: 64px; height: 64px; color: #62943B; stroke-width: 1.5; transition: color 0.3s ease;" class="service-icon"></i>',
            content
        )

        # Replace Tourist Visa image
        content = re.sub(
            r'<img[^>]*src="[^"]*s4\.png"[^>]*>',
            r'<i data-lucide="camera" style="width: 64px; height: 64px; color: #62943B; stroke-width: 1.5; transition: color 0.3s ease;" class="service-icon"></i>',
            content
        )

        # Replace Student Visa image
        content = re.sub(
            r'<img[^>]*src="[^"]*s3\.png"[^>]*>',
            r'<i data-lucide="graduation-cap" style="width: 64px; height: 64px; color: #62943B; stroke-width: 1.5; transition: color 0.3s ease;" class="service-icon"></i>',
            content
        )
        
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
    # Also update CSS so it turns white on hover!
    css_path = os.path.join(workspace_dir, country, 'css', 'style.css')
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            css_content = f.read()
            
        if '.service-icon' not in css_content:
            hover_css = """
.service-card:hover .service-icon {
    color: var(--text-white) !important;
}
"""
            css_content += hover_css
            with open(css_path, 'w', encoding='utf-8') as f:
                f.write(css_content)

print("Icons replaced with crisp vector SVGs successfully!")
