import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'
countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

# Modal HTML to inject
modal_html = """
    <!-- Eligibility Modal Form -->
    <div class="modal" id="eligibility-modal">
        <div class="modal-content elig-modal-white" style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.3); max-width: 600px; width: 90%;">
            <button class="modal-close elig-modal-close" id="eligibility-close" aria-label="Close modal" style="position: absolute; top: 20px; right: 20px; background: transparent; border: none; cursor: pointer; color: #64748b;">
                <i data-lucide="x"></i>
            </button>

            <!-- 3-Step Progress Bar Indicator -->
            <div class="elig-progress-bar" style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 20px;">
                <div class="elig-progress-step active" id="elig-dot-1" style="width: 12px; height: 12px; border-radius: 50%; background: #5a9e3a;"></div>
                <div class="elig-progress-line active" id="elig-line-1" style="height: 2px; flex: 1; background: #e2e8f0;"></div>
                <div class="elig-progress-step" id="elig-dot-2" style="width: 12px; height: 12px; border-radius: 50%; background: #e2e8f0;"></div>
                <div class="elig-progress-line" id="elig-line-2" style="height: 2px; flex: 1; background: #e2e8f0;"></div>
                <div class="elig-progress-step" id="elig-dot-3" style="width: 12px; height: 12px; border-radius: 50%; background: #e2e8f0;"></div>
            </div>

            <span id="elig-step-text" class="elig-step-text" style="font-size: 0.85rem; font-weight: 700; color: #5a9e3a; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Step 1 of 3</span>
            <h2 class="elig-title" style="font-size: 1.8rem; color: #060E42; margin-bottom: 10px; font-weight: 800;">Check Your Eligibility for Vesti Pathways</h2>
            <p class="elig-subtitle" style="color: #64748b; margin-bottom: 30px; font-size: 1rem;">Take this quiz to see if our pathways is a fit for you.</p>

            <form id="eligibility-form">
                <!-- Step 1 -->
                <div id="elig-step-1">
                    <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                        <div class="form-group" style="display: flex; flex-direction: column; gap: 8px;">
                            <label class="elig-input-label" style="font-size: 0.85rem; font-weight: 700; color: #334155; text-transform: uppercase;">First Name</label>
                            <input type="text" name="firstName" placeholder="e.g. John" required class="form-input" style="padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit'; font-size: 1rem;">
                        </div>
                        <div class="form-group" style="display: flex; flex-direction: column; gap: 8px;">
                            <label class="elig-input-label" style="font-size: 0.85rem; font-weight: 700; color: #334155; text-transform: uppercase;">Last Name</label>
                            <input type="text" name="lastName" placeholder="e.g. Doe" required class="form-input" style="padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit'; font-size: 1rem;">
                        </div>
                    </div>

                    <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                        <div class="form-group" style="display: flex; flex-direction: column; gap: 8px;">
                            <label class="elig-input-label" style="font-size: 0.85rem; font-weight: 700; color: #334155; text-transform: uppercase;">Gender</label>
                            <select name="gender" required class="form-input" style="padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit'; font-size: 1rem; background: white;">
                                <option value="" disabled selected>Select your gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="form-group" style="display: flex; flex-direction: column; gap: 8px;">
                            <label class="elig-input-label" style="font-size: 0.85rem; font-weight: 700; color: #334155; text-transform: uppercase;">Email Address</label>
                            <input type="email" name="email" placeholder="you@example.com" required class="form-input" style="padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit'; font-size: 1rem;">
                        </div>
                    </div>

                    <div class="form-group" style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
                        <label class="elig-input-label" style="font-size: 0.85rem; font-weight: 700; color: #334155; text-transform: uppercase;">Country</label>
                        <select name="country" required class="form-input" style="padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit'; font-size: 1rem; background: white;">
                            <option value="" disabled selected>Select your country</option>
                            <option>Nigeria</option>
                            <option>Ghana</option>
                            <option>Kenya</option>
                            <option>South Africa</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div class="form-group" style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
                        <label class="elig-input-label" style="font-size: 0.85rem; font-weight: 700; color: #334155; text-transform: uppercase;">Phone Number</label>
                        <input type="tel" name="phone" placeholder="+234 800 000 0000" required class="form-input" style="padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit'; font-size: 1rem;">
                    </div>

                    <button type="button" id="elig-btn-continue" class="btn-primary" onclick="nextStep1()" style="background: #5a9e3a; color: white; border: none; padding: 14px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%; margin-top: 10px; font-size: 1.1rem;">
                        Continue
                    </button>
                </div>

                <!-- Step 2 -->
                <div id="elig-step-2" style="display: none;">
                    <div style="margin-bottom: 25px;">
                        <p class="elig-question-text" style="font-weight: 600; margin-bottom: 10px;">Is the primary purpose of your trip for tourism, vacation, business meetings, or visiting family?</p>
                        <div class="radio-card-group" style="display: flex; flex-direction: column; gap: 10px;">
                            <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer;"><input type="radio" name="q1" value="yes" required> Yes</label>
                            <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer;"><input type="radio" name="q1" value="no"> No</label>
                        </div>
                    </div>
                    <button type="button" class="btn-primary" onclick="nextStep2()" style="background: #5a9e3a; color: white; border: none; padding: 14px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%; font-size: 1.1rem;">Continue</button>
                </div>

                <!-- Step 3 -->
                <div id="elig-step-3" style="display: none;">
                    <div style="margin-bottom: 25px;">
                        <p class="elig-question-text" style="font-weight: 600; margin-bottom: 10px;">Are you able to provide proof of sufficient funds to support your stay?</p>
                        <div class="radio-card-group" style="display: flex; flex-direction: column; gap: 10px;">
                            <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer;"><input type="radio" name="q2" value="yes" required> Yes</label>
                            <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer;"><input type="radio" name="q2" value="no"> No</label>
                        </div>
                    </div>
                    <button type="button" class="btn-primary" onclick="submitEligibilityForm(event)" style="background: #5a9e3a; color: white; border: none; padding: 14px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%; font-size: 1.1rem;">Submit & Check Eligibility</button>
                </div>
            </form>
        </div>
    </div>

    <style>
    /* Modal Styles to override generic */
    #eligibility-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(6, 14, 66, 0.95);
        z-index: 9999;
        justify-content: center;
        align-items: center;
        overflow-y: auto;
    }
    #eligibility-modal.active {
        display: flex;
    }
    </style>

    <script>
    function openEligibilityModal() {
        document.getElementById('eligibility-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    document.getElementById('eligibility-close').addEventListener('click', function() {
        document.getElementById('eligibility-modal').classList.remove('active');
        document.body.style.overflow = '';
    });

    function nextStep1() {
        document.getElementById('elig-step-1').style.display = 'none';
        document.getElementById('elig-step-2').style.display = 'block';
        document.getElementById('elig-step-text').innerText = 'Step 2 of 3';
        document.getElementById('elig-dot-2').style.background = '#5a9e3a';
        document.getElementById('elig-line-1').style.background = '#5a9e3a';
    }
    
    function nextStep2() {
        document.getElementById('elig-step-2').style.display = 'none';
        document.getElementById('elig-step-3').style.display = 'block';
        document.getElementById('elig-step-text').innerText = 'Step 3 of 3';
        document.getElementById('elig-dot-3').style.background = '#5a9e3a';
        document.getElementById('elig-line-2').style.background = '#5a9e3a';
    }

    function submitEligibilityForm(e) {
        e.preventDefault();
        alert('Thank you for submitting! A Vesti expert will contact you shortly to confirm your eligibility.');
        document.getElementById('eligibility-modal').classList.remove('active');
        document.body.style.overflow = '';
    }
    </script>
"""

for country in countries:
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if not os.path.exists(html_path):
        continue
    
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Change the hero button back to trigger the modal instead of routing to qualify.html
    content = re.sub(
        r'<a href="\.\./qualify\.html"[^>]*>See If You Qualify</a>',
        r'<button id="hero-btn-qualify" class="btn btn-outline btn-lg" onclick="openEligibilityModal()" style="background: transparent; color: white; border: 2px solid rgba(255,255,255,0.3); border-radius: 6px; padding: 12px 30px; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; height: 48px;">See If You Qualify</button>',
        content
    )

    # Make sure we don't inject multiple times
    if 'id="eligibility-modal"' in content:
        # Replace the existing modal
        content = re.sub(r'<!-- Eligibility Modal Form -->.*?</script>', modal_html, content, flags=re.DOTALL)
    else:
        # Inject before <!-- Scripts -->
        content = content.replace('<!-- Scripts -->', modal_html + '\n    <!-- Scripts -->')

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Modal successfully restored to all country pages.")
