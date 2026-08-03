import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isLegalMode = location.pathname.startsWith('/legal');
    const isMigrationMode = location.pathname.startsWith('/countries');

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Lock body scrolling smoothly when mobile menu is active
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { label: 'Home', to: '/', subtitle: 'Vesti platform overview' },
        { label: 'Matters', to: '/scan-profile', subtitle: 'Visa & petition applications' },
        { label: 'Zyra', to: '/zyra', subtitle: 'AI document intelligence' },
        { label: 'Experts', to: '/scan-profile', subtitle: 'Licensed immigration advisors' }
    ];

    return (
        <>
            {/* Main Desktop & Mobile Header Bar */}
            <nav className="navbar" id="navbar" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10000, backgroundColor: '#13110f', height: '78px', borderBottom: 'none' }}>
                <div className="nav-container" style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 50px', height: '100%', boxSizing: 'border-box' }}>
                    
                    {/* Left Brand Area: Vesti Logo + Mode Switcher */}
                    <div className="brand-group" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                        <Link className="logo-area" to="/" style={{ display: 'flex', alignItems: 'center', gap: '0px', textDecoration: 'none' }}>
                            <svg fill="none" height="38" overflow="visible" viewBox="0 0 34 38" width="34" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33 0C32.7 1.08 32.2 2.06 31.8 3.07C30.4 6.45 28.8 9.83 27.3 13.22C24.5 19.53 21.7 25.84 18.9 32.16C18.7 32.76 18.4 33 17.7 33H10.9C10.2 33 10.2 32.93 10.4 32.37C12.5 27.68 14.5 22.99 16.6 18.3C18.6 13.73 20.6 9.2 22.6 4.61C22.7 4.3 22.9 4.14 23.2 4.02C26.3 2.73 29.4 1.43 32.5 0.14C32.6 0.1 32.7 0.05 32.8 0H33Z" fill="#FFFFFF"></path>
                                <path d="M0 9.4H7.5C8.2 9.4 8.2 9.45 7.9 10.1C6.8 12.82 5.6 15.54 4.4 18.26C4.3 18.42 4.3 18.69 4.1 18.69C3.8 18.68 3.8 18.41 3.7 18.25C2.6 15.67 1.4 13.07 0.3 10.47C0.2 10.26 0.1 10.07 0 9.87V9.4Z" fill="#FFFFFF"></path>
                                <path d="M5.1 21.31C5.1 21.19 5.2 21.06 5.2 20.94C6.5 17.95 7.8 14.99 9.1 12C9.4 11.29 9.7 10.6 10.1 9.89C10.2 9.62 10.4 9.4 10.7 9.28C13.7 7.99 16.8 6.72 19.8 5.45C20 5.38 20.2 5.23 20.3 5.36C20.5 5.53 20.3 5.7 20.2 5.87C17.9 10.99 15.6 16.11 13.4 21.24C12.1 24.22 10.8 27.22 9.6 30.21C9.5 30.36 9.5 30.6 9.3 30.62C9.1 30.64 9 30.38 8.9 30.22C7.7 27.27 6.4 24.32 5.2 21.38C5.1 21.36 5.1 21.34 5.1 21.31Z" fill="#FFFFFF"></path>
                            </svg>
                            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '26px', color: 'white', letterSpacing: '-0.5px', lineHeight: 1, marginLeft: '-6px' }}>esti</span>
                        </Link>

                        {/* Mode Switcher Pill */}
                        <div className="mode-pill-container" style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            borderRadius: '50px',
                            padding: '4px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            fontSize: '13px',
                            fontWeight: '600'
                        }}>
                            <Link
                                to="/legal"
                                style={{
                                    backgroundColor: isLegalMode ? '#FFFFFF' : 'transparent',
                                    color: isLegalMode ? '#0F172A' : 'rgba(255, 255, 255, 0.75)',
                                    padding: '6px 16px',
                                    borderRadius: '50px',
                                    fontWeight: isLegalMode ? '700' : '600',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                Legal
                            </Link>
                            <Link
                                to="/countries"
                                style={{
                                    backgroundColor: isMigrationMode ? '#FFFFFF' : 'transparent',
                                    color: isMigrationMode ? '#0F172A' : 'rgba(255, 255, 255, 0.75)',
                                    padding: '6px 16px',
                                    borderRadius: '50px',
                                    fontWeight: isMigrationMode ? '700' : '600',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                Migration
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Menu Links */}
                    <ul className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
                        <li>
                            <Link to="/" style={{ fontSize: '15px', fontWeight: '600', color: '#FFF', textDecoration: 'none' }}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/scan-profile" style={{ fontSize: '15px', fontWeight: '600', color: '#FFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                ⚖ Matters
                            </Link>
                        </li>
                        <li>
                            <Link to="/zyra" style={{ fontSize: '15px', fontWeight: '600', color: '#FFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                🗡 Zyra
                            </Link>
                        </li>
                        <li>
                            <Link to="/scan-profile" style={{ fontSize: '15px', fontWeight: '600', color: '#FFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                👥 Experts
                            </Link>
                        </li>
                    </ul>

                    {/* Desktop CTA Action Buttons */}
                    <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                        <Link to="/login" style={{ color: '#FFF', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>Sign In</Link>
                        <Link to="/signup" style={{ background: '#FFF', color: '#13110f', padding: '10px 20px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>Create an account</Link>
                    </div>

                    {/* Mobile Hamburger / Close Button */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Mobile Navigation"
                        className="mobile-toggle-btn"
                        style={{
                            background: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '10px',
                            color: '#FFFFFF',
                            cursor: 'pointer',
                            display: 'none',
                            padding: '8px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                        }}
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* FULL-SCREEN PREMIUM MOBILE OVERLAY */}
            {mobileMenuOpen && (
                <div 
                    style={{
                        position: 'fixed',
                        top: '60px',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100vw',
                        height: 'calc(100vh - 60px)',
                        background: '#13110f',
                        zIndex: 99999,
                        padding: '24px 20px 36px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        overflowY: 'auto',
                        boxSizing: 'border-box'
                    }}
                >
                    {/* Navigation Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {navLinks.map((item) => (
                            <Link 
                                key={item.label}
                                to={item.to} 
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'space-between', 
                                    padding: '16px 8px', 
                                    color: '#FFFFFF', 
                                    textDecoration: 'none', 
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <div>
                                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                                        {item.label}
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>
                                        {item.subtitle}
                                    </div>
                                </div>
                                <ArrowRight size={18} color="rgba(255,255,255,0.4)" />
                            </Link>
                        ))}
                    </div>

                    {/* Bottom CTA Action Buttons (Matching Official Vesti Theme) */}
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                            <Link 
                                to="/signup" 
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ 
                                    width: '100%', 
                                    padding: '14px', 
                                    textAlign: 'center', 
                                    background: '#FFFFFF', 
                                    color: '#13110f', 
                                    borderRadius: '10px', 
                                    textDecoration: 'none', 
                                    fontWeight: '800', 
                                    fontSize: '15px',
                                    fontFamily: "'Outfit', sans-serif",
                                    display: 'block',
                                    boxSizing: 'border-box',
                                    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.15)'
                                }}
                            >
                                Create an account
                            </Link>

                            <Link 
                                to="/login" 
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ 
                                    width: '100%', 
                                    padding: '14px', 
                                    textAlign: 'center', 
                                    background: 'transparent', 
                                    border: '1px solid rgba(255, 255, 255, 0.25)',
                                    color: '#FFFFFF', 
                                    borderRadius: '10px', 
                                    textDecoration: 'none', 
                                    fontWeight: '700', 
                                    fontSize: '15px',
                                    display: 'block',
                                    boxSizing: 'border-box'
                                }}
                            >
                                Sign In
                            </Link>
                        </div>

                        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                                Vesti Migration OS • Bank-grade 256-bit encryption
                            </p>
                        </div>
                    </div>

                </div>
            )}

            {/* CSS Media Queries for Desktop & Mobile Navigation */}
            <style>{`
                @media (max-width: 900px) {
                    #navbar.navbar {
                        height: 60px !important;
                    }
                    #navbar .nav-container {
                        padding: 0 16px !important;
                    }
                    .brand-group {
                        gap: 12px !important;
                    }
                    .mode-pill-container {
                        fontSize: 11px !important;
                        padding: 2px !important;
                    }
                    .mode-pill-container a {
                        padding: 4px 10px !important;
                    }
                    .desktop-menu, .desktop-cta {
                        display: none !important;
                    }
                    .mobile-toggle-btn {
                        display: flex !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
