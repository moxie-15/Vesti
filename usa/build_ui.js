const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
const travelFeesHtmlPath = path.join(__dirname, 'travel-fees.html');

// --- UPDATE INDEX.HTML ---
let indexContent = fs.readFileSync(indexHtmlPath, 'utf8');

const servicesSection = `
    <!-- Our Services (Visa Types) Section -->
    <section class="py-16 bg-white" id="visa-services">
        <div class="container mx-auto px-4 max-w-6xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-[#060E42] mb-2 uppercase" style="font-family: 'Outfit', sans-serif;">Our Services</h2>
                <div class="h-1 w-16 bg-[#8BC34A] mx-auto"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <!-- Business Visa -->
                <div class="bg-white p-8 rounded-sm shadow-lg border border-gray-100 hover:shadow-xl transition flex flex-col items-center text-center group hover:bg-[#060E42] hover:text-white">
                    <i data-lucide="briefcase" class="w-12 h-12 text-[#060E42] group-hover:text-white mb-4"></i>
                    <h3 class="text-lg font-bold mb-3 uppercase">Business Visa</h3>
                    <p class="text-gray-500 group-hover:text-gray-300 text-sm mb-6 flex-grow">Secure your short-term or long-term business visa for Australia with our expedited processing and expert handling.</p>
                    <a href="travel-fees.html?type=business" class="inline-block bg-[#8BC34A] text-white px-6 py-2 text-sm font-semibold rounded hover:bg-[#7CB342] transition">Read More</a>
                </div>

                <!-- Work Visa -->
                <div class="bg-[#060E42] text-white p-8 rounded-sm shadow-lg border border-[#060E42] hover:shadow-xl transition flex flex-col items-center text-center group">
                    <i data-lucide="briefcase" class="w-12 h-12 text-white mb-4"></i>
                    <h3 class="text-lg font-bold mb-3 uppercase">Work Visa</h3>
                    <p class="text-gray-300 text-sm mb-6 flex-grow">From temporary skill shortage to working holiday visas, we make your transition to the Australian workforce seamless.</p>
                    <a href="travel-fees.html?type=work" class="inline-block bg-[#8BC34A] text-white px-6 py-2 text-sm font-semibold rounded hover:bg-[#7CB342] transition">Read More</a>
                </div>

                <!-- Tourist Visa -->
                <div class="bg-white p-8 rounded-sm shadow-lg border border-gray-100 hover:shadow-xl transition flex flex-col items-center text-center group hover:bg-[#060E42] hover:text-white">
                    <i data-lucide="plane" class="w-12 h-12 text-[#060E42] group-hover:text-white mb-4"></i>
                    <h3 class="text-lg font-bold mb-3 uppercase">Tourist Visa</h3>
                    <p class="text-gray-500 group-hover:text-gray-300 text-sm mb-6 flex-grow">Explore the magic of the Outback and vibrant Australian cities. Quick tourist visa processing for holidays and family visits.</p>
                    <a href="travel-fees.html?type=visitor" class="inline-block bg-[#8BC34A] text-white px-6 py-2 text-sm font-semibold rounded hover:bg-[#7CB342] transition">Read More</a>
                </div>

                <!-- Student Visa -->
                <div class="bg-white p-8 rounded-sm shadow-lg border border-gray-100 hover:shadow-xl transition flex flex-col items-center text-center group hover:bg-[#060E42] hover:text-white">
                    <i data-lucide="graduation-cap" class="w-12 h-12 text-[#060E42] group-hover:text-white mb-4"></i>
                    <h3 class="text-lg font-bold mb-3 uppercase">Student Visa</h3>
                    <p class="text-gray-500 group-hover:text-gray-300 text-sm mb-6 flex-grow">Study at top Australian universities. We assist with Subclass 500 applications, health cover, and financial proof.</p>
                    <a href="travel-fees.html?type=student" class="inline-block bg-[#8BC34A] text-white px-6 py-2 text-sm font-semibold rounded hover:bg-[#7CB342] transition">Read More</a>
                </div>
            </div>
        </div>
    </section>
`;

