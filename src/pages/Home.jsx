import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const masonry1Data = [
        { img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'Know the rules. Skip the queues.' },
        { img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'Discover the heart of Paris' },
        { img: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'Sail through Venice canals' },
        { img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'Business expansion in Dubai' },
        { img: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'Breathtaking Swiss Alps' }
    ];
    
    const masonry2Data = [
        { img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'One place for all travel requirements.' },
        { img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'Relax on tropical beaches' },
        { img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'European mobility options' },
        { img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'Explore the United States' },
        { img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'Work & live in London' }
    ];
    
    const masonry3Data = [
        { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'Global opportunities await' },
        { img: 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'Global visas made easy' },
        { img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'Pack your bags, we handle the rest' },
        { img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'Relocate to Canada fast' },
        { img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', text: 'New life in Australia' }
    ];

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prev) => (prev + 1) % masonry1Data.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const [hoverStates, setHoverStates] = useState({});
    const [activeFaq, setActiveFaq] = useState(0);

    const handleMouseOver = (id) => setHoverStates(prev => ({ ...prev, [id]: true }));
    const handleMouseOut = (id) => setHoverStates(prev => ({ ...prev, [id]: false }));

    return (
        <div style={{ backgroundColor: '#f9f5f0' }}>
            {/* Split Hero Section */}
            <section className="split-hero" style={{ background: '#f9f5f0', padding: '80px 50px', display: 'flex', gap: '60px', maxWidth: '1400px', margin: '0 auto', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="hero-text" style={{ flex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '6px 16px', borderRadius: '30px', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(5px)', border: '1px solid rgba(0, 165, 68, 0.2)', marginBottom: '20px', position: 'relative', overflow: 'hidden', height: '28px', minWidth: '280px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                        <span style={{ width: '8px', height: '8px', background: '#13110f', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px #13110f', flexShrink: 0 }}></span>
                        <div id="approval-ticker" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#4A5568', whiteSpace: 'nowrap' }}>
                            12 New NIW Approvals Today
                        </div>
                    </div>
                    <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '52px', fontWeight: 800, color: '#13110f', lineHeight: 1.1, margin: '0 0 20px', letterSpacing: '-1px' }}>
                        The world belongs <br/>to the <span className="gradient-text">ambitious.</span>
                    </h1>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 500, color: '#13110f', marginBottom: '20px' }}>You may qualify for more visa pathways than you realize.</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#4A5568', lineHeight: 1.6, marginBottom: '25px' }}>Our AI parses your career signals to map your global future — in seconds. Select a pathway or upload your profile to see your eligibility instantly.</p>
                    <Link className="btn-scan-ai" to="/scan-profile" style={{ position: 'relative', display: 'inline-block', backgroundColor: '#13110f', color: '#FFF', border: 'none', borderRadius: '8px', padding: '16px 40px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif', textDecoration: 'none', transition: 'all 0.2s' }}>Scan My Profile</Link>
                </div>
                
                <div className="hero-masonry" style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '20px', height: '500px', position: 'relative' }}>
                    {/* Top Left */}
                    <div id="masonry-1" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', backgroundImage: `url('${masonry1Data[slideIndex].img}')`, backgroundPosition: 'center', backgroundSize: 'cover', transition: 'background-image 1.5s ease-in-out' }}>
                        <div className="glass-pill" id="masonry-text-1" style={{ position: 'absolute', bottom: '20px', left: '20px', padding: '10px 20px', borderRadius: '30px', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#13110f', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>{masonry1Data[slideIndex].text}</div>
                    </div>
                    {/* Bottom Left */}
                    <div id="masonry-2" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', backgroundImage: `url('${masonry2Data[slideIndex].img}')`, backgroundPosition: 'center', backgroundSize: 'cover', transition: 'background-image 1.5s ease-in-out' }}>
                        <div className="glass-pill" id="masonry-text-2" style={{ position: 'absolute', bottom: '20px', left: '20px', padding: '10px 20px', borderRadius: '30px', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#13110f', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>{masonry2Data[slideIndex].text}</div>
                    </div>
                    {/* Right Tall */}
                    <div id="masonry-3" style={{ gridRow: '1 / span 2', position: 'relative', borderRadius: '20px', overflow: 'hidden', backgroundImage: `url('${masonry3Data[slideIndex].img}')`, backgroundPosition: 'center', backgroundSize: 'cover', transition: 'background-image 1.5s ease-in-out' }}>
                        <div className="glass-pill" id="masonry-text-3" style={{ position: 'absolute', bottom: '20px', left: '20px', padding: '10px 20px', borderRadius: '30px', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#13110f', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>{masonry3Data[slideIndex].text}</div>
                    </div>
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="eligibility-section" style={{ backgroundColor: '#f9f5f0', padding: '40px 20px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '28px', fontWeight: 800, color: '#13110f', margin: '0 0 10px', letterSpacing: '-0.5px' }}>Check Your Eligibility</h2>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A5568', lineHeight: 1.5, margin: '0 auto', maxWidth: '800px' }}>Connect your profile to let our intelligence layer find your best global mobility pathway in seconds.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                        <button onClick={() => window.location.href='/signup'} onMouseOut={() => handleMouseOut('btn1')} onMouseOver={() => handleMouseOver('btn1')} style={{ background: '#0A66C2', color: '#FFFFFF', border: 'none', borderRadius: '12px', padding: '16px 20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', textAlign: 'left', gap: '12px', cursor: 'pointer', transition: 'all 0.3s', transform: hoverStates['btn1'] ? 'translateY(-2px)' : 'translateY(0)', boxShadow: hoverStates['btn1'] ? '0 8px 20px rgba(10,102,194,0.25)' : '0 4px 12px rgba(10,102,194,0.15)' }}>
                            <svg fill="currentColor" height="24" style={{ flexShrink: 0 }} viewBox="0 0 24 24" width="24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            <div>
                                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', marginBottom: '2px' }}>Connect LinkedIn</div>
                                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}>Fastest &amp; accurate</div>
                            </div>
                        </button>
                        <button onClick={() => window.location.href='/scan-profile'} onMouseOut={() => handleMouseOut('btn2')} onMouseOver={() => handleMouseOver('btn2')} style={{ background: '#FFFFFF', border: hoverStates['btn2'] ? '1px solid rgba(0, 165, 68, 0.3)' : '1px solid rgba(0,0,0,0.06)', borderRadius: '12px', padding: '16px 20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', textAlign: 'left', gap: '12px', cursor: 'pointer', transition: 'all 0.3s', transform: hoverStates['btn2'] ? 'translateY(-2px)' : 'translateY(0)', boxShadow: hoverStates['btn2'] ? '0 6px 15px rgba(0, 165, 68, 0.1)' : '0 2px 8px rgba(0,0,0,0.02)' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f9f5f0', color: '#13110f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
                            </div>
                            <div>
                                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', color: '#13110f', marginBottom: '2px' }}>Upload Resume</div>
                                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#718096', fontWeight: 400 }}>PDF or DOCX</div>
                            </div>
                        </button>
                        <button onClick={() => window.location.href='/scan-profile'} onMouseOut={() => handleMouseOut('btn3')} onMouseOver={() => handleMouseOver('btn3')} style={{ background: '#FFFFFF', border: hoverStates['btn3'] ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(0,0,0,0.06)', borderRadius: '12px', padding: '16px 20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', textAlign: 'left', gap: '12px', cursor: 'pointer', transition: 'all 0.3s', transform: hoverStates['btn3'] ? 'translateY(-2px)' : 'translateY(0)', boxShadow: hoverStates['btn3'] ? '0 6px 15px rgba(0,0,0,0.06)' : '0 2px 8px rgba(0,0,0,0.02)' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f9f5f0', color: '#4A5568', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
                            </div>
                            <div>
                                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', color: '#13110f', marginBottom: '2px' }}>Manual Entry</div>
                                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#718096', fontWeight: 400 }}>Answer questionnaire</div>
                            </div>
                        </button>
                    </div>
                    <div style={{ textAlign: 'center', fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 500, color: '#A0AEC0', marginTop: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="12"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        256-bit encryption • Your data is never shared
                    </div>
                </div>
            </section>

            {/* Discover Countries Section */}
            <section className="pathways-section" style={{ backgroundColor: '#FFFFFF', padding: '80px 50px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '36px', fontWeight: 800, color: '#13110f', margin: '0 0 15px' }}>Discover Countries</h2>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#4A5568', fontWeight: 500 }}>Explore the high-tier mobility programs you can qualify for with Vesti.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', maxWidth: '1200px', margin: '0 auto' }}>
                    {[
                        { name: 'United States', flag: 'us', desc: 'Explore top pathways like the O-1A, EB-1A, or NIW for extraordinary talent and professionals.', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                        { name: 'Australia', flag: 'au', desc: 'Unlock endless opportunities Down Under with skilled migration and regional visas.', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                        { name: 'Canada', flag: 'ca', desc: 'Fast-track permanent residency via Express Entry or Provincial Nominee Programs.', img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                        { name: 'New Zealand', flag: 'nz', desc: 'Explore the Magic of Aotearoa with seamless Visitor, Student, or Work Visa pathways.', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                        { name: 'France', flag: 'fr', desc: 'Experience the heart of Europe with seamless Visa pathways for tech talent and innovators.', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                        { name: 'Spain', flag: 'es', desc: 'Unlock opportunities in the vibrant Spanish economy with Digital Nomad and Golden Visas.', img: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                    ].map((country, idx) => (
                        <Link key={idx} to={`/countries`} onMouseOut={() => handleMouseOut(`country${idx}`)} onMouseOver={() => handleMouseOver(`country${idx}`)} style={{ background: '#FFFFFF', border: '1px solid #f9f5f0', borderRadius: '20px', overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%', boxShadow: hoverStates[`country${idx}`] ? '0 15px 30px rgba(0,0,0,0.1)' : '0 4px 15px rgba(0,0,0,0.05)', transform: hoverStates[`country${idx}`] ? 'translateY(-5px)' : 'translateY(0)', textDecoration: 'none' }}>
                            <div style={{ height: '180px', background: `url('${country.img}') center/cover`, position: 'relative' }}>
                                <div style={{ position: 'absolute', bottom: '-20px', left: '20px', width: '44px', height: '44px', background: '#FFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }}>
                                    <img alt={country.name} src={`https://flagcdn.com/w40/${country.flag}.png`} style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div style={{ padding: '35px 25px 25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '22px', fontWeight: 700, color: '#13110f', margin: '0 0 10px' }}>{country.name}</h3>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#4A5568', margin: '0 0 20px', lineHeight: 1.6, flex: 1 }}>{country.desc}</p>
                                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#13110f', display: 'flex', alignItems: 'center', gap: '8px' }}>Explore Pathways →</div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Link to="/countries" onMouseOut={() => handleMouseOut('all-countries')} onMouseOver={() => handleMouseOver('all-countries')} style={{ backgroundColor: hoverStates['all-countries'] ? '#13110f' : '#FFFFFF', color: hoverStates['all-countries'] ? '#FFFFFF' : '#13110f', border: '2px solid #13110f', borderRadius: '8px', padding: '12px 30px', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', textDecoration: 'none', display: 'inline-block' }}>View All Countries</Link>
                </div>
            </section>

            {/* News & Travel Guides Section */}
            <section className="news-section" style={{ backgroundColor: '#FFFFFF', padding: '80px 50px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '36px', fontWeight: 800, color: '#13110f', margin: '0 0 15px' }}>Latest News and Travel Guides</h2>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#4A5568', fontWeight: 500 }}>Discover how easy it is to check your visa requirements - we're here for you every step of the way.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', maxWidth: '1200px', margin: '0 auto', marginBottom: '50px' }}>
                    {[
                        { title: 'Do I Need a Visa for New Zealand? Your Complete 2026 Travel Guide', date: 'Wednesday, 6 May 2026', img: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                        { title: 'Indonesia Visa Tips: Your Guide to Bali and Beyond', date: 'Tuesday, 5 May 2026', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                        { title: 'Heading to the World Cup? Check Your Travel Requirements First', date: 'Monday, 23 March 2026', img: 'https://images.unsplash.com/photo-1508004526072-3be43a5005f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
                    ].map((news, idx) => (
                        <Link key={idx} to="/news" onMouseOut={() => handleMouseOut(`news${idx}`)} onMouseOver={() => handleMouseOver(`news${idx}`)} style={{ border: '1px solid #edf2f7', borderRadius: '16px', overflow: 'hidden', background: '#FFF', boxShadow: hoverStates[`news${idx}`] ? '0 15px 30px rgba(0,0,0,0.08)' : '0 4px 6px rgba(0,0,0,0.02)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', transform: hoverStates[`news${idx}`] ? 'translateY(-5px)' : 'translateY(0)', textDecoration: 'none', display: 'block' }}>
                            <div style={{ height: '200px', background: `url('${news.img}') center/cover` }}></div>
                            <div style={{ padding: '25px' }}>
                                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '18px', color: '#13110f', margin: '0 0 10px', lineHeight: 1.4 }}>{news.title}</h3>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#718096', margin: 0 }}>{news.date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/news" onMouseOut={() => handleMouseOut('all-news')} onMouseOver={() => handleMouseOver('all-news')} style={{ display: 'inline-block', padding: '14px 35px', border: '2px solid #13110f', color: hoverStates['all-news'] ? '#FFF' : '#13110f', backgroundColor: hoverStates['all-news'] ? '#13110f' : 'transparent', fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, borderRadius: '8px', textDecoration: 'none', transition: 'all 0.2s' }}>View All News</Link>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section" style={{ padding: '80px 20px', backgroundColor: '#13110f', color: '#FFF' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
                    <div>
                        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '36px', fontWeight: 800, color: '#FFF', margin: '0 0 20px' }}>How to apply for your Visa</h2>
                        <a href="#" style={{ color: '#A3A3A3', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#FFF'} onMouseOut={(e) => e.target.style.color = '#A3A3A3'}>
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
        </div>
    );
};

export default Home;
