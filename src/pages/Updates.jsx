import React from 'react';
import { Link } from 'react-router-dom';

const Updates = () => {
    const changelog = [
        { version: 'v3.2.0', date: 'July 2026', title: 'Interactive AI Profile Scanner & Matcher', desc: 'Introduced 4-step AI scanning engine for O-1, EB-1A, NIW, and Express Entry.' },
        { version: 'v3.1.0', date: 'June 2026', title: 'Flight Centre Style Package Layout', desc: 'Launched dual-pricing breakdown cards, package inclusions checklist, and assigned specialist cards.' },
        { version: 'v3.0.0', date: 'May 2026', title: 'Multi-Currency Vesti Wallet', desc: 'Added support for instant USD, CAD, EUR, and GBP proof-of-funds generation.' }
    ];

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <section style={{ backgroundColor: '#030B17', padding: '80px 20px 90px', color: '#FFF', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                        Product Changelog
                    </span>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '16px' }}>
                        Vesti Platform <span style={{ color: '#00A544' }}>Updates</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                        Stay up to date with new feature releases, AI intelligence enhancements, and platform improvements.
                    </p>
                </div>
            </section>

            <main style={{ maxWidth: '900px', margin: '-40px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '36px', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {changelog.map((log, i) => (
                            <div key={i} style={{ padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <span style={{ fontSize: '12px', fontWeight: '800', backgroundColor: '#00A544', color: '#FFF', padding: '3px 10px', borderRadius: '50px' }}>{log.version}</span>
                                    <span style={{ fontSize: '12px', color: '#94A3B8' }}>{log.date}</span>
                                </div>
                                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '19px', fontWeight: '700', color: '#0F172A', margin: '8px 0' }}>{log.title}</h3>
                                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>{log.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link to="/" style={{ padding: '14px 28px', backgroundColor: '#030B17', color: '#FFF', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>Back to Home →</Link>
                </div>
            </main>
        </div>
    );
};

export default Updates;
