import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'

new_services_html = """    <!-- Our Services Section -->
    <section class="section-services" style="padding: 80px 0; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
        <div class="container">
            <div class="services-header" style="text-align: center; margin-bottom: 50px;">
                <h2 class="services-title" style="font-size: 2.5rem; font-weight: 700; color: #060E42; font-family: 'Outfit', sans-serif;">Our Core Services</h2>
                <div class="services-divider" style="width: 60px; height: 4px; background-color: var(--primary); margin: 15px auto; border-radius: 2px;"></div>
                <p style="color: #475569; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Discover tailored visa pathways designed to simplify your journey and support your international goals.</p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 30px;">
                <!-- Card 1 -->
                <div class="service-card" style="display: flex; gap: 25px; align-items: flex-start; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
                    <div class="icon-wrapper" style="flex-shrink: 0; width: 80px;">
                        <img src="../Assets/viseas/s1.png" alt="Business Visa" style="width: 100%; height: auto; transition: filter 0.3s ease;">
                    </div>
                    <div style="flex: 1; text-align: left;">
                        <h3 style="font-size: 1.25rem; font-weight: 700; color: #060E42; margin-bottom: 15px; font-family: 'Outfit', sans-serif; text-transform: uppercase;">BUSINESS VISA</h3>
                        <p style="color: #475569; line-height: 1.6; margin-bottom: 25px; font-size: 0.95rem;">Seamlessly expand your professional network, attend conferences, and explore global business opportunities.</p>
                        <a href="clarity.html" style="background-color: var(--primary); border: none; color: white; padding: 10px 25px; font-weight: 600; text-decoration: none; display: inline-block; border-radius: 4px; transition: opacity 0.2s;">Read More</a>
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="service-card" style="display: flex; gap: 25px; align-items: flex-start; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
                    <div class="icon-wrapper" style="flex-shrink: 0; width: 80px;">
                        <img src="../Assets/viseas/s2.png" alt="Work Visa" style="width: 100%; height: auto; transition: filter 0.3s ease;">
                    </div>
                    <div style="flex: 1; text-align: left;">
                        <h3 style="font-size: 1.25rem; font-weight: 700; color: #060E42; margin-bottom: 15px; font-family: 'Outfit', sans-serif; text-transform: uppercase;">WORK VISA</h3>
                        <p style="color: #475569; line-height: 1.6; margin-bottom: 25px; font-size: 0.95rem;">Take your career to the international stage. We guide you through employment sponsorship requirements.</p>
                        <a href="clarity.html" style="background-color: var(--primary); border: none; color: white; padding: 10px 25px; font-weight: 600; text-decoration: none; display: inline-block; border-radius: 4px; transition: opacity 0.2s;">Read More</a>
                    </div>
                </div>
                <!-- Card 3 -->
                <div class="service-card" style="display: flex; gap: 25px; align-items: flex-start; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
                    <div class="icon-wrapper" style="flex-shrink: 0; width: 80px;">
                        <img src="../Assets/viseas/s4.png" alt="Tourist Visa" style="width: 100%; height: auto; transition: filter 0.3s ease;">
                    </div>
                    <div style="flex: 1; text-align: left;">
                        <h3 style="font-size: 1.25rem; font-weight: 700; color: #060E42; margin-bottom: 15px; font-family: 'Outfit', sans-serif; text-transform: uppercase;">TOURIST VISA</h3>
                        <p style="color: #475569; line-height: 1.6; margin-bottom: 25px; font-size: 0.95rem;">Experience breathtaking landmarks and memorable vacations. Let us handle the visa complexities.</p>
                        <a href="clarity.html" style="background-color: var(--primary); border: none; color: white; padding: 10px 25px; font-weight: 600; text-decoration: none; display: inline-block; border-radius: 4px; transition: opacity 0.2s;">Read More</a>
                    </div>
                </div>
                <!-- Card 4 -->
                <div class="service-card" style="display: flex; gap: 25px; align-items: flex-start; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
                    <div class="icon-wrapper" style="flex-shrink: 0; width: 80px;">
                        <img src="../Assets/viseas/s3.png" alt="Student Visa" style="width: 100%; height: auto; transition: filter 0.3s ease;">
                    </div>
                    <div style="flex: 1; text-align: left;">
                        <h3 style="font-size: 1.25rem; font-weight: 700; color: #060E42; margin-bottom: 15px; font-family: 'Outfit', sans-serif; text-transform: uppercase;">STUDENT VISA</h3>
                        <p style="color: #475569; line-height: 1.6; margin-bottom: 25px; font-size: 0.95rem;">Unlock world-class education abroad. We assist with proof of funds and securing your study permits.</p>
                        <a href="clarity.html" style="background-color: var(--primary); border: none; color: white; padding: 10px 25px; font-weight: 600; text-decoration: none; display: inline-block; border-radius: 4px; transition: opacity 0.2s;">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
"""

countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

for country in countries:
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if not os.path.exists(html_path):
        continue
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = re.sub(r'<!-- Our Services Section -->.*?<!-- 340\+ Success Banner -->', new_services_html + '\n    <!-- 340+ Success Banner -->', content, flags=re.DOTALL)
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Services sections restored successfully!")
