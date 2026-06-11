import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

for country in countries:
    css_path = os.path.join(workspace_dir, country, 'css', 'style.css')
    if not os.path.exists(css_path):
        continue
        
    with open(css_path, 'r', encoding='utf-8') as f:
        content = f.read()

    mobile_css = """

/* --- MOBILE HERO LAYOUT FIXES --- */
@media (max-width: 768px) {
    .hero-container {
        display: flex !important;
        flex-direction: column !important;
        gap: 25px !important;
        padding: 10px 20px 40px 20px !important;
    }
    .hero-content {
        order: 2 !important; /* Text below image */
        text-align: center !important;
    }
    .hero-title {
        font-size: 2rem !important;
        line-height: 1.25 !important;
        margin-bottom: 12px !important;
    }
    .hero-description {
        font-size: 1rem !important;
        margin-bottom: 24px !important;
        padding: 0 10px !important;
    }
    .hero-visual {
        order: 1 !important; /* Image above text */
        width: 100% !important;
        height: auto !important;
        max-width: 100% !important;
        margin: 0 !important;
        aspect-ratio: 4/3 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
    .hero-visual-frame {
        width: 100% !important;
        height: 100% !important;
        max-width: 100% !important;
        border-radius: 24px !important; /* Standard rounded rectangle instead of squashed eye */
        box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
    }
    /* Fix the flag to be nicely proportioned in the corner */
    .hero-flag-box {
        width: 80px !important;
        height: 54px !important;
        bottom: -15px !important;
        right: 15px !important;
        transform: none !important;
        border: 4px solid var(--bg-main, #060E42) !important;
        border-radius: 6px !important;
        z-index: 20 !important;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2) !important;
    }
    .slideshow-dots {
        bottom: 15px !important;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 1.75rem !important;
    }
    .hero-visual {
        aspect-ratio: 1.1 !important; /* Slightly more square on very small phones */
    }
    .hero-flag-box {
        width: 70px !important;
        height: 48px !important;
        bottom: -12px !important;
        right: 12px !important;
        border-width: 3px !important;
    }
}
"""
    content = re.sub(r'/\* --- MOBILE HERO LAYOUT FIXES --- \*/.*', '', content, flags=re.DOTALL)
    content += mobile_css

    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Mobile hero layout fixes applied to all countries.")
