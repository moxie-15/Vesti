# Vesti New Zealand Relocation & Visa Fintech Portal

A premium, interactive web portal designed for global migrants relocating to New Zealand. Developed under Vesti Technologies Inc. standards, this project replicates Vesti's official design system (1:1 brand layout, Midnight Navy and Leaf Green themes) and provides interactive tools for pre-arrival relocation planning.

---

## 🚀 Key Features

* **Pre-Arrival Banking Showcase:** Interactive 3D credit card (GlobalGeng card) detailing pre-arrival NZD transaction features with interactive click-to-flip motion.
* **INZ Proof of Funds (POF) Calculator:** Real-time client-side calculation engine simulating Immigration New Zealand savings requirements and monthly living expenses.
* **Eligibility Assessment Quiz:** A 3-step validation wizard evaluating travel background, destination, and visa pathways.
* **Custom Print-Ready Blueprint:** Generates a personalized relocation roadmap and action plan, optimized for paper and PDF printing (`@media print`).
* **Admin Viewer logs Dashboard:** Client-side tracking interface reading visitor progress from `localStorage`, with search, filters, data reset, and CSV export capabilities.

---

## 📁 Repository Structure

The project has been structured according to enterprise frontend standards:

```
├── index.html                   # Main landing & relocation portal entry
├── clarity.html                 # Clarity sessions overview page
├── clarity-payment.html         # Clarity booking payment page
├── travel-fees.html             # Travel & visa fees page
├── video-catalog.html           # Video guides catalog page
├── admin-logs.html              # Admin tracking logs dashboard
├── assets/                      # Structured static assets directory
│   ├── favicon.svg              # Page icon
│   ├── logo.png                 # Vesti corporate logo
│   └── images/                  # Content-specific photos and graphics
├── css/                         # Separated stylesheets
│   ├── style.css                # Global design system & layout styles
│   └── scrolling.css            # Custom scroll card-stacking animations
├── js/                          # Separated client-side scripts
│   ├── app.js                   # Main application business logic
│   ├── countries.js             # Countries ISO list and phone codes
│   └── scrolling.js             # Scroll stacking interactive animation engine
├── dev/                         # Developer-specific sandboxes and utilities
│   ├── scrolling-preview.html   # Standalone scroll stacking card demo page
│   ├── footer-template.html     # Shared footer snippet
│   └── tools/
│       └── update-links.py      # Utility link updater python script
└── SIWES_REVIEW.md              # Technical SIWES review & weekly milestones
```

---

## 🛠️ Technology Stack

* **Structure:** Semantic HTML5
* **Styling:** Custom Vanilla CSS (Design system, neomorphism, glassmorphism, 3D transforms) & Tailwind CSS (utility-first styles for logs dashboard and card sandbox)
* **Logic:** Vanilla JavaScript (ES6, client-side event loops, asynchronous typewriter simulator, state management, printing stylesheets)
* **Icons:** Lucide Icons CDN
* **Typography:** Outfit & Inter (Google Fonts)

---

## 💻 Running the Project Locally

The portal is a lightweight client-side application. You can run it locally in any of the following ways:

### Option 1: Direct File Access
Simply double-click the [index.html](file:///c:/Users/MOXIE/Desktop/New_zealand/index.html) file to open the portal in any modern web browser.

### Option 2: Live Development Server
To run with a hot-reloading development server (recommended for local changes):
1. Install Node.js if you haven't already.
2. Run the following command in the project directory:
   ```bash
   npx -y http-server ./
   ```
3. Open `http://localhost:8080` in your web browser.
