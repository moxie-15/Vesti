import React, { useState } from 'react';

const Contact = () => {
    const [sent, setSent] = useState(false);

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <section style={{ backgroundColor: '#030B17', padding: '80px 20px 90px', color: '#FFF', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                        Global Support Network
                    </span>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '16px' }}>
                        Contact <span style={{ color: '#00A544' }}>Vesti</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                        Have questions about your visa petition, proof of funds, or platform features? Our team is available 24/7.
                    </p>
                </div>
            </section>

            <main style={{ maxWidth: '850px', margin: '-40px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
                    {sent ? (
                        <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                            <div style={{ fontSize: '48px', marginBottom: '16px' }}>💬</div>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>Message Received!</h3>
                            <p style={{ color: '#64748B', fontSize: '15px' }}>Thank you for reaching out. A Vesti support representative will reply to your email shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: '800', color: '#0F172A', marginBottom: '24px' }}>Send Us a Message</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                                <div>
                                    <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px' }}>Name</label>
                                    <input type="text" required placeholder="Your name" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', boxSizing: 'border-box' }} />
                                </div>
                                <div>
                                    <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px' }}>Email</label>
                                    <input type="email" required placeholder="your@email.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', boxSizing: 'border-box' }} />
                                </div>
                            </div>
                            <div style={{ marginBottom: '24px' }}>
                                <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px' }}>Message</label>
                                <textarea required rows={5} placeholder="How can Vesti help you today?" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}></textarea>
                            </div>
                            <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#00A544', color: '#FFF', border: 'none', borderRadius: '12px', fontWeight: '800', fontSize: '15px', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,165,68,0.3)' }}>Send Message →</button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Contact;
