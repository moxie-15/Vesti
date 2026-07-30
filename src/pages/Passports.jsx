import React from 'react';
import { Link } from 'react-router-dom';

const Passports = () => {
    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <section style={{ backgroundColor: '#030B17', padding: '80px 20px 90px', color: '#FFF', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                    <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                        Global Citizenship & Residency
                    </span>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '16px', lineHeight: '1.1' }}>
                        Vesti Second <span style={{ color: '#00A544' }}>Passports</span> & CBI
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', maxWidth: '640px', margin: '0 auto 32px', lineHeight: '1.6' }}>
                        Unlock visa-free travel to over 140+ countries with verified Citizenship and Residency by Investment programs tailored for global entrepreneurs.
                    </p>
                    <Link to="/scan-profile" style={{ padding: '14px 28px', backgroundColor: '#00A544', color: '#FFF', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', display: 'inline-block', boxShadow: '0 8px 20px rgba(0,165,68,0.3)' }}>
                        Check Passport Eligibility →
                    </Link>
                </div>
            </section>

            <main style={{ maxWidth: '1180px', margin: '-40px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
                    {[
                        { country: 'Caribbean CBI (St. Kitts, Grenada)', desc: 'Visa-free access to Schengen & UK in 3-4 months.', price: '$100,000 USD' },
                        { country: 'European Golden Visa (Spain, Portugal)', desc: 'Residency by investment with European pathway.', price: '$500,000 EUR' },
                        { country: 'Vanuatu Citizenship by Investment', desc: 'Fastest second passport issued in under 60 days.', price: '$130,000 USD' }
                    ].map((p, i) => (
                        <div key={i} style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '32px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <span style={{ fontSize: '12px', color: '#00A544', fontWeight: '700', textTransform: 'uppercase' }}>Program {i + 1}</span>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: '800', color: '#0F172A', margin: '8px 0' }}>{p.country}</h3>
                            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6', marginBottom: '20px' }}>{p.desc}</p>
                            <div style={{ fontSize: '22px', fontWeight: '900', color: '#030B17', fontFamily: "'Outfit', sans-serif", marginBottom: '16px' }}>Starts from {p.price}</div>
                            <Link to="/contact" style={{ display: 'inline-block', padding: '10px 18px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', color: '#0F172A', fontWeight: '700', fontSize: '13px', textDecoration: 'none' }}>Request Program Details →</Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Passports;