// Insert the services section after the hero banner in index.html
if (indexContent.includes('<section class="py-16 bg-slate-50" id="pathways">')) {
    indexContent = indexContent.replace('<section class="py-16 bg-slate-50" id="pathways">', servicesSection + '\n    <section class="py-16 bg-slate-50" id="pathways">');
    fs.writeFileSync(indexHtmlPath, indexContent, 'utf8');
}


// --- UPDATE TRAVEL-FEES.HTML LOGIC ---
let feesContent = fs.readFileSync(travelFeesHtmlPath, 'utf8');

// Inject JS to parse URL parameters and set the visa fee dynamically
const dynamicVisaLogic = `
            // Parse URL to get Visa Type
            const urlParams = new URLSearchParams(window.location.search);
            const visaType = urlParams.get('type') || 'visitor'; // default to visitor
            
            // Map visa types to base fees (AUD)
            const visaFees = {
                'visitor': 195,
                'student': 2000,
                'work': 670,
                'business': 195
            };
            const defaultVisaFee = visaFees[visaType] || 195;

            // Read admin-configured fee prices from localStorage
            let adminFees = {};
            const adminRaw = localStorage.getItem('vesti_admin_fees');
            if (adminRaw) adminFees = JSON.parse(adminRaw).fees || {};

            const FEE_VISA_AUD        = adminFees.visaAUD        !== undefined ? adminFees.visaAUD        : defaultVisaFee;
`;

// Replace the static FEE_VISA_AUD logic in travel-fees.html with the dynamic one
const targetLogic = `            // Read admin-configured fee prices from localStorage
            let adminFees = {};
            const adminRaw = localStorage.getItem('vesti_admin_fees');
            if (adminRaw) adminFees = JSON.parse(adminRaw).fees || {};

            const FEE_VISA_AUD        = adminFees.visaAUD !== undefined ? adminFees.visaAUD : 195;`;

if (feesContent.includes(targetLogic)) {
    feesContent = feesContent.replace(targetLogic, dynamicVisaLogic);
} else {
    // Fallback if the previous script modified it slightly differently
    const targetLogic2 = `            // Read admin-configured fee prices from localStorage
            let adminFees = {};
            try {
                const adminRaw = localStorage.getItem('vesti_admin_fees');
                if (adminRaw) adminFees = JSON.parse(adminRaw).fees || {};
            } catch (e) {}
            
            const FEE_VISA_AUD        = adminFees.visaAUD        !== undefined ? adminFees.visaAUD        : 195;`;
    feesContent = feesContent.replace(/let adminFees = {};[\s\S]*?const FEE_VISA_AUD[^;]+;/, dynamicVisaLogic);
}

// Add UI indication of which visa type is selected in travel-fees.html
const titleInjection = `
            // Update Title and Labels based on Visa Type
            const visaTitleMap = {
                'visitor': 'Visitor Visa (Subclass 600)',
                'student': 'Student Visa (Subclass 500)',
                'work': 'Working Holiday Visa (Subclass 417/462)',
                'business': 'Business Visitor Visa'
            };
            const currentVisaTitle = visaTitleMap[visaType] || 'Visa';
            document.querySelectorAll('.visa-type-label').forEach(el => {
                el.innerText = currentVisaTitle;
            });
            
            const visaUSD        = Math.round((FEE_VISA_AUD`;

feesContent = feesContent.replace(/const visaUSD\s*=\s*Math\.round\(\(FEE_VISA_AUD/g, titleInjection);
feesContent = feesContent.replace(/>Australia Visa</g, '><span class="visa-type-label">Australia Visa</span><');

fs.writeFileSync(travelFeesHtmlPath, feesContent, 'utf8');

console.log("UI built and fee logic updated successfully!");
