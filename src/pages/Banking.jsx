import React from 'react';
import { Link } from 'react-router-dom';

const Banking = () => {
    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <section style={{ backgroundColor: '#030B17', padding: '80px 20px 90px', color: '#FFF', textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                        Vesti Wallet & Proof of Funds
                    </span>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '16px' }}>
                        Multi-Currency <span style={{ color: '#00A544' }}>Global Banking</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '30px' }}>
                        Deposit, convert, and hold USD, CAD, EUR, and GBP with instant bank-approved Proof of Funds statements verified for immigration consulates.
                    </p>
                    <Link to="/signup" style={{ padding: '14px 28px', backgroundColor: '#00A544', color: '#FFF', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', display: 'inline-block', boxShadow: '0 8px 20px rgba(0,165,68,0.3)' }}>
                        Open Vesti Global Account →
                    </Link>
                </div>
            </section>

            <main style={{ maxWidth: '1180px', margin: '-40px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {[
                        { title: 'Embassy-Verified Proof of Funds', desc: 'Generate official financial capability certificates recognized by USCIS, IRCC, and European consulates.' },
                        { title: 'Multi-Currency Wallet', desc: 'Hold and convert funds between NGN, USD, CAD, EUR, and GBP with institutional exchange rates.' },
                        { title: 'Cross-Border Tuition & Visa Payments', desc: 'Pay embassy filing fees, SEVIS fees, and university tuition directly without card limits.' }
                    ].map((feature, i) => (
                        <div key={i} style={{ backgroundColor: '#FFF', borderRadius: '20px', padding: '30px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <div style={{ fontSize: '32px', marginBottom: '14px' }}>💳</div>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>{feature.title}</h3>
                            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Banking;
