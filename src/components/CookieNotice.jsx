import React, { useState, useEffect } from 'react';

const CookieNotice = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isCustomizing, setIsCustomizing] = useState(false);
    const [preferences, setPreferences] = useState({
        essential: true,
        analytics: true,
        marketing: false
    });

    useEffect(() => {
        const consent = localStorage.getItem('vesti_cookie_consent');
        if (consent) return;

        let timer = null;

        const handleAgentOpen = () => {
            if (timer) clearTimeout(timer);
            setIsVisible(false);
        };

        const handleAgentClose = () => {
            if (timer) clearTimeout(timer);
            // Delay 600ms after Bunmi popup is closed for smooth transition
            timer = setTimeout(() => {
                const currentConsent = localStorage.getItem('vesti_cookie_consent');
                if (!currentConsent) {
                    setIsVisible(true);
                }
            }, 600);
        };

        window.addEventListener('vesti_agent_opened', handleAgentOpen);
        window.addEventListener('vesti_agent_closed', handleAgentClose);

        return () => {
            window.removeEventListener('vesti_agent_opened', handleAgentOpen);
            window.removeEventListener('vesti_agent_closed', handleAgentClose);
            if (timer) clearTimeout(timer);
        };
    }, []);

    const handleAcceptAll = () => {
        const data = { essential: true, analytics: true, marketing: true, timestamp: new Date().toISOString() };
        localStorage.setItem('vesti_cookie_consent', JSON.stringify(data));
        setIsVisible(false);
    };

    const handleDeclineAll = () => {
        const data = { essential: true, analytics: false, marketing: false, timestamp: new Date().toISOString() };
        localStorage.setItem('vesti_cookie_consent', JSON.stringify(data));
        setIsVisible(false);
    };

    const handleSavePreferences = () => {
        const data = { ...preferences, timestamp: new Date().toISOString() };
        localStorage.setItem('vesti_cookie_consent', JSON.stringify(data));
        setIsVisible(false);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                left: 'auto',
                zIndex: 99999,
                maxWidth: '360px',
                width: 'calc(100vw - 48px)',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                boxShadow: '0 16px 40px rgba(15, 23, 42, 0.16), 0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                padding: '20px',
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif",
                animation: 'slideUpCookie 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                boxSizing: 'border-box'
            }}
        >
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes slideUpCookie {
                    from { opacity: 0; transform: translateY(25px) scale(0.96); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .cookie-btn-primary {
                    background-color: #0088DD;
                    color: #FFFFFF;
                    border: none;
                    padding: 10px 16px;
                    border-radius: 50px;
                    font-size: 13.5px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    flex: 1;
                    text-align: center;
                }
                .cookie-btn-primary:hover {
                    background-color: #0077C8;
                    box-shadow: 0 4px 12px rgba(0, 136, 221, 0.35);
                }
                .cookie-btn-secondary {
                    background-color: #FFFFFF;
                    color: #1E293B;
                    border: 1px solid #E2E8F0;
                    padding: 10px 16px;
                    border-radius: 50px;
                    font-size: 13.5px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    flex: 1;
                    text-align: center;
                }
                .cookie-btn-secondary:hover {
                    background-color: #F8FAFC;
                    border-color: #CBD5E1;
                }
                .cookie-toggle-checkbox {
                    width: 38px;
                    height: 20px;
                    appearance: none;
                    background-color: #CBD5E1;
                    border-radius: 50px;
                    position: relative;
                    cursor: pointer;
                    outline: none;
                    transition: background-color 0.2s ease;
                }
                .cookie-toggle-checkbox:checked {
                    background-color: #0088DD;
                }
                .cookie-toggle-checkbox::before {
                    content: '';
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background-color: #FFFFFF;
                    top: 3px;
                    left: 3px;
                    transition: transform 0.2s ease;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                }
                .cookie-toggle-checkbox:checked::before {
                    transform: translateX(18px);
                }
                .cookie-toggle-checkbox:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            ` }} />

            {!isCustomizing ? (
                <>
                    {/* Header Row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {/* Bitten Cookie SVG Icon */}
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0088DD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                                <circle cx="8.5" cy="8.5" r="1" fill="#0088DD" />
                                <circle cx="15.5" cy="15.5" r="1" fill="#0088DD" />
                                <circle cx="12" cy="13" r="1" fill="#0088DD" />
                                <circle cx="8" cy="15" r="1" fill="#0088DD" />
                                <circle cx="14" cy="9" r="1" fill="#0088DD" />
                            </svg>
                            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#1E293B' }}>
                                Cookie Notice
                            </h3>
                        </div>

                        {/* Close Icon Button */}
                        <button
                            onClick={handleClose}
                            aria-label="Close Cookie Notice"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px',
                                color: '#64748B',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                transition: 'color 0.2s ease'
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* Notice Paragraph */}
                    <p style={{
                        fontSize: '12.5px',
                        lineHeight: '1.5',
                        color: '#64748B',
                        marginTop: 0,
                        marginBottom: '16px',
                        fontWeight: '400'
                    }}>
                        We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                    </p>

                    {/* Action Buttons Row */}
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
                        <button className="cookie-btn-primary" onClick={handleAcceptAll}>
                            Accept All
                        </button>
                        <button className="cookie-btn-secondary" onClick={handleDeclineAll}>
                            Decline All
                        </button>
                    </div>

                    {/* Customize Preferences Link / Button */}
                    <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                        <button
                            onClick={() => setIsCustomizing(true)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#1E293B',
                                fontSize: '12.5px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '2px 6px'
                            }}
                        >
                            {/* Gear Settings Icon */}
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>
                            Customize Preferences
                        </button>
                    </div>

                    {/* Bottom Legal Links */}
                    <div style={{
                        display: 'flex',
                        justify: 'center',
                        gap: '12px',
                        fontSize: '12px',
                        color: '#64748B'
                    }}>
                        <a href="/privacy" style={{ color: '#64748B', textDecoration: 'underline' }}>Privacy Policy</a>
                        <a href="/cookies" style={{ color: '#64748B', textDecoration: 'underline' }}>Cookie Policy</a>
                    </div>
                </>
            ) : (
                <>
                    {/* Customize Preferences Panel */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#1E293B' }}>
                            Cookie Preferences
                        </h3>
                        <button
                            onClick={() => setIsCustomizing(false)}
                            aria-label="Back to Cookie Notice"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px',
                                color: '#64748B',
                                fontSize: '12px',
                                fontWeight: '600'
                            }}
                        >
                            ← Back
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                        {/* Essential Cookies */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC', padding: '10px 14px', borderRadius: '10px' }}>
                            <div>
                                <span style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'block' }}>Essential Cookies</span>
                                <span style={{ fontSize: '11px', color: '#64748B' }}>Required for site navigation</span>
                            </div>
                            <input type="checkbox" checked disabled className="cookie-toggle-checkbox" />
                        </div>

                        {/* Analytics Cookies */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC', padding: '10px 14px', borderRadius: '10px' }}>
                            <div>
                                <span style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'block' }}>Analytics Cookies</span>
                                <span style={{ fontSize: '11px', color: '#64748B' }}>Help us measure traffic</span>
                            </div>
                            <input
                                type="checkbox"
                                checked={preferences.analytics}
                                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                className="cookie-toggle-checkbox"
                            />
                        </div>

                        {/* Marketing Cookies */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC', padding: '10px 14px', borderRadius: '10px' }}>
                            <div>
                                <span style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'block' }}>Marketing Cookies</span>
                                <span style={{ fontSize: '11px', color: '#64748B' }}>Deliver personalized content</span>
                            </div>
                            <input
                                type="checkbox"
                                checked={preferences.marketing}
                                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                className="cookie-toggle-checkbox"
                            />
                        </div>
                    </div>

                    <button
                        className="cookie-btn-primary"
                        onClick={handleSavePreferences}
                        style={{ width: '100%' }}
                    >
                        Save Preferences
                    </button>
                </>
            )}
        </div>
    );
};

export default CookieNotice;
