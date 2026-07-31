import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getCountryData } from '../data/countriesData';
import Footer from '../components/Footer';

const getIcon = (iconName) => {
    switch (iconName) {
        case 'student':
            return <><path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5"/></>;
        case 'work':
            return <><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/></>;
        case 'award':
            return <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>;
        case 'business':
            return <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>;
        case 'plane':
            return <><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5-4 4-3-1-2 1 4 4 1-2-1-3 4-4 5 6l1.2-.7c.4-.2.7-.6.6-1.1z"/></>;
        default:
            return <><circle cx="12" cy="12" r="10"/></>;
    }
};

const Country = () => {
    const { id } = useParams();
    const country = getCountryData(id);
    const [applicants, setApplicants] = useState('1 Candidate');
    const [processingSpeed, setProcessingSpeed] = useState('Standard (3-6 Months)');
    const [activeFaq, setActiveFaq] = useState(0);
    const [hoverStates, setHoverStates] = useState({});

    const handleMouseOver = (idKey) => setHoverStates(prev => ({ ...prev, [idKey]: true }));
    const handleMouseOut = (idKey) => setHoverStates(prev => ({ ...prev, [idKey]: false }));

    const galleryList = country?.galleryImages && country.galleryImages.length > 0 
        ? country.galleryImages 
        : [country.heroMainImg, country.heroSideImg];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Auto rotate gallery images every 3.5 seconds across all 10+ country photos
    useEffect(() => {
        if (!galleryList || galleryList.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentSlideIndex(prev => (prev + 1) % galleryList.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [galleryList]);

    if (!country) {
        return <Navigate to="/countries" replace />;
    }

    const mainImage = galleryList[currentSlideIndex];
    const subImages = [1, 2, 3, 4].map(offset => {
        const idx = (currentSlideIndex + offset) % galleryList.length;
        return { url: galleryList[idx], index: idx };
    });

    const nextSlide = () => {
        setCurrentSlideIndex(prev => (prev + 1) % galleryList.length);
    };

    const prevSlide = () => {
        setCurrentSlideIndex(prev => (prev - 1 + galleryList.length) % galleryList.length);
    };

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif", paddingTop: '24px' }}>
            <style dangerouslySetInnerHTML={{ __html: `
                .fc-gallery-grid {
                    display: grid;
                    grid-template-columns: 1.4fr 1fr;
                    gap: 16px;
                    border-radius: 24px;
                    overflow: hidden;
                    margin-bottom: 36px;
                }
                @media (max-width: 900px) {
                    .fc-gallery-grid { grid-template-columns: 1fr; }
                }
                .fc-gallery-sub {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                }
                .fc-gallery-sub-item {
                    height: 202px;
                    border-radius: 16px;
                    cursor: pointer;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .fc-gallery-sub-item:hover {
                    transform: scale(1.02);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                }
                .fc-gallery-nav-btn {
                    background: rgba(15, 23, 42, 0.65);
                    color: #FFF;
                    border: none;
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    backdrop-filter: blur(6px);
                    transition: all 0.2s ease;
                    font-size: 16px;
                }
                .fc-gallery-nav-btn:hover {
                    background: #00A544;
                    transform: scale(1.1);
                }
                .fc-split-container {
                    display: grid;
                    grid-template-columns: 1.4fr 0.8fr;
                    gap: 36px;
                    align-items: start;
                }
                @media (max-width: 990px) {
                    .fc-split-container { grid-template-columns: 1fr; }
                }
                .fc-sticky-card {
                    position: sticky;
                    top: 100px;
                    background: #FFFFFF;
                    border-radius: 24px;
                    padding: 28px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
                    border: 1px solid #E2E8F0;
                }
                .fc-btn-primary {
                    background-color: #00A544;
                    color: #FFFFFF;
                    border: none;
                    border-radius: 12px;
                    padding: 14px 24px;
                    font-weight: 700;
                    font-size: 15px;
                    width: 100%;
                    cursor: pointer;
                    text-align: center;
                    text-decoration: none;
                    display: block;
                    box-shadow: 0 8px 20px rgba(0, 165, 68, 0.3);
                    transition: all 0.2s ease;
                }
                .fc-btn-primary:hover {
                    background-color: #008837;
                    transform: translateY(-1px);
                }
                .fc-btn-secondary {
                    background-color: #F8FAFC;
                    color: #0F172A;
                    border: 1px solid #E2E8F0;
                    border-radius: 12px;
                    padding: 12px 24px;
                    font-weight: 700;
                    font-size: 14px;
                    width: 100%;
                    cursor: pointer;
                    text-align: center;
                    text-decoration: none;
                    display: block;
                    margin-top: 10px;
                    transition: all 0.2s ease;
                }
                .fc-btn-secondary:hover {
                    background-color: #F1F5F9;
                }
            ` }} />




            <main style={{ maxWidth: '1180px', margin: '40px auto 80px', padding: '0 20px' }}>
                
                {/* Dynamic Bento Slideshow Gallery (10+ Images per Country) */}
                <div className="fc-gallery-grid">
                    {/* Main Big Featured Photo */}
                    <div style={{
                        height: '420px',
                        position: 'relative',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        backgroundColor: '#0F172A'
                    }}>
                        <img 
                            src={mainImage} 
                            alt={country.name}
                            onError={(e) => {
                                e.currentTarget.src = country.heroMainImg;
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                position: 'absolute',
                                inset: 0,
                                transition: 'opacity 0.4s ease-in-out'
                            }}
                        />

                        {/* Top Promo Tag */}
                        <div style={{
                            position: 'absolute',
                            top: '16px',
                            left: '16px',
                            backgroundColor: '#00A544',
                            color: '#FFF',
                            fontSize: '12px',
                            fontWeight: '800',
                            padding: '6px 14px',
                            borderRadius: '50px',
                            boxShadow: '0 4px 12px rgba(0,165,68,0.4)',
                            zIndex: 2
                        }}>
                            SAVE UP TO $350* ON ATTORNEY PETITIONS
                        </div>

                        {/* Navigation Arrows */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '16px',
                            right: '16px',
                            transform: 'translateY(-50%)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            pointerEvents: 'none',
                            zIndex: 2
                        }}>
                            <button onClick={prevSlide} className="fc-gallery-nav-btn" style={{ pointerEvents: 'auto' }}>❮</button>
                            <button onClick={nextSlide} className="fc-gallery-nav-btn" style={{ pointerEvents: 'auto' }}>❯</button>
                        </div>

                        {/* Bottom Location Label */}
                        <div style={{
                            position: 'absolute',
                            bottom: '16px',
                            left: '16px',
                            background: 'rgba(3, 11, 23, 0.75)',
                            backdropFilter: 'blur(8px)',
                            color: '#FFF',
                            padding: '8px 16px',
                            borderRadius: '50px',
                            fontSize: '13px',
                            fontWeight: '700',
                            zIndex: 2
                        }}>
                            📍 {country.name} • {country.locationName}
                        </div>
                    </div>

                    {/* Sub 4 Rotating Grid Photos */}
                    <div className="fc-gallery-sub">
                        {subImages.map((sub, idx) => (
                            <div 
                                key={idx} 
                                className="fc-gallery-sub-item"
                                onClick={() => setCurrentSlideIndex(sub.index)}
                                title="Click to expand this photo"
                                style={{ overflow: 'hidden', position: 'relative' }}
                            >
                                <img 
                                    src={sub.url} 
                                    alt={`${country.name} photo ${sub.index + 1}`}
                                    onError={(e) => {
                                        e.currentTarget.src = country.heroMainImg;
                                    }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                        borderRadius: '16px'
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                </div>

                {/* Flight Centre Split Details Layout */}
                <div className="fc-split-container">
                    
                    {/* Left Column: Package Details & Inclusions */}
                    <div>
                        <span style={{ fontSize: '13px', fontWeight: '700', color: '#00A544', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Official Visa & Settlement Package
                        </span>

                        <h1 style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                            fontWeight: '800',
                            color: '#0F172A',
                            margin: '8px 0 12px',
                            lineHeight: '1.1'
                        }}>
                            {country.heroTitle}
                        </h1>

                        <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6', marginBottom: '28px' }}>
                            🌙 Processing Window: <strong>3 - 6 Months</strong> • Target Cities: <strong>{country.locationName} & Regional Hubs</strong> • Success Rate: <strong style={{ color: '#00A544' }}>{country.successRate}</strong>
                        </p>

                        {/* Summary Narrative */}
                        <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '20px', border: '1px solid #E2E8F0', marginBottom: '32px' }}>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                                Pathway Overview
                            </h3>
                            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                                {country.heroDescription} Vesti combines AI credential benchmarking with verified immigration attorneys to ensure your petition meets all regulatory criteria.
                            </p>
                        </div>

                        {/* Inclusions Checklist Grid (Flight Centre 2-Column Checklist) */}
                        <div style={{ backgroundColor: '#FFFFFF', padding: '28px', borderRadius: '20px', border: '1px solid #E2E8F0', marginBottom: '32px' }}>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: '800', color: '#0F172A', marginBottom: '20px' }}>
                                What’s Included in This Package
                            </h3>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                {[
                                    { title: 'Attorney Petition Review & Filing', desc: 'Custom petition letter drafted by licensed immigration attorneys.' },
                                    { title: 'AI Profile Benchmarking', desc: 'Parses 40+ career signals against historical approval benchmarks.' },
                                    { title: 'BONUS Proof of Funds Setup', desc: 'Direct wallet conversion & bank-ready financial capability certificates.' },
                                    { title: 'Consulate Appointment Help', desc: 'Step-by-step guidance for interview preparation & DS-160/IRCC forms.' },
                                    { title: 'Job & Settlement Assistance', desc: 'Local ecosystem connections, bank account opening, and tax guides.' },
                                    { title: 'Daily Case Tracking', desc: 'Real-time petition updates delivered via Vesti mobile & web dashboard.' }
                                ].map((inc, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(0,165,68,0.1)', color: '#00A544', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>✓</div>
                                        <div>
                                            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#0F172A', margin: '0 0 4px' }}>{inc.title}</h4>
                                            <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: '1.4' }}>{inc.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Specialist Advisor Card (Flight Centre "Your Centre for Travel" Card) */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            padding: '24px',
                            borderRadius: '20px',
                            border: '1px solid #E2E8F0',
                            display: 'flex',
                            gap: '20px',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <img 
                                src="/assets/expert-bunmi-BGTZe3Yq.jpg" 
                                alt="Bunmi Opadoyin" 
                                style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '2px solid #00A544',
                                    boxShadow: '0 4px 12px rgba(0, 165, 68, 0.2)',
                                    flexShrink: 0
                                }}
                            />

                            <div style={{ flex: 1, minWidth: '220px' }}>
                                <span style={{ fontSize: '11px', color: '#00A544', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Assigned Vesti Specialist</span>
                                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: '700', color: '#0F172A', margin: '2px 0 6px' }}>
                                    Bunmi Opadoyin — Senior Visa Advisor
                                </h4>
                                <p style={{ fontSize: '13px', color: '#64748B', margin: 0, lineHeight: '1.4' }}>
                                    Specializes in {country.name} immigration petitions with over 5+ years of verified candidate success.
                                </p>
                            </div>

                            <Link
                                to={`/countries/${id}/clarity`}
                                style={{
                                    padding: '10px 18px',
                                    backgroundColor: '#0F172A',
                                    color: '#FFFFFF',
                                    borderRadius: '10px',
                                    fontWeight: '700',
                                    fontSize: '13px',
                                    textDecoration: 'none'
                                }}
                            >
                                Book Advisory Call
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Flight Centre Sticky Booking Sidebar Card */}
                    <div className="fc-sticky-card">
                        <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '16px', marginBottom: '20px' }}>
                            <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', display: 'block' }}>Target Move Window</span>
                            <span style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A' }}>For petitions filed Q3 2026 - 2027</span>
                        </div>

                        {/* Selectors */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                            <div style={{ backgroundColor: '#F8FAFC', padding: '10px 12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                                <span style={{ fontSize: '10px', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', display: 'block' }}>Applicants</span>
                                <select
                                    value={applicants}
                                    onChange={e => setApplicants(e.target.value)}
                                    style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '13px', fontWeight: '700', color: '#0F172A', outline: 'none' }}
                                >
                                    <option value="1 Candidate">1 Candidate</option>
                                    <option value="Family / 2+">Family / 2+</option>
                                </select>
                            </div>

                            <div style={{ backgroundColor: '#F8FAFC', padding: '10px 12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                                <span style={{ fontSize: '10px', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', display: 'block' }}>Processing</span>
                                <select
                                    value={processingSpeed}
                                    onChange={e => setProcessingSpeed(e.target.value)}
                                    style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '12px', fontWeight: '700', color: '#0F172A', outline: 'none' }}
                                >
                                    <option value="Standard (3-6 Months)">Standard</option>
                                    <option value="Fast-Track (30 Days)">Fast-Track</option>
                                </select>
                            </div>
                        </div>

                        {/* Pricing Box */}
                        <div style={{ backgroundColor: 'rgba(0,165,68,0.05)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(0,165,68,0.2)', marginBottom: '20px', textAlign: 'center' }}>
                            <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '600', display: 'block' }}>Clarity Assessment from</span>
                            <div style={{ fontSize: '32px', fontWeight: '900', color: '#00A544', fontFamily: "'Outfit', sans-serif", margin: '2px 0' }}>
                                ${country.pricing.basic} <span style={{ fontSize: '14px', color: '#0F172A' }}>USD</span>
                            </div>
                            <span style={{ fontSize: '12px', color: '#475569', fontWeight: '600' }}>Full Petition Package: <strong>${country.pricing.premium} USD</strong></span>
                        </div>

                        {/* Action CTAs */}
                        <Link to={`/countries/${id}/payment`} className="fc-btn-primary">
                            Book Package Now →
                        </Link>

                        <Link to={`/countries/${id}/clarity`} className="fc-btn-secondary">
                            Enquire & Get Free Consultation
                        </Link>

                        {/* Essential Info Checklist */}
                        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #F1F5F9', fontSize: '12px', color: '#64748B', lineHeight: '1.7' }}>
                            <span style={{ fontWeight: '700', color: '#0F172A', display: 'block', marginBottom: '4px' }}>Essential Pathway Info:</span>
                            <div>• Deal offer valid through 31 August 2026</div>
                            <div>• Full official USCIS/IRCC fee guide included</div>
                            <div>• 100% money-back eligibility score guarantee</div>
                        </div>
                    </div>

                </div>

                {/* Available Sub-Pathways - Full Container Width */}
                <div style={{ marginTop: '48px' }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: '800', color: '#0F172A', marginBottom: '20px' }}>
                        Available Sub-Pathways
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        {country.services.map((service, i) => (
                            <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '18px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0,165,68,0.1)', color: '#00A544', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            {getIcon(service.icon)}
                                        </svg>
                                    </div>
                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '17px', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>{service.title}</h4>
                                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.5', marginBottom: '16px' }}>{service.desc}</p>
                                </div>
                                <Link to={`/countries/${id}/clarity`} style={{ fontSize: '13px', fontWeight: '700', color: '#00A544', textDecoration: 'none' }}>
                                    Check Eligibility →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* FAQ Section */}
            <section id="faqs" className="faq-section" style={{ padding: '80px 20px', backgroundColor: '#13110f', color: '#FFF' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
                    <div>
                        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '36px', fontWeight: 800, color: '#FFF', margin: '0 0 20px' }}>How to apply for your Visa</h2>
                        <a href="#faqs" style={{ color: '#A3A3A3', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#FFF'} onMouseOut={(e) => e.target.style.color = '#A3A3A3'}>
                            Frequently asked questions <span style={{ fontSize: '18px' }}>↗</span>
                        </a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {[
                            {
                                num: '1.',
                                title: 'Apply Online',
                                text: 'Fill out our secure online visa application form in minutes. Our system ensures all data meets consulate standards to avoid rejections.'
                            },
                            {
                                num: '2.',
                                title: 'Submit Documents',
                                text: 'Upload scans of your passport and required documents. Our expert visa consultants will review them for accuracy before submission.'
                            },
                            {
                                num: '3.',
                                title: 'Receive Visa',
                                text: 'Once approved by the embassy, we will securely deliver your travel documents and visa straight to your email or doorstep.'
                            }
                        ].map((item, index) => {
                            const isOpen = activeFaq === index;
                            return (
                                <div 
                                    key={index} 
                                    onClick={() => setActiveFaq(isOpen ? null : index)}
                                    style={{ 
                                        borderTop: '1px solid rgba(255, 255, 255, 0.15)', 
                                        borderBottom: index === 2 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
                                        padding: '24px 0', 
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    <h5 style={{ 
                                        fontFamily: 'Outfit, sans-serif', 
                                        fontSize: '20px', 
                                        fontWeight: 600, 
                                        color: '#FFF', 
                                        margin: 0, 
                                        display: 'flex', 
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <span>{item.num} {item.title}</span>
                                        <span style={{ fontSize: '24px', fontWeight: 300 }}>{isOpen ? '−' : '+'}</span>
                                    </h5>
                                    <div style={{ 
                                        maxHeight: isOpen ? '200px' : '0', 
                                        overflow: 'hidden', 
                                        transition: 'max-height 0.3s ease, opacity 0.3s ease',
                                        opacity: isOpen ? 1 : 0
                                    }}>
                                        <p style={{ 
                                            fontFamily: 'Inter, sans-serif', 
                                            fontSize: '15px', 
                                            color: 'rgba(255, 255, 255, 0.7)', 
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

            {/* App Download Section */}
            <section className="app-download-section" style={{ backgroundColor: '#13110f', padding: '100px 20px', color: '#FFF' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '42px', fontWeight: 800, margin: '0 0 40px', lineHeight: 1.2 }}>Also available to<br/>download on both</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <a href="https://play.google.com/store/apps/details?id=com.vesti.app&pli=1" target="_blank" rel="noreferrer" onMouseOut={() => handleMouseOut('app-android')} onMouseOver={() => handleMouseOver('app-android')} style={{ background: '#FFF', color: '#13110f', borderRadius: '10px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', transition: 'all 0.3s', transform: hoverStates['app-android'] ? 'translateY(-3px)' : 'translateY(0)', boxShadow: hoverStates['app-android'] ? '0 10px 20px rgba(0,0,0,0.2)' : 'none' }}>
                            <svg fill="currentColor" viewBox="0 0 512 512" style={{ width: '24px', height: '24px' }}><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '10px', fontWeight: 500, opacity: 0.8 }}>AVAILABLE ON</div>
                                <div style={{ fontSize: '16px', fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>Google Play</div>
                            </div>
                        </a>
                        <a href="https://apps.apple.com/ca/app/vesti-move-abroad-pay-bills/id1564444402" target="_blank" rel="noreferrer" onMouseOut={() => handleMouseOut('app-ios')} onMouseOver={() => handleMouseOver('app-ios')} style={{ background: '#FFF', color: '#13110f', borderRadius: '10px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', transition: 'all 0.3s', transform: hoverStates['app-ios'] ? 'translateY(-3px)' : 'translateY(0)', boxShadow: hoverStates['app-ios'] ? '0 10px 20px rgba(0,0,0,0.2)' : 'none' }}>
                            <svg fill="currentColor" viewBox="0 0 384 512" style={{ width: '24px', height: '24px' }}><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '10px', fontWeight: 500, opacity: 0.8 }}>AVAILABLE ON</div>
                                <div style={{ fontSize: '16px', fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>Apple Store</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Country;
