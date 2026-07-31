import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCountries } from '../data/countriesData';


const countryCodes = {
    usa: 'US',
    canada: 'CA',
    australia: 'AU',
    france: 'FR',
    spain: 'ES',
    'new-zealand': 'NZ'
};

const countryFlagCodes = {
    usa: 'us',
    canada: 'ca',
    australia: 'au',
    france: 'fr',
    spain: 'es',
    'new-zealand': 'nz'
};

const countrySubtitles = {
    usa: 'Work Visas, EB-1A, O-1A, NIW & Green Cards for Ambitious Professionals',
    canada: 'Express Entry CRS, Provincial Nominee Programs & Study Permits',
    australia: 'Subclass Skilled Visas, Points-Based PR & Regional Opportunities',
    france: 'Tech Talent Passport, Schengen Mobility & Business Residency',
    spain: 'Digital Nomad Tax Exemption & Golden Visa Investor Pathways',
    'new-zealand': 'Skilled Migrant Category, Working Holiday & Essential Skills'
};

const countryDealBadges = {
    usa: 'SAVE UP TO $350',
    canada: 'BONUS 2 FREE REVIEWS',
    australia: 'FAST-TRACK ASSESSMENT',
    france: 'SCHENGEN TAX GUIDE',
    spain: 'DIGITAL NOMAD EXPEDITED',
    'new-zealand': 'BONUS WORKING KIT'
};

const countryDualPricing = {
    usa: { clarity: '$50', full: '$350' },
    canada: { clarity: '$40', full: '$350' },
    australia: { clarity: '$55', full: '$390' },
    france: { clarity: '$50', full: '$350' },
    spain: { clarity: '$45', full: '$320' },
    'new-zealand': { clarity: '$45', full: '$340' }
};

const countryInclusions = {
    usa: ['Attorney Petition Drafting', 'AI Profile Benchmarking', 'USCIS Fee Guidance'],
    canada: ['Express Entry CRS Optimizer', 'PNP Stream Assessment', 'Proof of Funds Issuance'],
    australia: ['Subclass EOI Calculator', 'Skills Assessment Guide', 'Permanent Residency Path'],
    france: ['Tech Visa Endorsement', 'Talent Passport Folder', 'Schengen Mobility'],
    spain: ['Nomad Tax Exemption Guide', 'Consulate Appointment Help', 'NIE Number Setup'],
    'new-zealand': ['Skilled Migrant EOI', 'Working Holiday Support', 'Employer Job Match']
};

