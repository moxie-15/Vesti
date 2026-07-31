import React, { useState } from 'react';

const faqsList = [
    { q: 'How does Vesti AI score my visa eligibility?', a: 'Vesti AI parses over 40+ career signals from your CV and portfolio, comparing your credentials against 100,000+ historical approval benchmarks from USCIS, IRCC, and European consulates.' },
    { q: 'Are Vesti petitions reviewed by licensed immigration attorneys?', a: 'Yes! Vesti pairs AI scoring with our human network of verified immigration attorneys who review, edit, and sign off on all legal petition letters.' },
    { q: 'What is Vesti Proof of Funds?', a: 'Vesti Wallet lets applicants deposit, convert, and generate bank-approved financial capability certificates accepted by embassy visa officers.' },
    { q: 'What happens if my petition is not approved?', a: 'Vesti offers an eligibility score money-back guarantee for candidates who meet all recommended petition criteria outlined during the Clarity assessment.' }
];

const FaqsAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section style={{ backgroundColor: '#030B17', padding: '80px 20px 90px', color: '#FFF' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                        Knowledge Base
                    </span>
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '16px', margin: 0 }}>
                        Frequently Asked <span style={{ color: '#00A544' }}>Questions</span>
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6', marginTop: '14px' }}>
                        Everything you need to know about Vesti AI scoring, attorney reviews, proof of funds, and global mobility.
                    </p>
                </div>

                {/* Accordion */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {faqsList.map((faq, idx) => (
                        <div
                            key={idx}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            style={{
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '16px',
                                padding: '20px 24px',
                                backgroundColor: openIndex === idx ? 'rgba(0,165,68,0.08)' : 'rgba(255,255,255,0.03)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '16px', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>{faq.q}</h4>
                                <span style={{ fontSize: '22px', fontWeight: '300', color: '#00A544', flexShrink: 0, marginLeft: '16px' }}>{openIndex === idx ? '−' : '+'}</span>
                            </div>
                            {openIndex === idx && (
                                <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', margin: '14px 0 0', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                    {faq.a}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqsAccordion;
