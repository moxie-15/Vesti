import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <section style={{ backgroundColor: '#030B17', padding: '80px 20px 90px', color: '#FFF', textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                        Our Mission
                    </span>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '16px' }}>
                        About <span style={{ color: '#00A544' }}>Vesti</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '30px' }}>
                        The operating system for global talent migration. Built for the ambitious, guided by AI intelligence and verified legal experts.
                    </p>
                </div>
            </section>

            <main style={{ maxWidth: '1000px', margin: '-40px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', marginBottom: '32px' }}>
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '26px', fontWeight: '800', color: '#0F172A', marginBottom: '16px' }}>Democratizing Global Opportunity</h2>
                    <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                        Vesti was founded with a clear vision: to dismantle geographic barriers for ambitious individuals worldwide. By pairing cutting-edge AI profile parsing with licensed immigration attorneys, Vesti simplifies complex visa petitions, proof-of-funds verification, and cross-border settlement.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', paddingTop: '20px', borderTop: '1px solid #F1F5F9' }}>
                        <div>
                            <div style={{ fontSize: '32px', fontWeight: '900', color: '#00A544', fontFamily: "'Outfit', sans-serif" }}>100k+</div>
                            <span style={{ fontSize: '13px', color: '#64748B', fontWeight: '600' }}>Petitions Parsed</span>
                        </div>
                        <div>
                            <div style={{ fontSize: '32px', fontWeight: '900', color: '#030B17', fontFamily: "'Outfit', sans-serif" }}>42+</div>
                            <span style={{ fontSize: '13px', color: '#64748B', fontWeight: '600' }}>Global Talent Frameworks</span>
                        </div>
                        <div>
                            <div style={{ fontSize: '32px', fontWeight: '900', color: '#00A544', fontFamily: "'Outfit', sans-serif" }}>98.4%</div>
                            <span style={{ fontSize: '13px', color: '#64748B', fontWeight: '600' }}>Verified Approval Rate</span>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link to="/careers" style={{ padding: '14px 28px', backgroundColor: '#030B17', color: '#FFF', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>Join Our Global Team →</Link>
                </div>
            </main>
        </div>
    );
};

export default About;
