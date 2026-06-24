# SIWES Technical Work Report & Review
**Student Industrial Work Experience Scheme (SIWES)**  
**Industry Partner:** Vesti Technologies Inc.  
**Project Title:** Development & Deployment of the Vesti New Zealand Visa & Relocation Fintech Portal  
**Student Name:** Damilare  
**Academic Period:** May 2026  

---

## 1. Executive Summary
During the industrial training period at Vesti Technologies Inc., I was tasked with designing, developing, and deploying a premium, high-fidelity landing page and interactive portal for the **New Zealand Visa Pathway and Pre-arrival Fintech ecosystem**. The project was initiated to replicate Vesti's official US/Canada pathway products, targeting global migrants relocating to New Zealand. 

The developed solution incorporates modern frontend technologies, real-time calculators, 3D card visualizations, simulated AI legal advisory chats, custom print roadmap generators, and a cloud-based continuous deployment pipeline.

---

## 2. Project Goals & Objectives
* **Corporate Alignment:** Replicate official Vesti branding 1:1, utilizing corporate yellowish-green and dark-green leaf vector paths (`favi.svg`) and geometric fonts.
* **Pre-arrival Banking Showcase:** Build an interactive 3D neobank credit card (GlobalGeng card) detailing pre-arrival NZD details and transaction capabilities.
* **Financial Planning Tool:** Create a real-time expense and Immigration New Zealand (INZ) Proof of Funds (POF) calculator.
* **AI Paralegal Integration:** Develop a live-typing paralegal assistant (Zyra AI) simulating regulatory guidance.
* **Lead Generation Blueprint:** Implement a 3-step dynamic wizard capturing applicant details and generating a print-ready migration roadmap.
* **Cloud Deployment & Responsiveness:** Ensure the app works seamlessly across mobile, tablet, and desktop viewports, hosted securely on Vercel.

---

## 3. Weekly Task Breakdown & Milestones

### Week 1: Research, Design System, & Core Layout
* **Accomplishments:**
  * Researched the visual and user experience patterns of the live Vesti web application (`wevesti.com`).
  * Extracted raw XML vector paths of the official corporate leaf logo checkmark directly from production server assets.
  * Formulated a centralized CSS design system in `style.css` utilizing Vesti’s brand color palette (Midnight Deep Navy `#000B26`, Leaf Green `#63A146`, and Slate-Gray borders).
  * Implemented the custom organic dotted map shape accent and double-island contour clip-mask (`border-radius: 60% 40% 70% 30% / 50% 30% 70% 50%`) to house high-quality migrant photography.
* **Skills Utilized:** SVG vector parsing, CSS custom properties (variables), semantic HTML5, clip-path and border-radius layouts.

### Week 2: Neobank Showcase & 3D Interactive Card
* **Accomplishments:**
  * Engineered a fully interactive, neomorphic 3D credit card showcase representing the Vesti NZ GlobalGeng bank card.
  * Used CSS 3D Transforms (`perspective`, `rotateY`, `backface-visibility: hidden`) to allow users to click and flip the credit card between the front details and magnetic backing details in real-time.
  * Styled the card with dynamic glassmorphism glows and responsive flag overlays.
* **Skills Utilized:** CSS 3D Animations, JavaScript DOM click triggers, neomorphism, glassmorphism shadows.

### Week 3: Proof of Funds & Cost of Living Calculators
* **Accomplishments:**
  * Developed a fully responsive, client-side calculator engine in `app.js`.
  * Programmed dynamic slider event listeners to estimate monthly living expenses (rent, groceries, utilities) tailored to various New Zealand cities (Auckland, Wellington, Christchurch, Queenstown).
  * Hardcoded official Immigration New Zealand (INZ) regulatory Proof of Funds requirements into the logic to calculate the exact government-mandated financial thresholds based on the selected visa category (Student, Skilled Work, Working Holiday).
  * Styled the output with dynamic SVG-filled progress bars and financial pre-approval loan indicators.
* **Skills Utilized:** JavaScript ES6 Event Listeners (`input`, `change`), Math-based state estimation, CSS progressive bar indicators.

### Week 4: Zyra AI, Custom Blueprints, & Vercel CI/CD
* **Accomplishments:**
  * Built the Zyra AI chat assistant interface with mock paralegal answers. Programmed an asynchronous typewriter simulator to make the chat feel responsive and organic.
  * Created a 3-step lead capture wizard (Background -> Target Destination -> Timeline) that validates input fields and compiles applicant data into a printable roadmap report.
  * Designed custom print stylesheets (`@media print`) enabling clean paper/PDF printing of the migration blueprints with hidden headers/nav elements.
  * Solved local drive storage limitations, configured Git, and deployed the portal to Vercel production hosting (`https://vesti-nz-portal.vercel.app`).
* **Skills Utilized:** Asynchronous JS (`setTimeout`), PDF-print styling, Git version control, Vercel CLI, NPM package operations.

---

## 4. Technical Skills & Tools Acquired

| Skill Category | Specific Competency Acquired |
| :--- | :--- |
| **Frontend Languages** | HTML5 (Semantic elements), CSS3 (Transforms, transitions, flex grids, responsive queries, media print rules), Vanilla JavaScript ES6 (Asynchronous actions, UI state models, event loops). |
| **Visual Design** | Brand replication, neomorphic components, glassmorphism backdrops, HSL tailored color schemes, vector scaling. |
| **Tooling & Cloud** | Git (repositories, tracking, branch committing), Node Package Manager (NPM cache clear, package execution), Vercel CLI (link setup, production deployment, cloud serving). |
| **Systems Auditing** | Browser subagent visual automation, viewport responsiveness testing, device-specific layout analysis. |

---

## 5. Industrial Experience Outcomes & Conclusion
Participating in this project provided critical real-world experience in building premium fintech products and understanding high-fidelity development workflows. 
I successfully transitioned from a student environment to active developer execution, gaining competence in:
1. **Self-Directed Research:** Extracting live assets, reading documentation, and finding alternative strategies under resource constraints (like low local disk space).
2. **Speed & High Fidelity:** Rapidly delivering a fully functioning client-side portal, exceeding the typical MVP (Minimum Viable Product) standards.
3. **Continuous Integration & Delivery (CI/CD):** Deploying code directly to production servers so that stakeholders (team leads and supervisors) can review results globally in real-time.

This SIWES attachment has significantly bridged the gap between academic theory and active, professional software engineering practices. I highly recommend this line of fintech-relocation product engineering for future interns.
