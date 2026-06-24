import os
import re

# Update image paths in hero sections
countries_to_update_images = ['canada', 'france', 'usa', 'spain']
for code in countries_to_update_images:
    path = f"{code}/index.html"
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        content = content.replace('assets/au-landscape-1.png', 'assets/hero-landscape.png')
        content = content.replace('assets/au-landscape-2.png', 'assets/hero-landscape.png')
        content = content.replace('assets/au-landscape-3.png', 'assets/hero-landscape.png')
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

# Update New Zealand Pathways
nz_path = 'New_zealand/index.html'
if os.path.exists(nz_path):
    with open(nz_path, 'r', encoding='utf-8') as f:
        nz_content = f.read()
        
    new_grid = '''<div class="pathways-grid">
            <div class="pathway-card" onclick="openPathwayModal('visitor')">
                <div class="pathway-icon-container highlight-green">
                    <i data-lucide="plane"></i>
                </div>
                <h3>Visitor Visa</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price:  NZD</div>
                <p class="pathway-short">Explore the stunning landscapes of New Zealand for up to 9 months.</p>
                <div class="pathway-video-promo">
                    <div class="video-promo-icon"><i data-lucide="play-circle"></i></div>
                    <div class="video-promo-info">
                        <span class="video-promo-title">Watch Success Story</span>
                        <span class="video-promo-meta">2 mins • <span class="text-success">98% Success</span></span>
                    </div>
                </div>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
        </div>'''
        
    nz_content = re.sub(r'<div class="pathways-grid">.*?</div>\s*</section>', new_grid + '\n    </section>', nz_content, flags=re.DOTALL)
    
    with open(nz_path, 'w', encoding='utf-8') as f:
        f.write(nz_content)

print("Updates applied")
