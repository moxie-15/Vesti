// checkout-pricing.js
// Separate module for dynamic pricing logic on the checkout page.
// Reads config from localStorage (set by admin) with server as optional fallback.
// This file is imported as a module from checkout.html.

// ── Default config (fallback if admin has never saved settings) ──
const DEFAULT_CONFIG = {
    rateMode: 'live',
    rates: { USD: 1.0, NGN: 1650, GHS: 15.20, KES: 135.00 },
    markup: 7.5,
    payment: {
        beneficiary: 'Vesti Technologies Ltd',
        bankName: 'Providus Bank',
        accountNumber: '1023948576',
        rrr: 'RRR123456789'
    },
    currencyOptions: ['NGN', 'USD', 'GHS', 'KES']
};

/**
 * Fetches the pricing config.
 * Priority: localStorage (admin-saved) → server → hardcoded defaults.
 */
async function fetchPricingConfig() {
    // 1. Try localStorage first – this is where the admin saves settings
    try {
        const raw = localStorage.getItem('vesti_portal_config');
        if (raw) {
            const cfg = JSON.parse(raw);
            // Attach currency options if missing
            if (!cfg.currencyOptions) {
                cfg.currencyOptions = Object.keys(cfg.rates || DEFAULT_CONFIG.rates);
            }
            return cfg;
        }
    } catch (e) { /* ignore parse errors */ }

    // Fallback directly to defaults
    return { ...DEFAULT_CONFIG };
}

/**
 * Get the stored currency or fall back to NGN (most common for this portal).
 */
function getStoredCurrency() {
    return localStorage.getItem('vesti_selected_currency') || 'NGN';
}

/**
 * Persist the selected currency.
 */
function storeCurrency(currency) {
    localStorage.setItem('vesti_selected_currency', currency);
}

/**
 * Compute the total price.
 * @param {number} baseAmountUSD - Amount in USD (base).
 * @param {object} config        - Config object from fetchPricingConfig().
 * @param {string} currency      - Desired output currency code.
 * @returns {number}
 */
function computeTotal(baseAmountUSD, config, currency) {
    const rate    = (config.rates && config.rates[currency]) ? config.rates[currency] : 1;
    const markup  = typeof config.markup === 'number' ? config.markup : 0;
    const markedUp = baseAmountUSD * (1 + markup / 100);
    return Math.round(markedUp * rate * 100) / 100;
}

/**
 * Format a value with the appropriate currency symbol.
 */
function formatCurrencySymbol(value, currency) {
    const symbols = { USD: '$', NGN: '₦', GHS: 'GH₵', KES: 'KSh' };
    const symbol  = symbols[currency] || currency;
    return `${symbol} ${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/**
 * Main entry point – call from checkout.html after DOM is ready.
 * @param {number} baseAmountUSD - The base travel-fee total in USD.
 */
async function initPricing(baseAmountUSD) {
    try {
        const config   = await fetchPricingConfig();
        const selector = document.getElementById('currency-selector');

        // Populate currency dropdown
        if (selector) {
            selector.innerHTML = '';
            (config.currencyOptions || Object.keys(config.rates || {})).forEach(cur => {
                const opt = document.createElement('option');
                opt.value       = cur;
                opt.textContent = cur;
                selector.appendChild(opt);
            });
            selector.value = getStoredCurrency();
        }

        // Helper: refresh the displayed total
        const updateDisplay = () => {
            const cur   = getStoredCurrency();
            if (typeof window.loadInvoiceDetails === 'function') {
                window.loadInvoiceDetails();
            } else {
                const total = computeTotal(baseAmountUSD, config, cur);
                const el    = document.getElementById('grand-total-display');
                if (el) el.textContent = formatCurrencySymbol(total, cur);
            }

            // Also update bank-transfer amount label if visible
            const bankAmountEl = document.getElementById('account-amount-label');
            if (bankAmountEl) {
                const finalTotal = (typeof window.cartTotal === 'number' && window.cartTotal > 0) ? window.cartTotal : computeTotal(baseAmountUSD, config, cur);
                const finalCur   = window.cartCurrency || cur;
                bankAmountEl.textContent = formatCurrencySymbol(finalTotal, finalCur);
            }
        };

        // Listen for currency change
        if (selector) {
            selector.addEventListener('change', e => {
                storeCurrency(e.target.value);
                updateDisplay();
            });
        }

        // Initial render
        updateDisplay();

        // Expose config + helpers globally so the inline script in checkout.html can use them
        window._vestPricingConfig = config;
        window._vestComputeTotal  = computeTotal;
        window._vestFormat        = formatCurrencySymbol;
        window._vestBaseUSD       = baseAmountUSD;

    } catch (err) {
        console.error('Pricing init error:', err);
    }
}

// Expose globally to work without type="module" on file:// protocol
window.initPricing = initPricing;
window.fetchPricingConfig = fetchPricingConfig;
window.computeTotal = computeTotal;
window.formatCurrencySymbol = formatCurrencySymbol;
window.getStoredCurrency = getStoredCurrency;
window.storeCurrency = storeCurrency;
