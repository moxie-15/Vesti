import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VISA_APPLICATION_STEPS, THEME } from '../constants';

const FaqsAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="faq-section" style={{ padding: '80px 20px', backgroundColor: THEME.DARK_CHOCOLATE, color: '#FFF' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
                
                {/* Left Column: Heading & FAQs link */}
                <div>
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '36px', fontWeight: 800, color: '#FFF', margin: '0 0 20px', lineHeight: 1.2 }}>
                        How to apply for your Visa
                    </h2>
                    <Link 
                        to="/faqs" 
                        style={{ 
                            color: '#A3A3A3', 
                            textDecoration: 'none', 
                            fontFamily: "'Inter', sans-serif", 
                            fontSize: '16px', 
                            fontWeight: 600, 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '5px', 
                            transition: 'color 0.2s' 
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#FFF'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#A3A3A3'}
                    >
                        Frequently asked questions <span style={{ fontSize: '18px' }}>↗</span>
                    </Link>
                </div>

                {/* Right Column: Numbered Visa Steps Accordion */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {VISA_APPLICATION_STEPS.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={index} 
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                style={{ 
                                    borderTop: '1px solid rgba(255, 255, 255, 0.15)', 
                                    borderBottom: index === VISA_APPLICATION_STEPS.length - 1 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
                                    padding: '24px 0', 
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                            >
                                <h5 style={{ 
                                    fontFamily: "'Outfit', sans-serif", 
                                    fontSize: '20px', 
                                    fontWeight: 600, 
                                    color: '#FFF', 
                                    margin: 0, 
                                    display: 'flex', 
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span>{item.num} {item.title}</span>
                                    <span style={{ fontSize: '24px', fontWeight: 300, userSelect: 'none' }}>{isOpen ? '−' : '+'}</span>
                                </h5>

                                <div style={{ 
                                    maxHeight: isOpen ? '200px' : '0', 
                                    overflow: 'hidden', 
                                    transition: 'max-height 0.3s ease, opacity 0.3s ease',
                                    opacity: isOpen ? 1 : 0
                                }}>
                                    <p style={{ 
                                        fontFamily: "'Inter', sans-serif", 
                                        fontSize: '15px', 
                                        color: '#A3A3A3', 
                                        margin: '15px 0 0', 
                                        lineHeight: 1.6 
                                    }}>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FaqsAccordion;
