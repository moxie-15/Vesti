import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link, useSearchParams } from 'react-router-dom';
import { 
    CreditCard, 
    Building2, 
    Wallet, 
    Clock, 
    ShieldCheck, 
    Lock, 
    CheckCircle2, 
    Copy, 
    Check, 
    ArrowLeft, 
    Download, 
    Sparkles, 
    Globe, 
    RefreshCw, 
    FileText, 
    CheckCircle
} from 'lucide-react';
import { getCountryData } from '../data/countriesData';
import { THEME } from '../constants';

const PROCESSING_STEPS = [
    'Initiating bank gateway handshaking...',
    'Encrypting credit credentials via SSL 256-bit...',
    'Checking authorization & fraud risk score...',
    'Confirming payment with partner financial institution...',
    'Finalizing immigration filing order receipt...'
];

const CountryPayment = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const plan = searchParams.get('plan') || 'basic';
    const country = getCountryData(id);

    // Always use Vesti Dark Chocolate Theme
    const brandColor = THEME.DARK_CHOCOLATE;

    // State management
    const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'transfer' | 'wallet'
    const [transferOption, setTransferOption] = useState('bank'); // 'bank' | 'rrr' | 'ussd'
    const [selectedBank, setSelectedBank] = useState('gtbank');
    const [timeLeft, setTimeLeft] = useState(THEME.SESSION_TIMER_SECONDS);
    const [copiedField, setCopiedField] = useState(null);
    
    // Form Inputs
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [saveCard, setSaveCard] = useState(true);

    // Processing & Success State
    const [isProcessing, setIsProcessing] = useState(false);
    const [processingStepIndex, setProcessingStepIndex] = useState(0);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [transactionRef, setTransactionRef] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Timer countdown
    useEffect(() => {
        if (timeLeft <= 0 || paymentSuccess) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, paymentSuccess]);

    if (!country) {
        return <Navigate to="/countries" replace />;
    }

    // Dynamic Plan Resolution Helper
    const getPlanDetails = () => {
        if (plan === 'premium') {
            return {
                name: 'Full Application Support Package',
                category: 'Immigration & Document Filing',
                price: country.pricing?.premium || 499,
                description: 'End-to-end petition packaging, expert guidance, and priority officer filings.'
            };
        } else if (plan === 'wes') {
            return {
                name: 'WES Credential Assessment Fee',
                category: 'Educational Evaluation',
                price: 220,
                description: 'Official credential evaluation & verification payment for international applicants.'
            };
        } else if (plan === 'sevis') {
            return {
                name: 'US Embassy SEVIS / I-901 Fee',
                category: 'Filing & Processing',
                price: 350,
                description: 'Government compliance & SEVIS database registration fee for student/scholar visas.'
            };
        } else {
            return {
                name: 'Expert Clarity Call Consultation',
                category: 'Advisory Consultation',
                price: country.pricing?.basic || 50,
                description: '30-minute 1-on-1 strategic session with a licensed immigration specialist.'
            };
        }
    };

    const planInfo = getPlanDetails();
    const totalPrice = planInfo.price + THEME.DEFAULT_PROCESSING_FEE;

    const formatTimer = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleCopy = (text, fieldName) => {
        navigator.clipboard.writeText(text);
        setCopiedField(fieldName);
        setTimeout(() => setCopiedField(null), 2500);
    };

    const handleCardNumberChange = (e) => {
        let val = e.target.value.replace(/\D/g, '').substring(0, 16);
        val = val.replace(/(.{4})/g, '$1 ').trim();
        setCardNumber(val);
    };

    const handleExpiryChange = (e) => {
        let val = e.target.value.replace(/\D/g, '').substring(0, 4);
        if (val.length >= 3) {
            val = `${val.substring(0, 2)}/${val.substring(2)}`;
        }
        setExpiry(val);
    };

    const detectCardBrand = (num) => {
        const clean = num.replace(/\s+/g, '');
        if (clean.startsWith('4')) return 'VISA';
        if (/^5[1-5]/.test(clean) || /^2[2-7]/.test(clean)) return 'MASTERCARD';
        if (/^3[47]/.test(clean)) return 'AMEX';
        return 'CARD';
    };

    const handleSubmitPayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setProcessingStepIndex(0);

        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep += 1;
            if (currentStep < PROCESSING_STEPS.length) {
                setProcessingStepIndex(currentStep);
            } else {
                clearInterval(interval);
                setIsProcessing(false);
                setPaymentSuccess(true);
                const randomRef = 'VESTI-' + Math.random().toString(36).substring(2, 9).toUpperCase();
                setTransactionRef(randomRef);
            }
        }, 800);
    };

    return (
        <div style={{ backgroundColor: THEME.PAGE_BG_LIGHT, minHeight: '100vh', padding: '20px 20px 40px', fontFamily: "'Inter', sans-serif" }}>
            <div style={{ maxWidth: '1060px', margin: '0 auto' }}>

                {/* Top Navigation & Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                    <Link to={`/countries/${id}/pricing`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: THEME.DARK_CHOCOLATE, textDecoration: 'none', fontWeight: '600', fontSize: '13px' }}>
                        <ArrowLeft size={15} /> Back to Pricing Options
                    </Link>

                    {!paymentSuccess && (
                        <div style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '6px', 
                            background: timeLeft < 120 ? '#fef2f2' : '#ffffff', 
                            color: timeLeft < 120 ? '#dc2626' : THEME.DARK_CHOCOLATE,
                            border: `1px solid ${timeLeft < 120 ? '#fecaca' : '#cbd5e1'}`, 
                            padding: '4px 12px', 
                            borderRadius: '20px', 
                            fontSize: '12px', 
                            fontWeight: '700',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                        }}>
                            <Clock size={14} style={{ animation: timeLeft < 120 ? 'pulse 1s infinite' : 'none' }} />
                            <span>Session Expires: {timeLeft > 0 ? formatTimer(timeLeft) : 'Expired'}</span>
                        </div>
                    )}
                </div>

                {/* Main Content Grid */}
                {!paymentSuccess ? (
                    <div className="payment-grid">
                        
                        {/* LEFT COLUMN: Payment Methods & Input Form */}
                        <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px 28px', boxShadow: '0 15px 35px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0' }}>
                            <div style={{ marginBottom: '18px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: '800', color: THEME.DARK_CHOCOLATE, margin: 0 }}>Secure Checkout</h1>
                                    <span style={{ background: THEME.SSL_BLUE_BG, color: THEME.SSL_BLUE, fontSize: '10px', fontWeight: '700', padding: '2px 7px', borderRadius: '10px', textTransform: 'uppercase' }}>
                                        256-Bit SSL Secured
                                    </span>
                                </div>
                                <p style={{ fontSize: '13px', color: THEME.TEXT_MUTED, margin: 0 }}>Select your preferred payment channel to complete your {country.name} immigration order.</p>
                            </div>

                            {/* Payment Channel Tabs */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
                                <button 
                                    type="button" 
                                    onClick={() => setPaymentMethod('card')}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px',
                                        padding: '12px 8px',
                                        borderRadius: '14px',
                                        border: `2px solid ${paymentMethod === 'card' ? brandColor : '#e2e8f0'}`,
                                        background: paymentMethod === 'card' ? `${brandColor}0D` : '#ffffff',
                                        color: paymentMethod === 'card' ? brandColor : THEME.DARK_CHOCOLATE,
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <CreditCard size={18} />
                                    <span>Card Payment</span>
                                </button>

                                <button 
                                    type="button" 
                                    onClick={() => setPaymentMethod('transfer')}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px',
                                        padding: '12px 8px',
                                        borderRadius: '14px',
                                        border: `2px solid ${paymentMethod === 'transfer' ? brandColor : '#e2e8f0'}`,
                                        background: paymentMethod === 'transfer' ? `${brandColor}0D` : '#ffffff',
                                        color: paymentMethod === 'transfer' ? brandColor : THEME.DARK_CHOCOLATE,
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <Building2 size={18} />
                                    <span>Bank Transfer</span>
                                </button>

                                <button 
                                    type="button" 
                                    onClick={() => setPaymentMethod('wallet')}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px',
                                        padding: '12px 8px',
                                        borderRadius: '14px',
                                        border: `2px solid ${paymentMethod === 'wallet' ? brandColor : '#e2e8f0'}`,
                                        background: paymentMethod === 'wallet' ? `${brandColor}0D` : '#ffffff',
                                        color: paymentMethod === 'wallet' ? brandColor : THEME.DARK_CHOCOLATE,
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <Wallet size={18} />
                                    <span>Vesti Wallet</span>
                                </button>
                            </div>

                            {/* TAB 1: CREDIT CARD FORM */}
                            {paymentMethod === 'card' && (
                                <form onSubmit={handleSubmitPayment}>
                                    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '10px 14px', borderRadius: '10px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Globe size={16} color={THEME.SSL_BLUE} />
                                        <span style={{ fontSize: '11px', color: THEME.DARK_CHOCOLATE, fontWeight: '600' }}>Accepts Visa, Mastercard, American Express, and Discover globally.</span>
                                    </div>

                                    <div style={{ marginBottom: '14px' }}>
                                        <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: THEME.DARK_CHOCOLATE, textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.5px' }}>
                                            Cardholder Full Name
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder="e.g. PAULINA CHIMAROKE" 
                                            required 
                                            value={cardholderName}
                                            onChange={(e) => setCardholderName(e.target.value)}
                                            style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', fontWeight: '600', outline: 'none', background: '#ffffff', color: THEME.DARK_CHOCOLATE, boxSizing: 'border-box' }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '14px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                            <label style={{ fontSize: '11px', fontWeight: '700', color: THEME.DARK_CHOCOLATE, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                                Card Number
                                            </label>
                                            <span style={{ fontSize: '10px', fontWeight: '800', color: THEME.SSL_BLUE, background: THEME.SSL_BLUE_BG, padding: '2px 5px', borderRadius: '4px' }}>
                                                {detectCardBrand(cardNumber)}
                                            </span>
                                        </div>
                                        <div style={{ position: 'relative' }}>
                                            <input 
                                                type="text" 
                                                placeholder="0000 0000 0000 0000" 
                                                required 
                                                value={cardNumber}
                                                onChange={handleCardNumberChange}
                                                maxLength={19}
                                                style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', fontWeight: '600', outline: 'none', background: '#ffffff', color: THEME.DARK_CHOCOLATE, letterSpacing: '1px', boxSizing: 'border-box' }}
                                            />
                                            <Lock size={15} color="#94a3b8" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: THEME.DARK_CHOCOLATE, textTransform: 'uppercase', marginBottom: '4px' }}>
                                                Expiry
                                            </label>
                                            <input 
                                                type="text" 
                                                placeholder="MM/YY" 
                                                required 
                                                value={expiry}
                                                onChange={handleExpiryChange}
                                                maxLength={5}
                                                style={{ width: '100%', padding: '11px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '13px', fontWeight: '600', color: THEME.DARK_CHOCOLATE, textAlign: 'center', outline: 'none', boxSizing: 'border-box' }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: THEME.DARK_CHOCOLATE, textTransform: 'uppercase', marginBottom: '4px' }}>
                                                CVV Code
                                            </label>
                                            <input 
                                                type="password" 
                                                placeholder="123" 
                                                required 
                                                value={cvv}
                                                onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substring(0, 4))}
                                                maxLength={4}
                                                style={{ width: '100%', padding: '11px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '13px', fontWeight: '600', color: THEME.DARK_CHOCOLATE, textAlign: 'center', outline: 'none', boxSizing: 'border-box' }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: THEME.DARK_CHOCOLATE, textTransform: 'uppercase', marginBottom: '4px' }}>
                                                Zip / Postal
                                            </label>
                                            <input 
                                                type="text" 
                                                placeholder="10001" 
                                                required 
                                                value={zipCode}
                                                onChange={(e) => setZipCode(e.target.value)}
                                                style={{ width: '100%', padding: '11px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '13px', fontWeight: '600', color: THEME.DARK_CHOCOLATE, textAlign: 'center', outline: 'none', boxSizing: 'border-box' }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                                        <input 
                                            type="checkbox" 
                                            id="saveCard" 
                                            checked={saveCard}
                                            onChange={(e) => setSaveCard(e.target.checked)}
                                            style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: THEME.DARK_CHOCOLATE }}
                                        />
                                        <label htmlFor="saveCard" style={{ fontSize: '12px', color: THEME.DARK_CHOCOLATE, fontWeight: '500', cursor: 'pointer' }}>
                                            Securely save card details for future Vesti immigration filings
                                        </label>
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={isProcessing || timeLeft <= 0}
                                        style={{ 
                                            width: '100%', 
                                            padding: '14px', 
                                            background: brandColor, 
                                            color: '#ffffff', 
                                            border: 'none', 
                                            borderRadius: '12px', 
                                            fontWeight: '800', 
                                            fontSize: '15px', 
                                            cursor: isProcessing ? 'not-allowed' : 'pointer', 
                                            boxShadow: `0 8px 18px ${brandColor}33`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            opacity: isProcessing ? 0.8 : 1,
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {isProcessing ? (
                                            <>
                                                <RefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} />
                                                <span>Processing Transaction...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Lock size={16} />
                                                <span>Pay ${totalPrice.toFixed(2)} USD</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}

                            {/* TAB 2: BANK TRANSFER & LOCAL CHANNELS */}
                            {paymentMethod === 'transfer' && (
                                <div>
                                    <div style={{ display: 'flex', gap: '6px', background: '#f1f5f9', padding: '4px', borderRadius: '10px', marginBottom: '18px' }}>
                                        <button 
                                            type="button" 
                                            onClick={() => setTransferOption('bank')}
                                            style={{
                                                flex: 1,
                                                padding: '7px 10px',
                                                borderRadius: '7px',
                                                border: 'none',
                                                background: transferOption === 'bank' ? '#ffffff' : 'transparent',
                                                color: transferOption === 'bank' ? THEME.DARK_CHOCOLATE : THEME.TEXT_MUTED,
                                                fontWeight: '700',
                                                fontSize: '11px',
                                                cursor: 'pointer',
                                                boxShadow: transferOption === 'bank' ? '0 2px 5px rgba(0,0,0,0.05)' : 'none'
                                            }}
                                        >
                                            Direct Transfer
                                        </button>
                                        <button 
                                            type="button" 
                                            onClick={() => setTransferOption('rrr')}
                                            style={{
                                                flex: 1,
                                                padding: '7px 10px',
                                                borderRadius: '7px',
                                                border: 'none',
                                                background: transferOption === 'rrr' ? '#ffffff' : 'transparent',
                                                color: transferOption === 'rrr' ? THEME.DARK_CHOCOLATE : THEME.TEXT_MUTED,
                                                fontWeight: '700',
                                                fontSize: '11px',
                                                cursor: 'pointer',
                                                boxShadow: transferOption === 'rrr' ? '0 2px 5px rgba(0,0,0,0.05)' : 'none'
                                            }}
                                        >
                                            Remita RRR
                                        </button>
                                        <button 
                                            type="button" 
                                            onClick={() => setTransferOption('ussd')}
                                            style={{
                                                flex: 1,
                                                padding: '7px 10px',
                                                borderRadius: '7px',
                                                border: 'none',
                                                background: transferOption === 'ussd' ? '#ffffff' : 'transparent',
                                                color: transferOption === 'ussd' ? THEME.DARK_CHOCOLATE : THEME.TEXT_MUTED,
                                                fontWeight: '700',
                                                fontSize: '11px',
                                                cursor: 'pointer',
                                                boxShadow: transferOption === 'ussd' ? '0 2px 5px rgba(0,0,0,0.05)' : 'none'
                                            }}
                                        >
                                            USSD Code
                                        </button>
                                    </div>

                                    {/* Option 1: Direct Bank Transfer */}
                                    {transferOption === 'bank' && (
                                        <div>
                                            <p style={{ fontSize: '12px', color: THEME.TEXT_MUTED, marginBottom: '16px', lineHeight: '1.4' }}>
                                                Transfer the exact total amount to the dedicated partner bank account below using your bank app or online banking portal.
                                            </p>

                                            <div style={{ background: '#f8fafc', border: '1px dashed #cbd5e1', padding: '16px', borderRadius: '14px', marginBottom: '18px' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
                                                    <span style={{ fontSize: '11px', color: THEME.TEXT_MUTED, fontWeight: '600' }}>Bank Name</span>
                                                    <span style={{ fontSize: '13px', color: THEME.DARK_CHOCOLATE, fontWeight: '700' }}>Providus Bank / Vesti Partner</span>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                                    <div>
                                                        <div style={{ fontSize: '11px', color: THEME.TEXT_MUTED, fontWeight: '600' }}>Account Number</div>
                                                        <div style={{ fontSize: '18px', color: THEME.DARK_CHOCOLATE, fontWeight: '800', letterSpacing: '1px' }}>9928410294</div>
                                                    </div>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => handleCopy('9928410294', 'account')}
                                                        style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#ffffff', border: '1px solid #cbd5e1', padding: '6px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', color: copiedField === 'account' ? THEME.SUCCESS_GREEN : THEME.DARK_CHOCOLATE }}
                                                    >
                                                        {copiedField === 'account' ? <Check size={13} /> : <Copy size={13} />}
                                                        <span>{copiedField === 'account' ? 'Copied' : 'Copy'}</span>
                                                    </button>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                                    <span style={{ fontSize: '11px', color: THEME.TEXT_MUTED, fontWeight: '600' }}>Account Name</span>
                                                    <span style={{ fontSize: '12px', color: THEME.DARK_CHOCOLATE, fontWeight: '700' }}>Vesti Technologies Inc - USA</span>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <span style={{ fontSize: '11px', color: THEME.TEXT_MUTED, fontWeight: '600' }}>Reference Code</span>
                                                    <span style={{ fontSize: '12px', color: brandColor, fontWeight: '800' }}>VST-{id.toUpperCase()}-9401</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Option 2: Remita RRR */}
                                    {transferOption === 'rrr' && (
                                        <div>
                                            <p style={{ fontSize: '12px', color: THEME.TEXT_MUTED, marginBottom: '16px' }}>
                                                Use this Remita Retrieval Reference (RRR) to pay via Remita online portal or at any commercial bank branch.
                                            </p>

                                            <div style={{ background: '#fff7ed', border: '1px solid #ffedd5', padding: '16px', borderRadius: '14px', marginBottom: '18px' }}>
                                                <div style={{ fontSize: '10px', color: '#c2410c', fontWeight: '800', textTransform: 'uppercase', marginBottom: '3px' }}>Remita RRR Code</div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div style={{ fontSize: '19px', fontWeight: '900', color: '#9a3412', letterSpacing: '1.5px' }}>3819-2049-1829</div>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => handleCopy('381920491829', 'rrr')}
                                                        style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#ffffff', border: '1px solid #fdba74', padding: '6px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', color: copiedField === 'rrr' ? THEME.SUCCESS_GREEN : '#9a3412' }}
                                                    >
                                                        {copiedField === 'rrr' ? <Check size={13} /> : <Copy size={13} />}
                                                        <span>{copiedField === 'rrr' ? 'Copied' : 'Copy Code'}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Option 3: USSD Code */}
                                    {transferOption === 'ussd' && (
                                        <div>
                                            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: THEME.DARK_CHOCOLATE, textTransform: 'uppercase', marginBottom: '6px' }}>
                                                Select Your Bank for USSD String
                                            </label>
                                            <select 
                                                value={selectedBank}
                                                onChange={(e) => setSelectedBank(e.target.value)}
                                                style={{ width: '100%', padding: '11px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '13px', fontWeight: '600', color: THEME.DARK_CHOCOLATE, marginBottom: '16px', outline: 'none' }}
                                            >
                                                <option value="gtbank">Guaranty Trust Bank (*737*)</option>
                                                <option value="zenith">Zenith Bank (*966*)</option>
                                                <option value="access">Access Bank (*901*)</option>
                                                <option value="firstbank">First Bank (*894*)</option>
                                                <option value="uba">UBA (*919*)</option>
                                            </select>

                                            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '16px', borderRadius: '14px', marginBottom: '18px' }}>
                                                <div style={{ fontSize: '10px', color: '#15803d', fontWeight: '800', textTransform: 'uppercase', marginBottom: '3px' }}>Dial USSD Code on Mobile</div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div style={{ fontSize: '18px', fontWeight: '900', color: '#166534', letterSpacing: '1px' }}>
                                                        {selectedBank === 'gtbank' && '*737*000*3819#'}
                                                        {selectedBank === 'zenith' && '*966*000*3819#'}
                                                        {selectedBank === 'access' && '*901*000*3819#'}
                                                        {selectedBank === 'firstbank' && '*894*000*3819#'}
                                                        {selectedBank === 'uba' && '*919*000*3819#'}
                                                    </div>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => handleCopy('*737*000*3819#', 'ussd')}
                                                        style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#ffffff', border: '1px solid #86efac', padding: '6px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', color: copiedField === 'ussd' ? THEME.SUCCESS_GREEN : '#166534' }}
                                                    >
                                                        {copiedField === 'ussd' ? <Check size={13} /> : <Copy size={13} />}
                                                        <span>{copiedField === 'ussd' ? 'Copied' : 'Copy USSD'}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Transfer Verification Button */}
                                    <button 
                                        type="button" 
                                        onClick={handleSubmitPayment}
                                        disabled={isProcessing}
                                        style={{ 
                                            width: '100%', 
                                            padding: '14px', 
                                            background: brandColor, 
                                            color: '#ffffff', 
                                            border: 'none', 
                                            borderRadius: '12px', 
                                            fontWeight: '800', 
                                            fontSize: '15px', 
                                            cursor: 'pointer',
                                            boxShadow: `0 8px 18px ${brandColor}33`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px'
                                        }}
                                    >
                                        {isProcessing ? (
                                            <>
                                                <RefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} />
                                                <span>Verifying Transfer Confirmation...</span>
                                            </>
                                        ) : (
                                            <>
                                                <CheckCircle2 size={16} />
                                                <span>I Have Completed Payment</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}

                            {/* TAB 3: VESTI WALLET */}
                            {paymentMethod === 'wallet' && (
                                <div>
                                    <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '18px', borderRadius: '16px', marginBottom: '18px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                            <div>
                                                <div style={{ fontSize: '11px', color: THEME.TEXT_MUTED, fontWeight: '700', textTransform: 'uppercase' }}>Vesti USD Wallet Balance</div>
                                                <div style={{ fontSize: '24px', fontWeight: '900', color: THEME.DARK_CHOCOLATE }}>$1,250.00 <span style={{ fontSize: '12px', color: THEME.SUCCESS_GREEN, fontWeight: '700' }}>Available</span></div>
                                            </div>
                                            <div style={{ background: THEME.SUCCESS_GREEN_BG, padding: '8px', borderRadius: '10px' }}>
                                                <Wallet size={24} color={THEME.SUCCESS_GREEN} />
                                            </div>
                                        </div>

                                        <div style={{ fontSize: '12px', color: '#475569', borderTop: '1px solid #e2e8f0', paddingTop: '10px', marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                                            <span>Deduction for Order:</span>
                                            <span style={{ fontWeight: '800', color: THEME.DARK_CHOCOLATE }}>-${totalPrice.toFixed(2)} USD</span>
                                        </div>
                                        <div style={{ fontSize: '12px', color: '#475569', display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                                            <span>Remaining Balance:</span>
                                            <span style={{ fontWeight: '800', color: THEME.SUCCESS_GREEN }}>${(1250.00 - totalPrice).toFixed(2)} USD</span>
                                        </div>
                                    </div>

                                    <button 
                                        type="button" 
                                        onClick={handleSubmitPayment}
                                        disabled={isProcessing}
                                        style={{ 
                                            width: '100%', 
                                            padding: '14px', 
                                            background: brandColor, 
                                            color: '#ffffff', 
                                            border: 'none', 
                                            borderRadius: '12px', 
                                            fontWeight: '800', 
                                            fontSize: '15px', 
                                            cursor: 'pointer',
                                            boxShadow: `0 8px 18px ${brandColor}33`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px'
                                        }}
                                    >
                                        {isProcessing ? (
                                            <>
                                                <RefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} />
                                                <span>Authorizing Wallet Debiting...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Sparkles size={16} />
                                                <span>Pay 1-Click with Vesti Wallet</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}

                            {/* Processing Progress Loader Overlay Bar */}
                            {isProcessing && (
                                <div style={{ marginTop: '16px', background: '#f0f9ff', border: '1px solid #bae6fd', padding: '14px', borderRadius: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '700', color: THEME.SSL_BLUE, marginBottom: '6px' }}>
                                        <RefreshCw size={15} style={{ animation: 'spin 1s linear infinite' }} />
                                        <span>{PROCESSING_STEPS[processingStepIndex]}</span>
                                    </div>
                                    <div style={{ background: THEME.SSL_BLUE_BG, height: '5px', borderRadius: '3px', overflow: 'hidden' }}>
                                        <div style={{ 
                                            background: brandColor, 
                                            height: '100%', 
                                            width: `${((processingStepIndex + 1) / PROCESSING_STEPS.length) * 100}%`,
                                            transition: 'width 0.4s ease'
                                        }} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* RIGHT COLUMN: Order Summary & Guarantee */}
                        <div>
                            {/* Order Summary Card */}
                            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '22px 24px', boxShadow: '0 15px 35px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
                                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '17px', fontWeight: '800', color: THEME.DARK_CHOCOLATE, marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9' }}>
                                    Order Summary
                                </h3>

                                <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: `${brandColor}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <FileText size={20} color={brandColor} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: '800', color: THEME.DARK_CHOCOLATE, marginBottom: '2px' }}>{planInfo.name}</div>
                                        <div style={{ fontSize: '11px', color: THEME.TEXT_MUTED, fontWeight: '600' }}>{country.name} Pathway Service</div>
                                    </div>
                                </div>

                                <p style={{ fontSize: '11px', color: THEME.DARK_CHOCOLATE, lineHeight: '1.4', background: '#f8fafc', padding: '10px', borderRadius: '8px', marginBottom: '16px' }}>
                                    {planInfo.description}
                                </p>

                                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '14px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: THEME.TEXT_MUTED, marginBottom: '8px' }}>
                                        <span>Subtotal Service Fee</span>
                                        <span style={{ fontWeight: '700', color: THEME.DARK_CHOCOLATE }}>${planInfo.price.toFixed(2)}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: THEME.TEXT_MUTED, marginBottom: '12px' }}>
                                        <span>Gateway & Processing</span>
                                        <span style={{ fontWeight: '700', color: THEME.DARK_CHOCOLATE }}>${THEME.DEFAULT_PROCESSING_FEE.toFixed(2)}</span>
                                    </div>
                                    
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px dashed #e2e8f0', paddingTop: '14px', marginTop: '8px' }}>
                                        <span style={{ fontSize: '15px', fontWeight: '800', color: THEME.DARK_CHOCOLATE }}>Total Amount Due</span>
                                        <span style={{ fontSize: '22px', fontWeight: '900', color: brandColor }}>
                                            ${totalPrice.toFixed(2)} <span style={{ fontSize: '11px', color: THEME.TEXT_MUTED, fontWeight: '600' }}>USD</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Bank Grade Guarantee Badge */}
                            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '16px', border: '1px solid #e2e8f0', display: 'flex', gap: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.02)' }}>
                                <ShieldCheck size={28} color={brandColor} style={{ flexShrink: 0 }} />
                                <div>
                                    <h4 style={{ fontSize: '12px', fontWeight: '800', color: THEME.DARK_CHOCOLATE, margin: '0 0 3px 0' }}>Vesti Trust & FDIC Compliance</h4>
                                    <p style={{ fontSize: '11px', color: THEME.TEXT_MUTED, margin: 0, lineHeight: '1.4' }}>
                                        All banking services & payment processing are conducted via regulated partners including Stripe Payments and FDIC-member partner banks.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    /* SUCCESS STATE RECEIPT VIEW */
                    <div style={{ maxWidth: '600px', margin: '0 auto', background: '#ffffff', borderRadius: '20px', padding: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                        
                        <div style={{ width: '64px', height: '64px', background: THEME.SUCCESS_GREEN_BG, color: '#15803d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                            <CheckCircle size={36} />
                        </div>

                        <span style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', fontSize: '11px', fontWeight: '800', padding: '3px 10px', borderRadius: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Payment Completed Successfully
                        </span>

                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '28px', fontWeight: '900', color: THEME.DARK_CHOCOLATE, marginTop: '10px', marginBottom: '6px' }}>
                            Thank You for Your Order!
                        </h2>
                        <p style={{ fontSize: '14px', color: THEME.TEXT_MUTED, marginBottom: '24px' }}>
                            Your filing reference for <strong>{country.name}</strong> immigration services has been logged.
                        </p>

                        {/* Printable Receipt Card */}
                        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', textAlign: 'left', marginBottom: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px', marginBottom: '14px' }}>
                                <div>
                                    <div style={{ fontSize: '10px', color: THEME.TEXT_MUTED, fontWeight: '700', textTransform: 'uppercase' }}>Transaction Reference</div>
                                    <div style={{ fontSize: '15px', fontWeight: '800', color: THEME.DARK_CHOCOLATE }}>{transactionRef}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '10px', color: THEME.TEXT_MUTED, fontWeight: '700', textTransform: 'uppercase' }}>Date & Time</div>
                                    <div style={{ fontSize: '12px', fontWeight: '700', color: THEME.DARK_CHOCOLATE }}>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                                <div>
                                    <div style={{ fontSize: '10px', color: THEME.TEXT_MUTED, fontWeight: '700', textTransform: 'uppercase' }}>Service Selected</div>
                                    <div style={{ fontSize: '12px', fontWeight: '700', color: THEME.DARK_CHOCOLATE }}>{planInfo.name}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '10px', color: THEME.TEXT_MUTED, fontWeight: '700', textTransform: 'uppercase' }}>Payment Method</div>
                                    <div style={{ fontSize: '12px', fontWeight: '700', color: THEME.DARK_CHOCOLATE, textTransform: 'capitalize' }}>{paymentMethod} Gateway</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px dashed #cbd5e1', paddingTop: '12px', marginTop: '12px' }}>
                                <span style={{ fontSize: '13px', fontWeight: '800', color: THEME.DARK_CHOCOLATE }}>Total Amount Paid</span>
                                <span style={{ fontSize: '20px', fontWeight: '900', color: THEME.SUCCESS_GREEN }}>${totalPrice.toFixed(2)} USD</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <button 
                                type="button" 
                                onClick={() => window.print()}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: '#ffffff',
                                    border: '1px solid #cbd5e1',
                                    borderRadius: '10px',
                                    fontWeight: '700',
                                    fontSize: '13px',
                                    color: THEME.DARK_CHOCOLATE,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '6px'
                                }}
                            >
                                <Download size={15} /> Download Official PDF Receipt
                            </button>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                <Link 
                                    to={`/countries/${id}`} 
                                    style={{
                                        padding: '12px',
                                        background: '#f1f5f9',
                                        borderRadius: '10px',
                                        fontWeight: '700',
                                        fontSize: '13px',
                                        color: THEME.DARK_CHOCOLATE,
                                        textDecoration: 'none',
                                        textAlign: 'center'
                                    }}
                                >
                                    Back to {country.name} Overview
                                </Link>

                                <Link 
                                    to="/legal" 
                                    style={{
                                        padding: '12px',
                                        background: brandColor,
                                        borderRadius: '10px',
                                        fontWeight: '700',
                                        fontSize: '13px',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        textAlign: 'center'
                                    }}
                                >
                                    Track Filing Progress
                                </Link>
                            </div>
                        </div>

                    </div>
                )}

            </div>
            
            {/* CSS Keyframes & Responsive Media Queries */}
            <style>{`
                .payment-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
                    gap: 24px;
                    align-items: start;
                }
                @media (max-width: 850px) {
                    .payment-grid {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </div>
    );
};

export default CountryPayment;