const heroThemeSlides = [
    { name: 'New York City, USA', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80', color: 'rgba(0, 165, 68, 0.45)', accent: '#00A544' },
    { name: 'Toronto, Canada', img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1600&q=80', color: 'rgba(6, 182, 212, 0.45)', accent: '#06B6D4' },
    { name: 'Sydney, Australia', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1600&q=80', color: 'rgba(59, 130, 246, 0.45)', accent: '#3B82F6' },
    { name: 'Paris, France', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80', color: 'rgba(168, 85, 247, 0.45)', accent: '#A855F7' },
    { name: 'Madrid, Spain', img: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80', color: 'rgba(245, 158, 11, 0.45)', accent: '#F59E0B' },
    { name: 'London, United Kingdom', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80', color: 'rgba(244, 63, 94, 0.45)', accent: '#F43F5E' },
    { name: 'Tokyo, Japan', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80', color: 'rgba(236, 72, 153, 0.45)', accent: '#EC4899' },
    { name: 'Banff, Canada', img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=80', color: 'rgba(20, 184, 166, 0.45)', accent: '#14B8A6' },
    { name: 'San Francisco, USA', img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80', color: 'rgba(251, 146, 60, 0.45)', accent: '#FB923C' },
    { name: 'Singapore', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80', color: 'rgba(10, 185, 129, 0.45)', accent: '#10B981' },
    { name: 'Barcelona, Spain', img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=80', color: 'rgba(234, 179, 8, 0.45)', accent: '#EAB308' },
    { name: 'Dubai, UAE', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80', color: 'rgba(99, 102, 241, 0.45)', accent: '#6366F1' },
    { name: 'Auckland, New Zealand', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80', color: 'rgba(14, 165, 233, 0.45)', accent: '#0EA5E9' },
    { name: 'Rome, Italy', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80', color: 'rgba(225, 29, 72, 0.45)', accent: '#E11D48' },
    { name: 'Amsterdam, Netherlands', img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1600&q=80', color: 'rgba(139, 92, 246, 0.45)', accent: '#8B5CF6' }
];

const Countries = () => {
    const countries = getAllCountries();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTab, setSelectedTab] = useState('all');
    const [originLocation, setOriginLocation] = useState('Lagos, Nigeria');
    const [targetTimeline, setTargetTimeline] = useState('2026 - 2027');
    const [heroIndex, setHeroIndex] = useState(0);
    const [activeFaq, setActiveFaq] = useState(0);
    const [hoverStates, setHoverStates] = useState({});

    const handleMouseOver = (id) => setHoverStates(prev => ({ ...prev, [id]: true }));
    const handleMouseOut = (id) => setHoverStates(prev => ({ ...prev, [id]: false }));

    // Auto-rotate hero theme gradient & background images every 4 seconds
    React.useEffect(() => {
        const timer = setInterval(() => {
            setHeroIndex(prev => (prev + 1) % heroThemeSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const filteredCountries = countries.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.locationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.services.some(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.desc.toLowerCase().includes(searchQuery.toLowerCase()));

        if (selectedTab === 'all') return matchesSearch;
        if (selectedTab === 'work') return matchesSearch && c.services.some(s => s.title.toLowerCase().includes('work') || s.title.toLowerCase().includes('eb-1a') || s.title.toLowerCase().includes('talent') || s.title.toLowerCase().includes('o-1'));
        if (selectedTab === 'study') return matchesSearch && c.services.some(s => s.title.toLowerCase().includes('student') || s.title.toLowerCase().includes('study'));
        if (selectedTab === 'nomad') return matchesSearch && c.services.some(s => s.title.toLowerCase().includes('nomad') || s.title.toLowerCase().includes('holiday') || s.title.toLowerCase().includes('visitor'));
        if (selectedTab === 'pr') return matchesSearch && c.services.some(s => s.title.toLowerCase().includes('express') || s.title.toLowerCase().includes('subclass') || s.title.toLowerCase().includes('golden') || s.title.toLowerCase().includes('skilled'));
        return matchesSearch;
    });

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <style dangerouslySetInnerHTML={{ __html: `
                .fc-subnav {
                    display: flex;
                    gap: 8px;
                    overflow-x: auto;
                    padding: 22px 20px 18px;
                    background-color: #13110f;
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                }
                .fc-subnav-btn {
                    padding: 10px 20px;
                    border-radius: 50px;
                    font-size: 13.5px;
                    font-weight: 600;
                    border: none;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: all 0.2s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                .fc-subnav-btn.active {
                    background-color: #00A544;
                    color: #FFFFFF;
                    box-shadow: 0 4px 12px rgba(0, 165, 68, 0.35);
                }
                .fc-subnav-btn:not(.active) {
                    background-color: rgba(255, 255, 255, 0.08);
                    color: rgba(255, 255, 255, 0.8);
                }
                .fc-subnav-btn:not(.active):hover {
                    background-color: rgba(255, 255, 255, 0.15);
                    color: #FFF;
                }
                
                .fc-search-widget {
                    max-width: 1180px;
                    margin: -40px auto 40px;
                    background: #FFFFFF;
                    border-radius: 20px;
                    padding: 20px;
                    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    position: relative;
                    z-index: 20;
                }

                .countries-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }
                @media (max-width: 1100px) {
                    .countries-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 740px) {
                    .countries-grid { grid-template-columns: 1fr; }
                }

                .country-card {
                    background-color: #FFFFFF;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease;
                }
                .country-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 22px 45px rgba(0, 0, 0, 0.12);
                }
                .fc-book-btn {
                    background-color: #00A544;
                    color: #FFFFFF;
                    border: none;
                    border-radius: 12px;
                    padding: 10px 18px;
                    font-weight: 700;
                    font-size: 13.5px;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    box-shadow: 0 6px 16px rgba(0, 165, 68, 0.3);
                    transition: all 0.2s ease;
                }
                .fc-book-btn:hover {
                    background-color: #008837;
                    transform: translateY(-1px);
                }

                .deal-badge {
                    position: relative;
                    z-index: 3;
                    background-color: #00A544;
                    color: #FFFFFF;
                    font-size: 10.5px;
                    font-weight: 800;
                    padding: 5px 10px;
                    border-radius: 50px;
                    text-transform: uppercase;
                    letter-spacing: 0.4px;
                    box-shadow: 0 4px 12px rgba(0, 165, 68, 0.4);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 58%;
                }
            ` }} />

            {/* Vesti Dynamic Ambient Slideshow Hero Section */}
            <section style={{
                position: 'relative',
                backgroundColor: '#13110f',
                padding: '40px 20px 95px',
                color: '#FFF',
                overflow: 'hidden',
                minHeight: '400px'
            }}>
                {/* 15 Crossfading Image & Gradient Color Layers */}
                {heroThemeSlides.map((slide, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `radial-gradient(circle at 80% 20%, ${slide.color} 0%, rgba(19, 17, 15, 0.94) 70%), url('${slide.img}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: i === heroIndex ? 1 : 0,
                            transform: i === heroIndex ? 'scale(1.04)' : 'scale(1)',
                            transition: 'opacity 1.5s ease-in-out, transform 6s ease-in-out',
                            zIndex: 1
                        }}
                    />
                ))}

                {/* Dark Deep Chocolate Vignette Overlay for Ultimate Contrast */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(19, 17, 15, 0.92) 0%, rgba(19, 17, 15, 0.76) 55%, rgba(19, 17, 15, 0.5) 100%)',
                    zIndex: 1
                }}></div>

                <div style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                    
                    {/* Category Filter Pills & Dynamic Destination Pill */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                            {[
                                { id: 'all', icon: '✈️', label: 'All Pathways' },
                                { id: 'work', icon: '💼', label: 'Work & EB-1A' },
                                { id: 'study', icon: '🎓', label: 'Student Visas' },
                                { id: 'nomad', icon: '💻', label: 'Digital Nomad' },
                                { id: 'pr', icon: '🛂', label: 'Permanent Residency' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setSelectedTab(tab.id)}
                                    className={`fc-subnav-btn ${selectedTab === tab.id ? 'active' : ''}`}
                                >
                                    <span>{tab.icon}</span>
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Live Destination Theme Pill */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(12px)',
                            padding: '6px 14px',
                            borderRadius: '50px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            fontSize: '12px',
                            fontWeight: '700',
                            color: '#FFF',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                        }}>
                            <span style={{ width: '8px', height: '8px', backgroundColor: heroThemeSlides[heroIndex].accent, borderRadius: '50%', boxShadow: `0 0 8px ${heroThemeSlides[heroIndex].accent}` }}></span>
                            <span>📍 {heroThemeSlides[heroIndex].name}</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px' }}>

                        
                        {/* Hero Text */}
                        <div style={{ flex: '1 1 500px' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                padding: '6px 16px',
                                borderRadius: '50px',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                marginBottom: '16px'
                            }}>
                                <span style={{ width: '8px', height: '8px', backgroundColor: heroThemeSlides[heroIndex].accent, borderRadius: '50%', display: 'inline-block' }}></span>
                                <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFF' }}>
                                    Global Mobility & Visa Engine
                                </span>
                            </div>

                            <h1 style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                                fontWeight: '900',
                                lineHeight: '1.05',
                                letterSpacing: '-1px',
                                marginBottom: '16px'
                            }}>
                                Explore Global Pathways with <span style={{
                                    color: heroThemeSlides[heroIndex].accent,
                                    transition: 'color 1.5s ease-in-out'
                                }}>Vesti</span>
                            </h1>

                            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: '540px', margin: 0, lineHeight: '1.55', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                Compare visa routes, estimate processing timelines, and book AI-assisted petition packages for top destinations.
                            </p>
                        </div>

                        {/* Vesti Styled Promo Deal Badges */}
                        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(16px)',
                                border: `1px solid ${heroThemeSlides[heroIndex].accent}`,
                                borderRadius: '20px',
                                padding: '20px',
                                width: '210px',
                                boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                                transition: 'border-color 1.5s ease-in-out'
                            }}>
                                <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: heroThemeSlides[heroIndex].accent, transition: 'color 1.5s ease-in-out' }}>WORK & EB-1A</span>
                                <div style={{ fontSize: '28px', fontWeight: '900', color: '#FFF', margin: '4px 0 2px', fontFamily: "'Outfit', sans-serif" }}>
                                    FROM <span style={{ color: heroThemeSlides[heroIndex].accent, transition: 'color 1.5s ease-in-out' }}>$50</span>
                                </div>
                                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>USD PER PETITION</span>
                            </div>

                            <div style={{
                                background: 'rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(16px)',
                                border: `1px solid ${heroThemeSlides[heroIndex].accent}`,
                                borderRadius: '20px',
                                padding: '20px',
                                width: '210px',
                                boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                                transition: 'border-color 1.5s ease-in-out'
                            }}>
                                <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: heroThemeSlides[heroIndex].accent, transition: 'color 1.5s ease-in-out' }}>EXPRESS ENTRY</span>
                                <div style={{ fontSize: '28px', fontWeight: '900', color: '#FFF', margin: '4px 0 2px', fontFamily: "'Outfit', sans-serif" }}>
                                    FROM <span style={{ color: heroThemeSlides[heroIndex].accent, transition: 'color 1.5s ease-in-out' }}>$45</span>
                                </div>
                                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>USD PER PROFILE</span>
                            </div>
                        </div>

                    </div>

                    {/* Interactive 15-Slide Indicator Dots */}
                    <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '36px' }}>
                        {heroThemeSlides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setHeroIndex(i)}
                                title={heroThemeSlides[i].name}
                                style={{
                                    width: i === heroIndex ? '24px' : '8px',
                                    height: '8px',
                                    borderRadius: '50px',
                                    backgroundColor: i === heroIndex ? heroThemeSlides[i].accent : 'rgba(255, 255, 255, 0.25)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s ease'
                                }}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* Vesti Floating Search Widget */}
            <div className="fc-search-widget">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '13px', fontWeight: '600', color: '#475569' }}>
                        <span 
                            onClick={() => setSelectedTab('all')} 
                            style={{ 
                                cursor: 'pointer', 
                                color: selectedTab === 'all' ? '#00A544' : '#64748B', 
                                borderBottom: selectedTab === 'all' ? '2px solid #00A544' : 'none', 
                                paddingBottom: '4px',
                                fontWeight: selectedTab === 'all' ? '700' : '600'
                            }}>
                            Immigration Pathways
                        </span>
                        <span 
                            onClick={() => setSelectedTab('study')} 
                            style={{ 
                                cursor: 'pointer', 
                                color: selectedTab === 'study' ? '#00A544' : '#64748B', 
                                borderBottom: selectedTab === 'study' ? '2px solid #00A544' : 'none', 
                                paddingBottom: '4px',
                                fontWeight: selectedTab === 'study' ? '700' : '600'
                            }}>
                            Study Permits
                        </span>
                        <span 
                            onClick={() => setSelectedTab('work')} 
                            style={{ 
                                cursor: 'pointer', 
                                color: selectedTab === 'work' ? '#00A544' : '#64748B', 
                                borderBottom: selectedTab === 'work' ? '2px solid #00A544' : 'none', 
                                paddingBottom: '4px',
                                fontWeight: selectedTab === 'work' ? '700' : '600'
                            }}>
                            Work Visas
                        </span>
                    </div>

                    <Link to="/scan-profile" style={{ fontSize: '13px', fontWeight: '700', color: '#00A544', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        ⚡ Run AI Profile Matcher →
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', alignItems: 'center' }}>
                    
                    <div style={{ backgroundColor: '#F8FAFC', padding: '10px 14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                        <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', display: 'block' }}>Origin / Residence</span>
                        <input
                            type="text"
                            value={originLocation}
                            onChange={e => setOriginLocation(e.target.value)}
                            style={{ border: 'none', background: 'transparent', width: '100%', fontSize: '14px', fontWeight: '700', color: '#0F172A', outline: 'none' }}
                        />
                    </div>

                    <div style={{ backgroundColor: '#F8FAFC', padding: '10px 14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                        <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', display: 'block' }}>Target Destination</span>
                        <input
                            type="text"
                            placeholder="Where to? (e.g. Canada, USA, Spain)..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            style={{ border: 'none', background: 'transparent', width: '100%', fontSize: '14px', fontWeight: '700', color: '#0F172A', outline: 'none' }}
                        />
                    </div>

                    <div style={{ backgroundColor: '#F8FAFC', padding: '10px 14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                        <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', display: 'block' }}>Target Move Window</span>
                        <input
                            type="text"
                            value={targetTimeline}
                            onChange={e => setTargetTimeline(e.target.value)}
                            style={{ border: 'none', background: 'transparent', width: '100%', fontSize: '14px', fontWeight: '700', color: '#0F172A', outline: 'none' }}
                        />
                    </div>

                    <button 
                        onClick={() => {
                            const catalog = document.getElementById('all-countries-catalog');
                            if (catalog) {
                                catalog.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        style={{
                            padding: '16px',
                            backgroundColor: '#00A544',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '12px',
                            fontWeight: '800',
                            fontSize: '15px',
                            cursor: 'pointer',
                            boxShadow: '0 8px 20px rgba(0, 165, 68, 0.3)',
                            transition: 'transform 0.2s ease'
                        }}
                        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
                        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Search Pathways →
                    </button>
                </div>
            </div>

            {/* Vesti Green Fast-Track Deals Banner Row */}
            <section style={{ maxWidth: '1180px', margin: '0 auto 40px', padding: '0 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: '800', color: '#0F172A', margin: 0 }}>
                        Hot Fast-Track Deals for You!
                    </h2>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #CBD5E1', background: '#FFF', cursor: 'pointer', fontWeight: '700' }}>‹</button>
                        <button style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #CBD5E1', background: '#FFF', cursor: 'pointer', fontWeight: '700' }}>›</button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                    {[
                        { title: 'LAGOS TO NEW YORK (O-1 / EB-1A)', price: '$50', speed: 'PREMIUM 15-DAY', img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                        { title: 'LAGOS TO TORONTO (EXPRESS ENTRY)', price: '$45', speed: 'FAST-TRACK FSW', img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                        { title: 'LAGOS TO SYDNEY (SUBCLASS 189)', price: '$60', speed: 'DIRECT PR PATH', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
                    ].map((deal, i) => (
                        <div key={i} style={{
                            height: '140px',
                            borderRadius: '18px',
                            overflow: 'hidden',
                            position: 'relative',
                            background: `url('${deal.img}') center/cover no-repeat`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
                        }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(3, 11, 23, 0.65)' }}></div>
                            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#FFF' }}>
                                <div style={{ backgroundColor: '#00A544', color: '#FFF', padding: '3px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', display: 'inline-block', marginBottom: '6px' }}>
                                    {deal.title}
                                </div>
                                <div style={{ fontSize: '22px', fontWeight: '900', fontFamily: "'Outfit', sans-serif" }}>
                                    PETITION FROM <span style={{ color: '#34D399' }}>{deal.price}</span> <span style={{ fontSize: '12px' }}>USD</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Top Trending Mobility Packages with Vesti Green Badges & Dual Pricing */}
            <main id="all-countries-catalog" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 20px 120px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '28px', fontWeight: '800', color: '#0F172A', margin: 0 }}>
                            Top Trending Visa & Mobility Packages
                        </h2>
                        <p style={{ color: '#64748B', fontSize: '14px', margin: '4px 0 0' }}>
                            Trending destination packages with attorney-drafted petitions, proof of funds, and legal guidance.
                        </p>
                    </div>
                </div>

                {filteredCountries.length === 0 ? (
                    <div style={{
                        background: '#FFF',
                        borderRadius: '20px',
                        padding: '60px 20px',
                        textAlign: 'center',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', color: '#1E293B', marginBottom: '10px' }}>No matching destination found</h3>
                        <p style={{ color: '#64748B', fontSize: '15px' }}>Try searching for general terms like "Canada", "USA", or "Nomad".</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedTab('all'); }}
                            style={{
                                marginTop: '20px',
                                padding: '10px 24px',
                                background: '#030B17',
                                color: '#FFF',
                                border: 'none',
                                borderRadius: '12px',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                        >
                            Reset Search Filters
                        </button>
                    </div>
                ) : (
                    <div className="countries-grid">
                        {filteredCountries.map((country) => {
                            const dualPrice = countryDualPricing[country.id] || { clarity: '$50', full: '$400' };
                            return (
                                <div key={country.id} className="country-card">
                                    {/* Card Header Image with Vesti Green Deal Badge */}
                                    <div style={{
                                        height: '210px',
                                        position: 'relative',
                                        background: `url('${country.heroMainImg}') center/cover no-repeat`,
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'space-between',
                                        padding: '16px'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: 0, left: 0, width: '100%', height: '100%',
                                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.7) 100%)'
                                        }}></div>

                                        {/* Card Top Badges Container (Flex Layout - Zero Overlap) */}
                                        <div style={{
                                            position: 'relative',
                                            zIndex: 3,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: '100%',
                                            gap: '8px'
                                        }}>
                                            {/* Vesti Green Deal Badge */}
                                            <div className="deal-badge" title={countryDealBadges[country.id] || 'SPECIAL OFFER'}>
                                                {countryDealBadges[country.id] || 'SPECIAL OFFER'}
                                            </div>

                                            {/* Country Flag & Name Badge */}
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                background: '#FFFFFF',
                                                padding: '5px 12px',
                                                borderRadius: '50px',
                                                boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
                                                flexShrink: 0
                                            }}>
                                                <img 
                                                    src={`https://flagcdn.com/w40/${(countryFlagCodes[country.id] || 'us')}.png`}
                                                    alt={`${country.name} flag`}
                                                    style={{
                                                        width: '20px',
                                                        height: '14px',
                                                        objectFit: 'cover',
                                                        borderRadius: '3px',
                                                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                                                    }}
                                                />
                                                <span style={{ fontWeight: '700', fontSize: '13px', color: '#0F172A', whiteSpace: 'nowrap' }}>{country.name}</span>
                                            </div>
                                        </div>

                                        {/* Location Label inside Image */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '14px',
                                            left: '16px',
                                            zIndex: 2,
                                            color: '#FFFFFF',
                                            fontSize: '12px',
                                            fontWeight: '600',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            textShadow: '0 1px 3px rgba(0,0,0,0.6)'
                                        }}>
                                            📍 {country.locationName}
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: '19px',
                                            fontWeight: '800',
                                            color: '#0F172A',
                                            marginBottom: '4px'
                                        }}>
                                            {country.name} Visa Pathways
                                        </h3>

                                        <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.4', marginBottom: '14px' }}>
                                            🌙 {country.successRate} Approval Rate • {countrySubtitles[country.id] || country.heroDescription}
                                        </p>

                                        {/* Inclusions Checklist */}
                                        <div style={{
                                            backgroundColor: '#F8FAFC',
                                            padding: '12px',
                                            borderRadius: '12px',
                                            marginBottom: '20px',
                                            border: '1px solid #E2E8F0'
                                        }}>
                                            <span style={{ fontSize: '11px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Package Inclusions:</span>
                                            <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none', fontSize: '12px', color: '#334155' }}>
                                                {(countryInclusions[country.id] || ['Attorney Review', 'AI Profile Benchmarking', 'USCIS/IRCC Guidance']).map((inc, i) => (
                                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                                                        <span style={{ color: '#00A544', fontWeight: '700' }}>✓</span> {inc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Vesti Dual Price Breakdown & Book Action */}
                                        <div style={{
                                            marginTop: 'auto',
                                            paddingTop: '14px',
                                            borderTop: '1px solid #F1F5F9',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}>
                                            <div style={{ display: 'flex', gap: '16px' }}>
                                                <div>
                                                    <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>Clarity from</span>
                                                    <span style={{ fontSize: '16px', fontWeight: '800', color: '#0F172A' }}>{dualPrice.clarity}*</span>
                                                </div>

                                                <div>
                                                    <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>Full File from</span>
                                                    <span style={{ fontSize: '16px', fontWeight: '800', color: country.primaryColor }}>{dualPrice.full}*</span>
                                                </div>
                                            </div>

                                            <Link to={`/countries/${country.id}`} className="fc-book-btn">
                                                Book Now →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Countries;
