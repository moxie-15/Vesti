import React from 'react';
import { Link } from 'react-router-dom';
import FaqsAccordion from './FaqsAccordion';
import { MOBILE_APP_LINKS, FOOTER_NAVIGATION, VESTI_BRAND_INFO, THEME } from '../constants';

const Footer = () => {
    return (
        <>
            {/* 1. Centralized FAQs Section */}
            <FaqsAccordion />

            {/* 2. Mobile App Download Banner */}
            <section className="mobile-app-banner" style={{ backgroundColor: THEME.DARK_CHOCOLATE, padding: '70px 20px', color: '#FFF', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(26px, 5vw, 42px)', fontWeight: 800, margin: '0 0 32px', lineHeight: 1.2 }}>
                        Also available to<br />download on both
                    </h2>
                    <div className="mobile-app-links" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        {MOBILE_APP_LINKS.map((app) => (
                            <a
                                key={app.id}
                                href={app.url}
                                target="_blank"
                                rel="noreferrer"
                                style={{ background: '#FFF', color: THEME.DARK_CHOCOLATE, borderRadius: '10px', padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', transition: 'all 0.3s' }}
                                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                {app.svgType === 'google' ? (
                                    <svg fill="currentColor" viewBox="0 0 512 512" style={{ width: '24px', height: '24px' }}>
                                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                                    </svg>
                                ) : (
                                    <svg fill="currentColor" viewBox="0 0 384 512" style={{ width: '24px', height: '24px' }}>
                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                                    </svg>
                                )}
                                <div style={{ textAlign: 'left' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 500, opacity: 0.8 }}>{app.subtitle}</div>
                                    <div style={{ fontSize: '16px', fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>{app.storeName}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Vesti Footer Navigation Links */}
            <footer className="footer" style={{ backgroundColor: THEME.DARK_CHOCOLATE, color: '#FFF', padding: '50px 0 35px', fontFamily: "'Inter', sans-serif", borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
                        
                        {/* Brand Tagline */}
                        <div style={{ flex: 1, minWidth: '240px', maxWidth: '340px' }}>
                            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0px', textDecoration: 'none', marginBottom: '16px' }}>
                                <svg fill="none" height="38" overflow="visible" viewBox="0 0 34 38" width="34" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33 0C32.7 1.08 32.2 2.06 31.8 3.07C30.4 6.45 28.8 9.83 27.3 13.22C24.5 19.53 21.7 25.84 18.9 32.16C18.7 32.76 18.4 33 17.7 33H10.9C10.2 33 10.2 32.93 10.4 32.37C12.5 27.68 14.5 22.99 16.6 18.3C18.6 13.73 20.6 9.2 22.6 4.61C22.7 4.3 22.9 4.14 23.2 4.02C26.3 2.73 29.4 1.43 32.5 0.14C32.6 0.1 32.7 0.05 32.8 0H33Z" fill="#FFFFFF"></path>
                                    <path d="M0 9.4H7.5C8.2 9.4 8.2 9.45 7.9 10.1C6.8 12.82 5.6 15.54 4.4 18.26C4.3 18.42 4.3 18.69 4.1 18.69C3.8 18.68 3.8 18.41 3.7 18.25C2.6 15.67 1.4 13.07 0.3 10.47C0.2 10.26 0.1 10.07 0 9.87V9.4Z" fill="#FFFFFF"></path>
                                    <path d="M5.1 21.31C5.1 21.19 5.2 21.06 5.2 20.94C6.5 17.95 7.8 14.99 9.1 12C9.4 11.29 9.7 10.6 10.1 9.89C10.2 9.62 10.4 9.4 10.7 9.28C13.7 7.99 16.8 6.72 19.8 5.45C20 5.38 20.2 5.23 20.3 5.36C20.5 5.53 20.3 5.7 20.2 5.87C17.9 10.99 15.6 16.11 13.4 21.24C12.1 24.22 10.8 27.22 9.6 30.21C9.5 30.36 9.5 30.6 9.3 30.62C7.7 27.27 6.4 24.32 5.2 21.38C5.1 21.36 5.1 21.34 5.1 21.31Z" fill="#FFFFFF"></path>
                                </svg>
                                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '24px', color: 'white', letterSpacing: '-0.5px', lineHeight: 1, marginLeft: '-5px' }}>esti</span>
                            </Link>
                            <p style={{ fontSize: '13.5px', color: '#A3A3A3', lineHeight: 1.6, margin: 0 }}>{VESTI_BRAND_INFO.tagline}</p>
                        </div>

                        {/* Responsive Footer Links Grid */}
                        <div className="footer-links-grid">
                            {FOOTER_NAVIGATION.map((column) => (
                                <div key={column.title} className="footer-col">
                                    <h5 style={{ fontSize: '12px', fontWeight: 700, color: '#FFF', marginBottom: '16px', letterSpacing: '1px' }}>{column.title}</h5>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {column.links.map((link) => (
                                            <li key={link.label}>
                                                <Link to={link.to} className="footer-link" style={{ color: '#A3A3A3', textDecoration: 'none', fontSize: '13.5px', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#FFF'} onMouseOut={(e) => e.target.style.color = '#A3A3A3'}>
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                        <p style={{ fontSize: '12.5px', color: '#666', margin: 0 }}>
                            {VESTI_BRAND_INFO.copyrightNotice}
                        </p>
                    </div>
                </div>
            </footer>

            {/* CSS Media Queries for Footer Responsiveness */}
            <style>{`
                .footer-links-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 50px;
                }
                @media (max-width: 768px) {
                    .footer-links-grid {
                        display: grid !important;
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 28px 20px !important;
                        width: 100% !important;
                    }
                }
                @media (max-width: 480px) {
                    .footer-links-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 24px 16px !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Footer;
