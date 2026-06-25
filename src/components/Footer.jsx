import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundColor: '#13110f', color: '#FFF', padding: '80px 0 40px', fontFamily: "'Inter', sans-serif" }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
                    <div style={{ flex: 1, minWidth: '250px', maxWidth: '350px' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0px', textDecoration: 'none', marginBottom: '20px' }}>
                            <svg fill="none" height="42" overflow="visible" viewBox="0 0 34 38" width="38" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33 0C32.7 1.08 32.2 2.06 31.8 3.07C30.4 6.45 28.8 9.83 27.3 13.22C24.5 19.53 21.7 25.84 18.9 32.16C18.7 32.76 18.4 33 17.7 33H10.9C10.2 33 10.2 32.93 10.4 32.37C12.5 27.68 14.5 22.99 16.6 18.3C18.6 13.73 20.6 9.2 22.6 4.61C22.7 4.3 22.9 4.14 23.2 4.02C26.3 2.73 29.4 1.43 32.5 0.14C32.6 0.1 32.7 0.05 32.8 0H33Z" fill="#FFFFFF"></path>
                                <path d="M0 9.4H7.5C8.2 9.4 8.2 9.45 7.9 10.1C6.8 12.82 5.6 15.54 4.4 18.26C4.3 18.42 4.3 18.69 4.1 18.69C3.8 18.68 3.8 18.41 3.7 18.25C2.6 15.67 1.4 13.07 0.3 10.47C0.2 10.26 0.1 10.07 0 9.87V9.4Z" fill="#FFFFFF"></path>
                                <path d="M5.1 21.31C5.1 21.19 5.2 21.06 5.2 20.94C6.5 17.95 7.8 14.99 9.1 12C9.4 11.29 9.7 10.6 10.1 9.89C10.2 9.62 10.4 9.4 10.7 9.28C13.7 7.99 16.8 6.72 19.8 5.45C20 5.38 20.2 5.23 20.3 5.36C20.5 5.53 20.3 5.7 20.2 5.87C17.9 10.99 15.6 16.11 13.4 21.24C12.1 24.22 10.8 27.22 9.6 30.21C9.5 30.36 9.5 30.6 9.3 30.62C9.1 30.64 9 30.38 8.9 30.22C7.7 27.27 6.4 24.32 5.2 21.38C5.1 21.36 5.1 21.34 5.1 21.31Z" fill="#FFFFFF"></path>
                            </svg>
                            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '26px', color: 'white', letterSpacing: '-0.5px', lineHeight: 1, marginLeft: '-6px', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>esti</span>
                        </Link>
                        <p style={{ fontSize: '14px', color: '#A3A3A3', lineHeight: 1.6 }}>The operating system for global talent migration. Built for the ambitious, guided by humans.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
                        <div className="footer-col">
                            <h5 style={{ fontSize: '12px', fontWeight: 700, color: '#FFF', marginBottom: '20px', letterSpacing: '1px' }}>INTELLIGENCE</h5>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <li><Link to="/o1-scoring" className="footer-link">O-1 Scoring</Link></li>
                                <li><Link to="/eb1a-roadmap" className="footer-link">EB-1A Roadmap</Link></li>
                                <li><Link to="/niw-builder" className="footer-link">NIW Builder</Link></li>
                                <li><Link to="/express-entry" className="footer-link">Express Entry</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h5 style={{ fontSize: '12px', fontWeight: 700, color: '#FFF', marginBottom: '20px', letterSpacing: '1px' }}>HUMAN LAYER</h5>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <li><Link to="/expert-network" className="footer-link">Expert Network</Link></li>
                                <li><Link to="/legal-reviews" className="footer-link">Legal Reviews</Link></li>
                                <li><Link to="/concierge" className="footer-link">Concierge</Link></li>
                                <li><Link to="/success-stories" className="footer-link">Success Stories</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h5 style={{ fontSize: '12px', fontWeight: 700, color: '#FFF', marginBottom: '20px', letterSpacing: '1px' }}>COMPANY</h5>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <li><Link to="/methodology" className="footer-link">Methodology</Link></li>
                                <li><Link to="/pricing" className="footer-link">Pricing</Link></li>
                                <li><Link to="/careers" className="footer-link">Careers</Link></li>
                                <li><Link to="/contact" className="footer-link">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h5 style={{ fontSize: '12px', fontWeight: 700, color: '#FFF', marginBottom: '20px', letterSpacing: '1px' }}>LEGAL</h5>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
                                <li><Link to="/aml" className="footer-link">AML</Link></li>
                                <li><Link to="/disclosures" className="footer-link">Disclosures</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
