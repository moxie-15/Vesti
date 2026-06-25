import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { getCountryData } from '../data/countriesData';
import { Play, Check, ArrowRight, ChevronDown } from 'lucide-react';

const CountryClarity = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const country = getCountryData(id);
    const [activeFaq, setActiveFaq] = useState(0);

    const faqs = [
        { q: "What can I do with Vesti?", a: "With Vesti you get the opportunity to be financially stable in life, whether you choose to move abroad (temporarily/permanently) or stay back at home. On Vesti you can pay for difficult immigration related payments (International Payments) in your local currency, seamlessly." },
        { q: "Is my money secure with Vesti?", a: "Yes, Vesti complies with strict regulatory standards. All banking services and cards are provided in partnership with licensed and regulated financial institutions, including Stripe Payments Company and Celtic Bank (Member FDIC). Your funds are held securely at partner banks, and all transactions are protected by bank-grade SSL encryption and multi-factor authentication." },
        { q: "How do I pay for WES on Vesti?", a: "To pay for WES (World Education Services) or other credential assessments, simply log into the Vesti app, navigate to the 'Services' or 'Payments' tab, select 'Credential Assessment Services', enter your WES reference details, and pay in your local currency. Vesti takes care of the currency conversion and processes the payment to WES on your behalf instantly." },
        { q: "Can I send dollar to someone with Vesti?", a: "Yes! With Vesti's Multi-Currency Wallets, you can convert local currency to USD (and other major currencies) instantly. You can send dollars directly to other Vesti users using their @username (peer-to-peer, free), or initiate a wire transfer to a US or international bank account directly from the app." }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!country) {
        return <Navigate to="/countries" replace />;
    }

    return (
        <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', fontFamily: "'Inter', sans-serif", overflowX: 'hidden' }}>
            {/* Inline Styles for Keyframe Animations */}
            <style>
                {`
                @keyframes blobBreathe {
                    0% { transform: scale(1); border-radius: 48% 52% 60% 40% / 45% 55% 45% 55%; }
                    50% { transform: scale(1.02); border-radius: 40% 60% 50% 50% / 55% 45% 55% 45%; }
                    100% { transform: scale(1); border-radius: 48% 52% 60% 40% / 45% 55% 45% 55%; }
                }
                @keyframes pulseGlow {
                    0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
                    70% { box-shadow: 0 0 0 15px rgba(59, 130, 246, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
                }
                .glass-button {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .glass-button:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
                }
                .video-card {
                    background: #ffffff;
                    border: 1px solid rgba(226, 232, 240, 0.8);
                    border-radius: 24px;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
                }
                .video-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.08);
                    border-color: ${country.primaryColor};
                }
                .faq-item {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px;
                    transition: all 0.3s ease;
                }
                .faq-item:hover {
                    background: rgba(255,255,255,0.06);
                    border-color: rgba(255,255,255,0.15);
                }
                `}
            </style>

            {/* Premium Hero Section */}
            <section style={{ 
                padding: '100px 20px', 
                background: `radial-gradient(circle at 80% 20%, ${country.primaryColor}22 0%, #0A0F1C 60%, #050810 100%)`, 
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Grid Overlay */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }}></div>
                
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center', justifyContent: 'space-between' }}>
                    
                    {/* LEFT: Text content */}
                    <div style={{ flex: '1.2', minWidth: '320px' }}>
                        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: '800', lineHeight: '1.05', marginBottom: '24px', color: 'white', letterSpacing: '-1px' }}>
                            Watch a {country.name}<br/>
                            <span style={{ background: `linear-gradient(135deg, ${country.primaryColor}, #3B82F6)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Pathways Clarity
                            </span>
                        </h1>
                        <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '40px', maxWidth: '580px', fontWeight: '300' }}>
                            Gain deep insights into the {country.name} Pathways framework. Follow up with a personalized 1-on-1 session with our world-class immigration experts to map out your exact timeline and requirements.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '50px' }}>
                            <Link to={`/countries/${id}/pricing`} className="glass-button" style={{ padding: '16px 36px', fontSize: '16px', fontWeight: '700', color: 'white', textDecoration: 'none', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A0F1C' }}>
                                    <Play size={16} fill="currentColor" />
                                </div>
                                Watch Clarity Session
                            </Link>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', opacity: 0.8 }}>
                            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>As featured in</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
                                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: '800', color: 'white', letterSpacing: '-0.5px' }}>techstars<span style={{ color: country.primaryColor }}>_</span></span>
                                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: '700', color: 'white' }}>Bloomberg</span>
                                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '17px', fontWeight: '700', color: 'white' }}>Forbes</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Animated Blob Visual */}
                    <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        <div style={{ position: 'relative', width: '100%', maxWidth: '480px', aspectRatio: '1' }}>
                            {/* Ambient Glow */}
                            <div style={{ position: 'absolute', inset: '-10%', background: country.primaryColor, opacity: 0.15, filter: 'blur(60px)', borderRadius: '50%', zIndex: 1 }}></div>
                            
                            {/* Masked Image */}
                            <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 2, overflow: 'hidden', animation: 'blobBreathe 8s ease-in-out infinite' }}>
                                <img alt={`${country.name} Visa Specialist`} src={country.clarityAdvisorImg} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                            </div>
                            
                            {/* Floating Badge */}
                            <div style={{ position: 'absolute', bottom: '30px', left: '-30px', zIndex: 10, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '12px 20px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: '12px', minWidth: '200px' }}>
                                <div style={{ width: '40px', height: '40px', background: country.primaryColor, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, animation: 'pulseGlow 2s infinite' }}>
                                    <Check size={20} color="white" strokeWidth={3} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Visa Approved</div>
                                    <div style={{ fontSize: '14px', color: '#0f172a', fontWeight: '800', fontFamily: "'Outfit', sans-serif" }}>{country.name} Visa ✓</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Video Library Section */}
            <section style={{ backgroundColor: '#F8FAFC', padding: '120px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: country.primaryColor, fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', background: `${country.primaryColor}15`, padding: '8px 16px', borderRadius: '30px' }}>
                            <Play size={14} fill="currentColor" /> {(country.clarityFlag || '').toUpperCase()} Pathways Library
                        </span>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '42px', fontWeight: '800', color: '#0f172a', marginBottom: '20px', letterSpacing: '-0.5px' }}>
                            Explore Our Video Guides
                        </h2>
                        <p style={{ color: '#475569', fontSize: '18px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
                            Select the clarity session tailored to your pathway. Master the criteria, understand the checklists, and avoid common pitfalls before applying.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                        {country.services && country.services.map((service, index) => (
                            <div key={index} className="video-card" onClick={() => navigate(`/countries/${id}/pricing`)} style={{ cursor: 'pointer', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                
                                {/* Video Thumbnail Area */}
                                <div style={{ position: 'relative', width: '100%', height: '200px', background: `linear-gradient(135deg, ${country.primaryColor}22, #0A0F1C)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {/* EP Badge */}
                                    <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', zIndex: 2 }}>
                                        EP 0{index + 1}
                                    </div>
                                    
                                    {/* Play Button Glass */}
                                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                        <Play size={24} color="white" fill="white" style={{ marginLeft: '4px' }} />
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div style={{ padding: '30px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
                                        {country.name} {service.title}
                                    </h3>
                                    <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', marginBottom: '24px', flex: '1' }}>
                                        {service.desc}
                                    </p>
                                    
                                    <div style={{ background: '#F1F5F9', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a', display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Key Highlights</span>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            {['Eligibility criteria', 'Application process', 'Document checklist'].map((item, i) => (
                                                <li key={i} style={{ fontSize: '14px', color: '#475569', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '500' }}>
                                                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: `${country.primaryColor}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <Check size={10} color={country.primaryColor} strokeWidth={4} />
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <button style={{ backgroundColor: '#0f172a', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'background 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = country.primaryColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0f172a'}>
                                            Watch Session <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium FAQ Section */}
            <section style={{ background: `linear-gradient(135deg, #0A0F1C, #131A2F)`, padding: '120px 20px', color: 'white' }}>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '80px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ flex: '1', minWidth: '320px' }}>
                        <span style={{ display: 'block', color: country.primaryColor, fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Got Questions?</span>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '42px', fontWeight: '800', marginBottom: '24px', color: 'white', lineHeight: '1.1' }}>
                            Some things you may want to know
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                            We've compiled answers to the most common questions our users ask about navigating global mobility and international payments.
                        </p>
                        <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                            Visit Help Center <ArrowRight size={16} />
                        </a>
                    </div>
                    
                    <div style={{ flex: '1.5', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item" style={{ overflow: 'hidden' }}>
                                <div 
                                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '24px', userSelect: 'none' }}
                                >
                                    <h5 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: '700', margin: 0, color: activeFaq === index ? 'white' : 'rgba(255,255,255,0.8)', transition: 'color 0.3s' }}>
                                        {faq.q}
                                    </h5>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: activeFaq === index ? country.primaryColor : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                        <ChevronDown size={18} color="white" />
                                    </div>
                                </div>
                                <div style={{ maxHeight: activeFaq === index ? '300px' : '0', opacity: activeFaq === index ? 1 : 0, overflow: 'hidden', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                                    <div style={{ padding: '0 24px 24px 24px' }}>
                                        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '20px' }}></div>
                                        <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: '1.7' }}>
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium App Download Section */}
            <section style={{ padding: '120px 20px', background: 'linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)', textAlign: 'center' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '48px', fontWeight: '800', color: '#0f172a', marginBottom: '50px', lineHeight: '1.1', letterSpacing: '-1px' }}>
                        Take global mobility<br />everywhere you go.
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                        <a href="https://play.google.com/store/apps/details?id=com.vesti.app&pli=1" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#0f172a', color: 'white', padding: '16px 36px', borderRadius: '20px', textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: '0 15px 35px rgba(15, 23, 42, 0.2)' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 25px 50px rgba(15, 23, 42, 0.3)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(15, 23, 42, 0.2)'; }}>
                            <svg fill="currentColor" viewBox="0 0 512 512" style={{ width: '32px', height: '32px' }}>
                                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                            </svg>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1px', color: '#94a3b8' }}>GET IT ON</div>
                                <div style={{ fontSize: '20px', fontWeight: '800', fontFamily: "'Outfit', sans-serif" }}>Google Play</div>
                            </div>
                        </a>
                        <a href="https://apps.apple.com/ca/app/vesti-move-abroad-pay-bills/id1564444402" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#0f172a', color: 'white', padding: '16px 36px', borderRadius: '20px', textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: '0 15px 35px rgba(15, 23, 42, 0.2)' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 25px 50px rgba(15, 23, 42, 0.3)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(15, 23, 42, 0.2)'; }}>
                            <svg fill="currentColor" viewBox="0 0 384 512" style={{ width: '36px', height: '36px' }}>
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                            </svg>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1px', color: '#94a3b8' }}>DOWNLOAD ON THE</div>
                                <div style={{ fontSize: '20px', fontWeight: '800', fontFamily: "'Outfit', sans-serif" }}>App Store</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CountryClarity;
