const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const CONFIG_PATH = path.join(__dirname, 'data', 'config.json');

app.use(cors());
app.use(express.json());

// Load or initialize config
function getConfig() {
    try {
        if (fs.existsSync(CONFIG_PATH)) {
            const data = fs.readFileSync(CONFIG_PATH, 'utf8');
            return JSON.parse(data);
        }
    } catch (e) {
        console.error("Failed to read config:", e);
    }
    // Fallback default config
    return {
        rateMode: "live",
        rates: {
            USD: 1.0,
            NGN: 1650.0,
            GHS: 15.20,
            KES: 135.00
        },
        markup: 7.5,
        payment: {
            beneficiary: "Vesti Technologies Ltd",
            bankName: "Providus Bank",
            accountNumber: "1023948576"
        }
    };
}

function saveConfig(config) {
    try {
        const dir = path.dirname(CONFIG_PATH);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf8');
        return true;
    } catch (e) {
        console.error("Failed to write config:", e);
        return false;
    }
}

// Config endpoints
app.get('/api/config', (req, res) => {
    res.json(getConfig());
});

app.post('/api/config', (req, res) => {
    const newConfig = req.body;
    
    // Quick validation
    if (!newConfig || typeof newConfig !== 'object') {
        return res.status(400).json({ error: "Invalid configuration format." });
    }
    
    const current = getConfig();
    const updated = {
        rateMode: newConfig.rateMode || current.rateMode,
        rates: {
            ...current.rates,
            ...(newConfig.rates || {})
        },
        markup: typeof newConfig.markup === 'number' ? newConfig.markup : current.markup,
        payment: {
            ...current.payment,
            ...(newConfig.payment || {})
        }
    };
    
    if (saveConfig(updated)) {
        res.json({ success: true, config: updated });
    } else {
        res.status(500).json({ error: "Failed to write configuration to disk." });
    }
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'assets', 'favicon.svg'));
});

// Serve static portal pages from parent directory
app.use(express.static(path.join(__dirname, '..')));

// Start server
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(` Vesti NZ Travel Portal Server running at:`);
    console.log(` http://localhost:${PORT}`);
    console.log(`==================================================`);
});
