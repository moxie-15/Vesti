import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Visas = () => {
    const [search, setSearch] = useState('');

    const visaTypes = [
        { type: 'O-1A Visa', category: 'United States', speed: '15 Days', desc: 'Extraordinary ability in science, business, tech, or education.' },
        { type: 'EB-1A Green Card', category: 'United States', speed: '12 Months', desc: 'Permanent residency self-petition for top 1% global experts.' },
        { type: 'EB-2 NIW', category: 'United States', speed: '8-14 Months', desc: 'National Interest Waiver bypassing labor certification requirements.' },
        { type: 'Express Entry (FSW)', category: 'Canada', speed: '6 Months', desc: 'Points-based permanent residency stream for skilled talent.' },
        { type: 'Subclass 189 PR', category: 'Australia', speed: '8 Months', desc: 'Independent skilled migration visa for in-demand professionals.' },
        { type: 'Tech Talent Passport', category: 'France', speed: '3 Months', desc: 'Fast-tracked European residency for tech founders & engineers.' },
        { type: 'Digital Nomad Visa', category: 'Spain', speed: '2 Months', desc: 'Tax-optimized residency for remote workers & international freelancers.' }
    ];

    const filtered = visaTypes.filter(v => v.type.toLowerCase().includes(search.toLowerCase()) || v.category.toLowerCase().includes(search.toLowerCase()));

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <section style={{ backgroundColor: '#030B17', padding: '80px 20px 90px', color: '#FFF', textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                        Global Mobility Index
                    </span>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '16px' }}>
                        Global <span style={{ color: '#00A544' }}>Visas & Regulatory Directory</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '30px' }}>
                        Search over 40+ regulatory frameworks parsed by Vesti AI to discover your optimal immigration route.
                    </p>
                    <input
                        type="text"
                        placeholder="Search visa type or country (e.g. O-1, Express Entry, Spain)..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        style={{ width: '100%', maxWidth: '560px', padding: '14px 20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFF', fontSize: '14px', outline: 'none' }}
                    />
                </div>
            </section>

            <main style={{ maxWidth: '1180px', margin: '-40px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {filtered.map((v, i) => (
                        <div key={i} style={{ backgroundColor: '#FFF', borderRadius: '20px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <span style={{ fontSize: '12px', fontWeight: '800', color: '#00A544', textTransform: 'uppercase' }}>{v.category}</span>
                                <span style={{ fontSize: '11.5px', fontWeight: '700', backgroundColor: '#F1F5F9', color: '#475569', padding: '4px 10px', borderRadius: '50px' }}>⚡ {v.speed}</span>
                            </div>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>{v.type}</h3>
                            <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.5', marginBottom: '20px' }}>{v.desc}</p>
                            <Link to="/countries" style={{ fontSize: '13px', fontWeight: '700', color: '#00A544', textDecoration: 'none' }}>View Pathway Requirements →</Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Visas;
