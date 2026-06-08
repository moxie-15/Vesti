import os
import re

grids = {
    'canada': '''<div class="pathways-grid">
            <div class="pathway-card" onclick="openPathwayModal('visitor')">
                <div class="pathway-icon-container highlight-green"><i data-lucide="plane"></i></div>
                <h3>Visitor Visa (TRV)</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price:  CAD</div>
                <p class="pathway-short">Visit family, friends, or explore Canada's breathtaking beauty.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
            <div class="pathway-card" onclick="openPathwayModal('student')">
                <div class="pathway-icon-container highlight-gold"><i data-lucide="graduation-cap"></i></div>
                <h3>Study Permit</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price:  CAD</div>
                <p class="pathway-short">Study at world-class Canadian universities and colleges.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
            <div class="pathway-card" onclick="openPathwayModal('work')">
                <div class="pathway-icon-container highlight-purple"><i data-lucide="briefcase"></i></div>
                <h3>Express Entry (PR)</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price:  CAD</div>
                <p class="pathway-short">Immigrate to Canada as a skilled worker permanently.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
        </div>''',
        
    'usa': '''<div class="pathways-grid">
            <div class="pathway-card" onclick="openPathwayModal('visitor')">
                <div class="pathway-icon-container highlight-green"><i data-lucide="plane"></i></div>
                <h3>B1/B2 Visitor Visa</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price:  USD</div>
                <p class="pathway-short">Travel to the US for tourism, business, or medical treatment.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
            <div class="pathway-card" onclick="openPathwayModal('student')">
                <div class="pathway-icon-container highlight-gold"><i data-lucide="graduation-cap"></i></div>
                <h3>F1 Student Visa</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price:  USD</div>
                <p class="pathway-short">Pursue your academic dreams at top universities in America.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
            <div class="pathway-card" onclick="openPathwayModal('work')">
                <div class="pathway-icon-container highlight-purple"><i data-lucide="briefcase"></i></div>
                <h3>H-1B Work Visa</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price:  USD</div>
                <p class="pathway-short">Work in specialty occupations for US employers.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
        </div>''',

    'france': '''<div class="pathways-grid">
            <div class="pathway-card" onclick="openPathwayModal('visitor')">
                <div class="pathway-icon-container highlight-green"><i data-lucide="plane"></i></div>
                <h3>Schengen Tourist Visa</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price: €80</div>
                <p class="pathway-short">Experience the romance of Paris and the French Riviera.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
            <div class="pathway-card" onclick="openPathwayModal('student')">
                <div class="pathway-icon-container highlight-gold"><i data-lucide="graduation-cap"></i></div>
                <h3>Long-Stay Student</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price: €99</div>
                <p class="pathway-short">Study at prestigious French institutions and Grandes Écoles.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
            <div class="pathway-card" onclick="openPathwayModal('work')">
                <div class="pathway-icon-container highlight-purple"><i data-lucide="briefcase"></i></div>
                <h3>Passeport Talent</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price: €225</div>
                <p class="pathway-short">For highly skilled workers, founders, and investors.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
        </div>''',

    'spain': '''<div class="pathways-grid">
            <div class="pathway-card" onclick="openPathwayModal('visitor')">
                <div class="pathway-icon-container highlight-green"><i data-lucide="plane"></i></div>
                <h3>Schengen Tourist Visa</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price: €80</div>
                <p class="pathway-short">Explore the culture, beaches, and history of Spain.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
            <div class="pathway-card" onclick="openPathwayModal('student')">
                <div class="pathway-icon-container highlight-gold"><i data-lucide="graduation-cap"></i></div>
                <h3>Digital Nomad Visa</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price: €73</div>
                <p class="pathway-short">Live in Spain while working remotely for foreign companies.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
            <div class="pathway-card" onclick="openPathwayModal('work')">
                <div class="pathway-icon-container highlight-purple"><i data-lucide="briefcase"></i></div>
                <h3>Non-Lucrative Visa</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price: €80</div>
                <p class="pathway-short">Retire or live in Spain with sufficient passive income.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
        </div>''',

    'australia': '''<div class="pathways-grid">
            <div class="pathway-card" onclick="openPathwayModal('visitor')">
                <div class="pathway-icon-container highlight-green"><i data-lucide="plane"></i></div>
                <h3>Subclass 600 (Visitor)</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price:  AUD</div>
                <p class="pathway-short">Visit Australia for tourism or business visitor activities.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
            <div class="pathway-card" onclick="openPathwayModal('student')">
                <div class="pathway-icon-container highlight-gold"><i data-lucide="graduation-cap"></i></div>
                <h3>Subclass 500 (Student)</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price:  AUD</div>
                <p class="pathway-short">Participate in an eligible course of study in Australia.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
            <div class="pathway-card" onclick="openPathwayModal('work')">
                <div class="pathway-icon-container highlight-purple"><i data-lucide="briefcase"></i></div>
                <h3>Subclass 482 (TSS)</h3>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Price: ,455 AUD</div>
                <p class="pathway-short">Temporary Skill Shortage visa for sponsored workers.</p>
                <button class="btn-text">View Requirements <i data-lucide="arrow-right"></i></button>
            </div>
        </div>'''
}

for code, new_grid in grids.items():
    path = f"{code}/index.html"
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        content = re.sub(r'<div class="pathways-grid">.*?</div>\s*</section>', new_grid + '\n    </section>', content, flags=re.DOTALL)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Visa pathways and pricing updated!")
