import React, { useState } from 'react';

const Consultation = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <section style={{ backgroundColor: '#030B17', padding: '80px 20px 90px', color: '#FFF', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                        1-on-1 Legal Advisory
                    </span>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '16px' }}>
                        Book an Expert <span style={{ color: '#00A544' }}>Immigration Consultation</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                        Speak directly with licensed attorneys and senior Vesti specialists to audit your credentials and structure your petition strategy.
                    </p>
                </div>
            </section>

            <main style={{ maxWidth: '700px', margin: '-40px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.08)', border: '1px solid #E2E8F0' }}>
                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>Consultation Scheduled!</h3>
                            <p style={{ color: '#64748B', fontSize: '15px' }}>Our senior specialist will reach out to you via email within 2 business hours with your meeting link.</p>
                        </div>
                    ) : (
                        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: '800', color: '#0F172A', marginBottom: '24px' }}>Schedule Your 30-Min Session</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '24px' }}>
                                <div>
                                    <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px' }}>Full Name</label>
                                    <input type="text" required placeholder="e.g. Moxie Alex" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', boxSizing: 'border-box' }} />
                                </div>
                                <div>
                                    <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px' }}>Email Address</label>
                                    <input type="email" required placeholder="e.g. moxie@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', boxSizing: 'border-box' }} />
                                </div>
                                <div>
                                    <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px' }}>Target Country & Visa Route</label>
                                    <select style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', backgroundColor: '#FFF', boxSizing: 'border-box' }}>
                                        <option>United States (O-1 / EB-1A / NIW)</option>
                                        <option>Canada (Express Entry / PNP)</option>
                                        <option>Australia (Subclass PR)</option>
                                        <option>UK Global Talent Visa</option>
                                        <option>Spain / France Nomad Visa</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#00A544', color: '#FFF', border: 'none', borderRadius: '12px', fontWeight: '800', fontSize: '15px', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,165,68,0.3)' }}>Confirm Consultation ($50 USD) →</button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Consultation;
