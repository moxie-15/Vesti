import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getCountryData } from '../data/countriesData';

// Map icon string names to actual SVG elements
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
        case 'star':
            return <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>;
        case 'map':
            return <><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></>;
        case 'laptop':
            return <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="20" x2="22" y2="20"/></>;
        case 'home':
            return <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></>;
        default:
            return <><circle cx="12" cy="12" r="10"/></>; // Fallback
    }
};

const Country = () => {
    const { id } = useParams();
    const country = getCountryData(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!country) {
        return <Navigate to="/countries" replace />;
    }

    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            <main>
                {/* Awwwards-Style Bento Grid Hero Section */}
                <section style={{ position: 'relative', backgroundColor: '#030B17', padding: '20px 20px 40px', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
                    {/* Ambient Background Glows */}
                    <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 165, 68, 0.15) 0%, rgba(3, 11, 23, 0) 70%)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }}></div>
                    <div style={{ position: 'absolute', bottom: '-150px', right: '-150px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(10, 102, 194, 0.1) 0%, rgba(3, 11, 23, 0) 70%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
                    
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        {/* The Grid Container */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr', gap: '30px', minHeight: '450px' }} className="bento-grid">
                            
                            {/* Main Block */}
                            <div style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', background: `url('${country.heroMainImg}') center/cover no-repeat`, boxShadow: '0 25px 60px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px' }} className="bento-main">
                                {/* Smooth elegant gradient overlay for text readability */}
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(3, 11, 23, 0.95) 0%, rgba(3, 11, 23, 0.4) 50%, rgba(0,0,0,0) 100%)', pointerEvents: 'none', zIndex: 1 }}></div>
                                
                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '8px 16px', borderRadius: '50px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        <span style={{ color: '#FFF', fontWeight: '600', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{country.name} Pathways</span>
                                    </div>
                                    <h1 style={{ fontSize: '4rem', fontWeight: '800', color: 'white', marginBottom: '15px', lineHeight: '1.05', fontFamily: "'Outfit', sans-serif", letterSpacing: '-1.5px' }}>
                                        {country.heroTitle.split(' ').slice(0, -1).join(' ')} <br/>
                                        <span style={{ background: 'linear-gradient(to right, #FFFFFF, #9BA3AF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                                            {country.heroTitle.split(' ').slice(-1)}
                                        </span>
                                    </h1>
                                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', marginBottom: 0, lineHeight: '1.6', maxWidth: '550px', fontWeight: '400', fontFamily: "'Inter', sans-serif" }}>
                                        {country.heroDescription}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Secondary Blocks */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }} className="bento-sidebar">
                                
                                {/* Top Sidebar Block */}
                                <div style={{ flex: 1.3, borderRadius: '40px', overflow: 'hidden', position: 'relative', background: `url('${country.heroSideImg}') center/cover no-repeat`, boxShadow: '0 25px 60px rgba(0,0,0,0.3)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)' }} className="bento-side-top">
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `linear-gradient(to bottom, ${country.primaryColor}66, rgba(0,0,0,0.2))`, transition: 'opacity 0.5s ease' }} className="bento-overlay"></div>
                                    <div style={{ position: 'absolute', top: '30px', right: '30px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)', padding: '10px 20px', borderRadius: '50px', color: 'white', fontWeight: '600', fontSize: '14px', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                                        <svg width="14" height="14" style={{ display: 'inline-block', marginRight: '6px', marginBottom: '-2px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        {country.locationName}
                                    </div>
                                </div>
                                
                                {/* Bottom Sidebar Block (Clean CTA) */}
                                <div style={{ flex: 0.7, borderRadius: '40px', overflow: 'hidden', position: 'relative', background: `linear-gradient(135deg, ${country.primaryColor} 0%, #05162E 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 25px 60px ${country.primaryColor}4D`, border: '1px solid rgba(255,255,255,0.05)', padding: '30px' }} className="bento-side-bottom">
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.3 }}></div>
                                    <div style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div>
                                            <h3 style={{ color: 'white', fontFamily: "'Outfit', sans-serif", fontSize: '1.6rem', fontWeight: '800', margin: '0 0 8px', lineHeight: '1.1' }}>Start Your<br/>Journey</h3>
                                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', margin: 0 }}>AI-powered visa pathways.</p>
                                        </div>
                                        <Link to={`/countries/${id}/clarity`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', background: 'white', borderRadius: '50%', color: country.primaryColor, textDecoration: 'none', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }} className="bento-cta-btn">
                                            <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style dangerouslySetInnerHTML={{__html: `
                    .bento-cta-btn:hover {
                        transform: translateX(10px) scale(1.05) !important;
                        box-shadow: 0 15px 35px rgba(255,255,255,0.2) !important;
                        background: ${country.primaryColor} !important;
                        color: white !important;
                    }
                    .bento-side-top:hover {
                        transform: scale(1.03) !important;
                    }
                    .bento-side-top:hover .bento-overlay {
                        opacity: 0 !important;
                    }
                    @media (max-width: 1024px) {
                        .bento-grid { grid-template-columns: 1fr !important; height: auto !important; }
                        .bento-main { height: 500px !important; }
                        .bento-sidebar { height: 600px !important; gap: 20px !important; }
                    }
                `}} />

                {/* Services Section */}
                <section style={{ padding: '100px 0', backgroundColor: '#f9f5f0' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: '700', color: country.primaryColor, textTransform: 'uppercase', letterSpacing: '2px' }}>What We Offer</span>
                            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '42px', fontWeight: '800', color: '#0f172a', marginTop: '10px', marginBottom: '20px', letterSpacing: '-1px' }}>Our Core Services for {country.name}</h2>
                            <p style={{ color: '#475569', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>Discover tailored mobility pathways designed to simplify your journey and support your global aspirations.</p>
                        </div>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                            {country.services.map((service, i) => (
                                <div key={i} className="service-card" style={{ flex: '1 1 min(350px, 100%)', maxWidth: '400px', display: 'flex', flexDirection: 'column', background: 'white', padding: '40px 30px', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', position: 'relative', overflow: 'hidden', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                                    onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08)'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.04)'; }}
                                >
                                    <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: `${country.primaryColor}15`, color: country.primaryColor, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            {getIcon(service.icon)}
                                        </svg>
                                    </div>
                                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: '700', color: '#0f172a', marginBottom: '15px' }}>{service.title}</h3>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#64748b', lineHeight: '1.6', marginBottom: '25px', flex: 1 }}>{service.desc}</p>
                                    <Link to={`/countries/${id}/clarity`} style={{ fontFamily: "'Inter', sans-serif", fontWeight: '600', color: country.primaryColor, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                        Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
            </main>
        </div>
    );
};

export default Country;
