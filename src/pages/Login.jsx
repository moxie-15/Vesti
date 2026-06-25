import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, MessageCircle, Gavel, Sparkles, Globe, Shield, Zap, Users, Map, FileCheck, Star, Briefcase } from 'lucide-react';

const slides = [
    {
        icons: [Scale, MessageCircle, Gavel, Sparkles],
        title: 'Expert Guidance on Tap',
        desc: 'Get matched with legal professionals and AI-driven insights to ensure your application is flawless.',
    },
    {
        icons: [Globe, Shield, Zap, Users],
        title: 'Welcome Back',
        desc: 'Continue your global journey. Thousands of visa approvals processed — yours could be next.',
    },
    {
        icons: [Map, FileCheck, Star, Briefcase],
        title: 'Every Path, Covered',
        desc: 'From visas to banking, we support every step of your global relocation with precision and speed.',
    },
];

const floatStyles = [
    { animation: 'float1 4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite' },
    { animation: 'float2 5.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite' },
    { animation: 'float3 3.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite' },
    { animation: 'float4 4.6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite' },
];

const Login = () => {
    const [slide, setSlide] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setSlide(prev => (prev + 1) % slides.length);
                setFade(true);
            }, 350);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const current = slides[slide];

    return (
        <div style={{ margin: 0, padding: '20px', backgroundColor: '#f9f5f0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <style>{`
                @keyframes float1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
                @keyframes float2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(10px); } }
                @keyframes float3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
                @keyframes float4 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(13px); } }
            `}</style>
            <div className="signup-container" style={{ display: 'flex', width: '100%', maxWidth: '900px', background: '#fff', borderRadius: '20px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)', overflow: 'hidden' }}>

                {/* Left Panel */}
                <div className="info-panel" style={{ background: '#13110f', color: '#fff', width: '45%', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        {/* Floating Icons */}
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '45px', opacity: fade ? 1 : 0, transition: 'opacity 0.35s ease' }}>
                            {current.icons.map((Icon, i) => (
                                <div
                                    key={i}
                                    style={{
                                        width: i === 0 ? '68px' : '52px',
                                        height: i === 0 ? '68px' : '52px',
                                        background: i === 0 ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                                        backdropFilter: 'blur(16px)',
                                        border: `1px solid rgba(255,255,255,${i === 0 ? 0.25 : 0.12})`,
                                        borderRadius: i === 0 ? '18px' : '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: i === 0 ? '0 12px 32px rgba(0,0,0,0.45)' : '0 6px 16px rgba(0,0,0,0.25)',
                                        ...floatStyles[i],
                                    }}
                                >
                                    <Icon size={i === 0 ? 30 : 22} color="#FFF" strokeWidth={1.5} />
                                </div>
                            ))}
                        </div>

                        {/* Slide Text */}
                        <div style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.35s ease' }}>
                            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '32px', fontWeight: 700, marginBottom: '15px', background: 'linear-gradient(90deg, #ffffff, #d1d5db)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', lineHeight: 1.2, margin: '0 0 15px' }}>
                                {current.title}
                            </h2>
                            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: '0 0 30px' }}>
                                {current.desc}
                            </p>
                        </div>
                    </div>

                    {/* Dot Indicators */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                onClick={() => { setFade(false); setTimeout(() => { setSlide(i); setFade(true); }, 350); }}
                                style={{
                                    width: i === slide ? '24px' : '8px',
                                    height: '8px',
                                    borderRadius: i === slide ? '4px' : '50%',
                                    background: i === slide ? '#fff' : 'rgba(255,255,255,0.28)',
                                    transition: 'all 0.35s ease',
                                    cursor: 'pointer',
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Panel */}
                <div className="action-panel" style={{ width: '55%', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#fff' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginBottom: '25px' }}>
                        <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33 0C32.7 1.08 32.2 2.06 31.8 3.07C30.4 6.45 28.8 9.83 27.3 13.22C24.5 19.53 21.7 25.84 18.9 32.16C18.7 32.76 18.4 33 17.7 33H10.9C10.2 33 10.2 32.93 10.4 32.37C12.5 27.68 14.5 22.99 16.6 18.3C18.6 13.73 20.6 9.2 22.6 4.61C22.7 4.3 22.9 4.14 23.2 4.02C26.3 2.73 29.4 1.43 32.5 0.14C32.6 0.1 32.7 0.05 32.8 0H33Z" fill="#13110f" />
                            <path d="M0 9.4H7.5C8.2 9.4 8.2 9.45 7.9 10.1C6.8 12.82 5.6 15.54 4.4 18.26C4.3 18.42 4.3 18.69 4.1 18.69C3.8 18.68 3.8 18.41 3.7 18.25C2.6 15.67 1.4 13.07 0.3 10.47C0.2 10.26 0.1 10.07 0 9.87V9.4Z" fill="#13110f" />
                            <path d="M5.1 21.31C5.1 21.19 5.2 21.06 5.2 20.94C6.5 17.95 7.8 14.99 9.1 12C9.4 11.29 9.7 10.6 10.1 9.89C10.2 9.62 10.4 9.4 10.7 9.28C13.7 7.99 16.8 6.72 19.8 5.45C20 5.38 20.2 5.23 20.3 5.36C20.5 5.53 20.3 5.7 20.2 5.87C17.9 10.99 15.6 16.11 13.4 21.24C12.1 24.22 10.8 27.22 9.6 30.21C9.5 30.36 9.5 30.6 9.3 30.62C9.1 30.64 9 30.38 8.9 30.22C7.7 27.27 6.4 24.32 5.2 21.38C5.1 21.36 5.1 21.34 5.1 21.31Z" fill="#13110f" />
                        </svg>
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '26px', fontWeight: 700, color: '#13110f', marginLeft: '-6px' }}>esti</span>
                    </Link>

                    <div style={{ width: '100%', maxWidth: '380px', marginBottom: '25px', textAlign: 'center' }}>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', color: '#13110f', margin: '0 0 8px' }}>Welcome back</h3>
                        <p style={{ color: '#718096', fontSize: '14px', margin: 0 }}>Log in to continue your global journey.</p>
                    </div>

                    <form style={{ width: '100%', maxWidth: '380px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '14px 16px', border: '1px solid #E2E8F0', borderRadius: '12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', fontFamily: "'Inter', sans-serif" }} />
                        </div>
                        <div style={{ position: 'relative', marginBottom: '10px' }}>
                            <input type="password" placeholder="Password" style={{ width: '100%', padding: '14px 16px', border: '1px solid #E2E8F0', borderRadius: '12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', fontFamily: "'Inter', sans-serif" }} />
                        </div>
                        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
                            <Link to="#" style={{ fontSize: '13px', color: '#718096', textDecoration: 'none' }}>Forgot password?</Link>
                        </div>
                        <button type="submit" style={{ display: 'block', textAlign: 'center', background: '#13110f', color: '#fff', border: 'none', borderRadius: '10px', padding: '13px 20px', width: '100%', fontWeight: 600, fontSize: '15px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>Log In</button>
                    </form>

                    <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0', width: '100%', maxWidth: '380px' }}>
                        <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }}></div>
                        <div style={{ padding: '0 15px', color: '#A0AEC0', fontSize: '13px' }}>Or</div>
                        <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }}></div>
                    </div>

                    <button style={{ background: '#fff', color: '#13110f', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '12px 20px', width: '100%', maxWidth: '380px', fontWeight: 600, fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '25px', fontFamily: "'Inter', sans-serif" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Log in with Google
                    </button>

                    <div style={{ width: '100%', maxWidth: '380px', textAlign: 'center' }}>
                        <p style={{ fontSize: '14px', color: '#4A5568', margin: 0 }}>Don't have an account? <Link to="/signup" style={{ color: '#13110f', fontWeight: 600, textDecoration: 'none' }}>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
