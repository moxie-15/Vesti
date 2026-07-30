import React, { useState } from 'react';

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqsList = [
        { q: 'How does Vesti AI score my visa eligibility?', a: 'Vesti AI parses over 40+ career signals from your CV and portfolio, comparing your credentials against 100,000+ historical approval benchmarks from USCIS, IRCC, and European consulates.' },
        { q: 'Are Vesti petitions reviewed by licensed immigration attorneys?', a: 'Yes! Vesti pairs AI scoring with our human network of verified immigration attorneys who review, edit, and sign off on all legal petition letters.' },
        { q: 'What is Vesti Proof of Funds?', a: 'Vesti Wallet lets applicants deposit, convert, and generate bank-approved financial capability certificates accepted by embassy visa officers.' },
        { q: 'What happens if my petition is not approved?', a: 'Vesti offers an eligibility score money-back guarantee for candidates who meet all recommended petition criteria outlined during the Clarity assessment.' }
    ];

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <section style={{ backgroundColor: '#030B17', padding: '80px 20px 90px', color: '#FFF', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                        Knowledge Base
                    </span>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '16px' }}>
                        Frequently Asked <span style={{ color: '#00A544' }}>Questions</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                        Everything you need to know about Vesti AI scoring, attorney reviews, proof of funds, and global mobility.
                    </p>
                </div>
            </section>

            <main style={{ maxWidth: '850px', margin: '-40px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {faqsList.map((faq, idx) => (
                            <div
                                key={idx}
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                style={{
                                    border: '1px solid #E2E8F0',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    backgroundColor: openIndex === idx ? 'rgba(0,165,68,0.03)' : '#F8FAFC',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '17px', fontWeight: '700', color: '#0F172A', margin: 0 }}>{faq.q}</h4>
                                    <span style={{ fontSize: '20px', fontWeight: '300', color: '#00A544' }}>{openIndex === idx ? '−' : '+'}</span>
                                </div>
                                {openIndex === idx && (
                                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: '14px 0 0', paddingTop: '14px', borderTop: '1px solid #E2E8F0' }}>
                                        {faq.a}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Faqs;
