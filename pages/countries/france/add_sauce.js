const fs = require('fs');
const path = require('path');

// Update travel-fees.html
const travelFeesPath = path.join(__dirname, 'travel-fees.html');
let htmlContent = fs.readFileSync(travelFeesPath, 'utf8');

// Replace NZ variable names with AU equivalents that were missed by word boundary regex
htmlContent = htmlContent.replace(/FEE_VISA_NZD/g, 'FEE_VISA_AUD');
htmlContent = htmlContent.replace(/FEE_IMMIGRATION_NZD/g, 'FEE_BIOMETRICS_AUD'); // Swap Immigration for Biometrics
htmlContent = htmlContent.replace(/FEE_IVL_NZD/g, 'FEE_MEDICAL_AUD'); // Swap IVL for Medical
htmlContent = htmlContent.replace(/visaNZD/g, 'visaAUD');
htmlContent = htmlContent.replace(/immigrationNZD/g, 'biometricsAUD');
htmlContent = htmlContent.replace(/ivlNZD/g, 'medicalAUD');
htmlContent = htmlContent.replace(/USD_TO_NZD/g, 'USD_TO_AUD');
htmlContent = htmlContent.replace(/DHA/g, 'DHA'); // Dept of Home Affairs

// Update specific pricing in calculation
htmlContent = htmlContent.replace(/adminFees\.visaAUD\s*!==\s*undefined\s*\?\s*adminFees\.visaAUD\s*:\s*300/g, 'adminFees.visaAUD !== undefined ? adminFees.visaAUD : 195');
htmlContent = htmlContent.replace(/adminFees\.biometricsAUD\s*!==\s*undefined\s*\?\s*adminFees\.biometricsAUD\s*:\s*41/g, 'adminFees.biometricsAUD !== undefined ? adminFees.biometricsAUD : 85');
htmlContent = htmlContent.replace(/adminFees\.medicalAUD\s*!==\s*undefined\s*\?\s*adminFees\.medicalAUD\s*:\s*100/g, 'adminFees.medicalAUD !== undefined ? adminFees.medicalAUD : 350');

// Update UI Labels in HTML
htmlContent = htmlContent.replace(/DHA\s+Visa\s+Application\s+Fee/g, 'Australian Visa Application Fee');
htmlContent = htmlContent.replace(/DHA\s+Immigration\s+Fee/g, 'Biometrics Collection Fee');
htmlContent = htmlContent.replace(/International\s+Visitor\s+Conservation\s+and\s+Tourism\s+Levy\s+\(IVL\)/g, 'Medical Examination (Estimated)');

// Add some 'sauce' to travel-fees.html - Glassmorphism, animations, new gradient
htmlContent = htmlContent.replace(/background-color:\s*#13110f/g, 'background: linear-gradient(135deg, #004d40 0%, #00843D 100%)');
htmlContent = htmlContent.replace(/bg-blue-50/g, 'bg-emerald-50');
htmlContent = htmlContent.replace(/text-blue-900/g, 'text-emerald-900');
htmlContent = htmlContent.replace(/text-blue-800/g, 'text-emerald-800');
htmlContent = htmlContent.replace(/bg-blue-600/g, 'bg-emerald-600');
htmlContent = htmlContent.replace(/hover:bg-blue-700/g, 'hover:bg-emerald-700');
htmlContent = htmlContent.replace(/from-blue-600\s+to-indigo-700/g, 'from-emerald-600 to-teal-700');
htmlContent = htmlContent.replace(/ring-blue-500/g, 'ring-emerald-500');

fs.writeFileSync(travelFeesPath, htmlContent, 'utf8');

// Update CSS file
const cssPath = path.join(__dirname, 'css', 'style.css');
if (fs.existsSync(cssPath)) {
    let cssContent = fs.readFileSync(cssPath, 'utf8');
    
    // Change core colors to Australian theme (Green and Gold)
    cssContent = cssContent.replace(/#13110f/g, '#00843D'); // Deep Navy -> Outback Green
    cssContent = cssContent.replace(/#FF3B30/g, '#FFCD00'); // Red -> Golden Yellow
    
    // Add some creative animations and shadows (Sauce)
    const sauceCSS = `
/* --- Added Sauce (Australian Theme) --- */
.card, .fee-card {
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 132, 61, 0.1);
}
.card:hover, .fee-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 132, 61, 0.15);
}
.btn-primary {
    background: linear-gradient(135deg, #FFCD00 0%, #FFA000 100%);
    color: #004d40;
    font-weight: 700;
    border: none;
    transition: all 0.3s ease;
}
.btn-primary:hover {
    background: linear-gradient(135deg, #FFA000 0%, #FFCD00 100%);
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(255, 205, 0, 0.3);
}
.calculator-hero-banner {
    position: relative;
    overflow: hidden;
}
.calculator-hero-banner::before {
    content: '';
    position: absolute;
    top: -50%; left: -50%; width: 200%; height: 200%;
    background: radial-gradient(circle, rgba(255,205,0,0.1) 0%, transparent 60%);
    animation: rotateBg 20s linear infinite;
}
@keyframes rotateBg {
    100% { transform: rotate(360deg); }
}
`;
    cssContent += sauceCSS;
    fs.writeFileSync(cssPath, cssContent, 'utf8');
}

console.log("Sauce applied successfully to travel-fees.html and style.css!");
