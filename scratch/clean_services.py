import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

new_services_html = """    <!-- Our Services Section -->
    <section class="section-services">
        <div class="container">
            <div class="services-header">
                <h2 class="services-title">Our Core Services</h2>
                <div class="services-divider"></div>
                <p style="color: var(--text-muted); font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Discover tailored visa pathways designed to simplify your journey and support your international goals.</p>
            </div>
            
            <div class="services-grid">
                <!-- Card 1 -->
                <div class="service-card">
                    <div class="icon-wrapper">
                        <img src="../Assets/viseas/s1.png" alt="Business Visa">
                    </div>
                    <div class="service-content">
                        <h3>BUSINESS VISA</h3>
                        <p>Seamlessly expand your professional network, attend conferences, and explore global business opportunities.</p>
                        <a href="clarity.html" class="service-btn">Read More</a>
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="service-card">
                    <div class="icon-wrapper">
                        <img src="../Assets/viseas/s2.png" alt="Work Visa">
                    </div>
                    <div class="service-content">
                        <h3>WORK VISA</h3>
                        <p>Take your career to the international stage. We guide you through employment sponsorship requirements.</p>
                        <a href="clarity.html" class="service-btn">Read More</a>
                    </div>
                </div>
                <!-- Card 3 -->
                <div class="service-card">
                    <div class="icon-wrapper">
                        <img src="../Assets/viseas/s4.png" alt="Tourist Visa">
                    </div>
                    <div class="service-content">
                        <h3>TOURIST VISA</h3>
                        <p>Experience breathtaking landmarks and memorable vacations. Let us handle the visa complexities.</p>
                        <a href="clarity.html" class="service-btn">Read More</a>
                    </div>
                </div>
                <!-- Card 4 -->
                <div class="service-card">
                    <div class="icon-wrapper">
                        <img src="../Assets/viseas/s3.png" alt="Student Visa">
                    </div>
                    <div class="service-content">
                        <h3>STUDENT VISA</h3>
                        <p>Unlock world-class education abroad. We assist with proof of funds and securing your study permits.</p>
                        <a href="clarity.html" class="service-btn">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
"""

for country in countries:
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if not os.path.exists(html_path):
        continue
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = re.sub(r'<!-- Our Services Section -->.*?<!-- 340\+ Success Banner -->', new_services_html + '\n    <!-- 340+ Success Banner -->', content, flags=re.DOTALL)
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Services sections cleaned up successfully!")
