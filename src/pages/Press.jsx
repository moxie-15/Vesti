import React from 'react';
import { Link } from 'react-router-dom';

const Press = () => {
    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <section style={{ backgroundColor: '#030B17', padding: '80px 20px 90px', color: '#FFF', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                        Media & Newsroom
                    </span>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '16px' }}>
                        Vesti in the <span style={{ color: '#00A544' }}>Press</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                        Explore official announcements, press releases, media kits, and brand guidelines for journalists and creators.
                    </p>
                </div>
            </section>

            <main style={{ maxWidth: '1000px', margin: '-40px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '36px', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', marginBottom: '32px' }}>
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: '800', color: '#0F172A', marginBottom: '20px' }}>Featured Press Coverage</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                        {[
                            { outlet: 'TechCrunch', title: 'Vesti raises funding to automate extraordinary talent visa petitions.', date: 'July 2026' },
                            { outlet: 'Forbes', title: 'How Vesti AI is solving proof-of-funds verification for global founders.', date: 'June 2026' },
                            { outlet: 'Bloomberg', title: 'Vesti expands global immigration platform across North America & Europe.', date: 'May 2026' }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                                <span style={{ fontSize: '12px', fontWeight: '800', color: '#00A544', textTransform: 'uppercase' }}>{item.outlet}</span>
                                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '17px', fontWeight: '700', color: '#0F172A', margin: '8px 0 12px' }}>{item.title}</h4>
                                <span style={{ fontSize: '12px', color: '#94A3B8' }}>{item.date}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link to="/news" style={{ padding: '14px 28px', backgroundColor: '#00A544', color: '#FFF', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>Visit Full Newsroom →</Link>
                </div>
            </main>
        </div>
    );
};

export default Press;
