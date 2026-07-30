import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getCountryData } from '../data/countriesData';

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!country) {
        return <Navigate to="/countries" replace />;
    }

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
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




            <main style={{ maxWidth: '1180px', margin: '24px auto 80px', padding: '0 20px' }}>
                
                {/* Flight Centre Style Bento Photo Gallery */}
                <div className="fc-gallery-grid">
                    {/* Main Big Photo */}
                    <div style={{
                        height: '420px',
                        position: 'relative',
                        background: `url('${country.heroMainImg}') center/cover no-repeat`,
                        borderRadius: '20px',
                        overflow: 'hidden'
                    }}>
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
                            boxShadow: '0 4px 12px rgba(0,165,68,0.4)'
                        }}>
                            SAVE UP TO $350* ON ATTORNEY PETITIONS
                        </div>

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
                            fontWeight: '700'
                        }}>
                            📍 {country.name} • {country.locationName}
                        </div>
                    </div>

                    {/* Sub 4 Grid Photos */}
                    <div className="fc-gallery-sub">
                        {(country.galleryImages || [country.heroSideImg, country.heroMainImg, country.heroSideImg, country.heroMainImg]).map((img, idx) => (
                            <div key={idx} style={{ height: '202px', borderRadius: '16px', background: `url('${img}') center/cover no-repeat` }}></div>
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
                            flexWrap: 'wrap',
                            marginBottom: '32px'
                        }}>
                            <div style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #00A544 0%, #030B17 100%)',
                                color: '#FFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '800',
                                fontSize: '24px',
                                flexShrink: 0
                            }}>
                                BO
                            </div>

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

                        {/* Core Visa Services */}
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: '800', color: '#0F172A', marginBottom: '16px' }}>
                            Available Sub-Pathways
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                            {country.services.map((service, i) => (
                                <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
                                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0,165,68,0.1)', color: '#00A544', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            {getIcon(service.icon)}
                                        </svg>
                                    </div>
                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '17px', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>{service.title}</h4>
                                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.5', marginBottom: '16px' }}>{service.desc}</p>
                                    <Link to={`/countries/${id}/clarity`} style={{ fontSize: '13px', fontWeight: '700', color: '#00A544', textDecoration: 'none' }}>
                                        Check Eligibility →
                                    </Link>
                                </div>
                            ))}
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
            </main>
        </div>
    );
};

export default Country;
