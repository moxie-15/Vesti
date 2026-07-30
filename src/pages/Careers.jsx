import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
    const positions = [
        { role: 'Senior AI / ML Engineer', team: 'Intelligence Core', loc: 'Remote / US / UK', type: 'Full-time' },
        { role: 'Immigration Legal Ops Lead', team: 'Legal Concierge', loc: 'Remote / Lagos', type: 'Full-time' },
        { role: 'Senior Full-Stack Engineer (React/Vite)', team: 'Product Experience', loc: 'Remote', type: 'Full-time' },
        { role: 'Growth & Global Partnerships Lead', team: 'Expansion', loc: 'Remote / London', type: 'Full-time' }
    ];

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <section style={{ backgroundColor: '#030B17', padding: '80px 20px 90px', color: '#FFF', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                        Build the Future of Mobility
                    </span>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '16px' }}>
                        Careers at <span style={{ color: '#00A544' }}>Vesti</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                        We are a mission-driven team building technology that unlocks global migration for world-class talent.
                    </p>
                </div>
            </section>

            <main style={{ maxWidth: '1000px', margin: '-40px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '36px', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', marginBottom: '32px' }}>
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: '800', color: '#0F172A', marginBottom: '24px' }}>Open Roles</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {positions.map((pos, i) => (
                            <div key={i} style={{ padding: '20px', borderRadius: '16px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                                <div>
                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: '700', color: '#0F172A', margin: '0 0 4px' }}>{pos.role}</h4>
                                    <span style={{ fontSize: '12.5px', color: '#64748B' }}>{pos.team} • {pos.loc} • {pos.type}</span>
                                </div>
                                <Link to="/contact" style={{ padding: '10px 20px', backgroundColor: '#00A544', color: '#FFF', borderRadius: '10px', fontWeight: '700', fontSize: '13px', textDecoration: 'none' }}>Apply Now →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Careers;
