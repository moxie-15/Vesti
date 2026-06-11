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
            
            <div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
                <!-- Card 1 -->
                <div class="service-card hover-glow" style="background: white; border-radius: 16px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; text-align: center; border: 1px solid #e2e8f0; position: relative; overflow: hidden;">
                    <div class="icon-wrapper" style="width: 70px; height: 70px; background: rgba(0,0,0,0.03); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; transition: all 0.3s ease;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    </div>
                    <div class="service-content">
                        <h3 style="font-size: 1.25rem; font-weight: 700; color: #060E42; margin-bottom: 15px; font-family: 'Outfit', sans-serif;">Business Visa</h3>
                        <p style="color: #475569; line-height: 1.6; margin-bottom: 25px; font-size: 0.95rem;">Seamlessly expand your professional network, attend conferences, and explore global business opportunities.</p>
                        <a href="clarity.html" class="service-btn" style="color: var(--primary); font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 5px;">Read More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="service-card hover-glow" style="background: white; border-radius: 16px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; text-align: center; border: 1px solid #e2e8f0; position: relative; overflow: hidden;">
                    <div class="icon-wrapper" style="width: 70px; height: 70px; background: rgba(0,0,0,0.03); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; transition: all 0.3s ease;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15l8.3-4.15a2 2 0 0 0 0-3.7L12 3l-8.3 4.15a2 2 0 0 0 0 3.7L12 15z"></path><path d="M12 22l8.3-4.15a2 2 0 0 0 1.7-1.97V11"></path><path d="M12 22l-8.3-4.15a2 2 0 0 1-1.7-1.97V11"></path></svg>
                    </div>
                    <div class="service-content">
                        <h3 style="font-size: 1.25rem; font-weight: 700; color: #060E42; margin-bottom: 15px; font-family: 'Outfit', sans-serif;">Work Visa</h3>
                        <p style="color: #475569; line-height: 1.6; margin-bottom: 25px; font-size: 0.95rem;">Take your career to the international stage. We guide you through employment sponsorship requirements.</p>
                        <a href="clarity.html" class="service-btn" style="color: var(--primary); font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 5px;">Read More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                    </div>
                </div>
                <!-- Card 3 -->
                <div class="service-card hover-glow" style="background: white; border-radius: 16px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; text-align: center; border: 1px solid #e2e8f0; position: relative; overflow: hidden;">
                    <div class="icon-wrapper" style="width: 70px; height: 70px; background: rgba(0,0,0,0.03); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; transition: all 0.3s ease;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </div>
                    <div class="service-content">
                        <h3 style="font-size: 1.25rem; font-weight: 700; color: #060E42; margin-bottom: 15px; font-family: 'Outfit', sans-serif;">Tourist Visa</h3>
                        <p style="color: #475569; line-height: 1.6; margin-bottom: 25px; font-size: 0.95rem;">Experience breathtaking landmarks and memorable vacations. Let us handle the visa complexities.</p>
                        <a href="clarity.html" class="service-btn" style="color: var(--primary); font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 5px;">Read More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                    </div>
                </div>
                <!-- Card 4 -->
                <div class="service-card hover-glow" style="background: white; border-radius: 16px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; text-align: center; border: 1px solid #e2e8f0; position: relative; overflow: hidden;">
                    <div class="icon-wrapper" style="width: 70px; height: 70px; background: rgba(0,0,0,0.03); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; transition: all 0.3s ease;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                    </div>
                    <div class="service-content">
                        <h3 style="font-size: 1.25rem; font-weight: 700; color: #060E42; margin-bottom: 15px; font-family: 'Outfit', sans-serif;">Student Visa</h3>
                        <p style="color: #475569; line-height: 1.6; margin-bottom: 25px; font-size: 0.95rem;">Unlock world-class education abroad. We assist with proof of funds and securing your study permits.</p>
                        <a href="clarity.html" class="service-btn" style="color: var(--primary); font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 5px;">Read More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
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

print("Services sections updated successfully!")
