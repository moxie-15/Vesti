import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, Calendar, Globe, ShieldCheck, Scale, MessageCircle, Gavel, Sparkles, Briefcase, CheckCircle, Map, Users } from 'lucide-react';

const Signup = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(false);

    // Form states
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const slides = [
        {
            title: "Secure Your Global Pathways",
            desc: "Easily access and manage your visa applications, international accounts, and relocations anywhere, anytime.",
            iconMain: <Plane size={32} color="#FFF" />,
            iconSub: <Calendar size={18} color="#FFF" />,
            iconExtra1: <Globe size={18} color="rgba(255,255,255,0.8)" />,
            iconExtra2: <ShieldCheck size={18} color="rgba(255,255,255,0.8)" />
        },
        {
            title: "Expert Guidance on Tap",
            desc: "Get matched with legal professionals and AI-driven insights to ensure your application is flawless.",
            iconMain: <Scale size={32} color="#FFF" />,
            iconSub: <MessageCircle size={18} color="#FFF" />,
            iconExtra1: <Gavel size={18} color="rgba(255,255,255,0.8)" />,
            iconExtra2: <Sparkles size={18} color="rgba(255,255,255,0.8)" />
        },
        {
            title: "Your Journey, Simplified",
            desc: "Join thousands who have successfully migrated. We handle the paperwork so you can focus on your future.",
            iconMain: <Briefcase size={32} color="#FFF" />,
            iconSub: <CheckCircle size={18} color="#FFF" />,
            iconExtra1: <Map size={18} color="rgba(255,255,255,0.8)" />,
            iconExtra2: <Users size={18} color="rgba(255,255,255,0.8)" />
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); // Start fade out
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setFade(false); // Fade back in
            }, 300); // Wait for CSS transition
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handleSignup = (e) => {
        e.preventDefault();
        // Just bypass for demo purposes
        navigate('/countries');
    };

    return (
        <div style={{ backgroundColor: '#f9f5f0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', boxSizing: 'border-box' }}>
            
            <style>
                {`
                    .signup-container {
                        display: flex;
                        width: 100%;
                        max-width: 900px;
                        background: #fff;
                        border-radius: 20px;
                        box-shadow: 0 15px 35px rgba(0,0,0,0.08);
                        overflow: hidden;
                    }
                    .info-panel {
                        background: #13110f;
                        color: #fff;
                        width: 45%;
                        padding: 40px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        position: relative;
                        overflow: hidden;
                    }
                    .info-panel::before, .info-panel::after {
                        content: '';
                        position: absolute;
                        border-radius: 50%;
                        filter: blur(80px);
                        z-index: 0;
                        pointer-events: none;
                        animation: floatOrb 12s ease-in-out infinite alternate;
                    }
                    .info-panel::before {
                        width: 350px;
                        height: 350px;
                        background: rgba(255, 255, 255, 0.04);
                        top: -100px;
                        right: -100px;
                    }
                    .info-panel::after {
                        width: 300px;
                        height: 300px;
                        background: rgba(255, 255, 255, 0.03);
                        bottom: -50px;
                        left: -100px;
                        animation-delay: -6s;
                    }
                    @keyframes floatOrb {
                        0% { transform: translate(0, 0) scale(1); }
                        100% { transform: translate(40px, 50px) scale(1.1); }
                    }
                    @keyframes float1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
                    @keyframes float2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(10px); } }
                    @keyframes float3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
                    @keyframes float4 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(14px); } }
                    .glass-badge-sub {
                        width: 64px; 
                        height: 64px; 
                        background: rgba(255, 255, 255, 0.1); 
                        backdrop-filter: blur(16px);
                        border: 1px solid rgba(255,255,255,0.15);
                        border-radius: 16px; 
                        box-shadow: 0 8px 24px rgba(0,0,0,0.3); 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                    }
                    .fade-transition {
                        transition: opacity 0.3s ease;
                    }
                    .dot {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: rgba(255,255,255,0.3);
                        transition: all 0.3s;
                    }
                    .dot.active {
                        background: #fff;
                        width: 24px;
                        border-radius: 4px;
                    }
                    .btn-primary {
                        background: #13110f;
                        color: #fff;
                        border: none;
                        border-radius: 10px;
                        padding: 12px 20px;
                        width: 100%;
                        font-family: 'Inter', sans-serif;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
                    }
                    .btn-primary:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 10px 20px rgba(19,17,15,0.2);
                        background: #2D3748;
                    }
                    .btn-social {
                        border: 1px solid #E2E8F0;
                        border-radius: 12px;
                        background: #fff;
                        font-family: 'Inter', sans-serif;
                        font-size: 16px;
                        font-weight: 600;
                        color: #13110f;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        transition: background 0.2s;
                        height: 54px;
                    }
                    .btn-social:hover {
                        background: #f8fafc;
                    }
                    @media (max-width: 768px) {
                        .signup-container {
                            flex-direction: column;
                        }
                        .info-panel {
                            width: 100%;
                            padding: 40px 30px;
                            min-height: 400px;
                        }
                        .action-panel {
                            width: 100% !important;
                            padding: 40px 30px !important;
                        }
                    }
                `}
            </style>

            <div className="signup-container">
                {/* Left Panel */}
                <div className="info-panel">
                    <div style={{ position: 'relative', zIndex: 1, marginTop: '8vh', marginBottom: 'auto' }}>
                        <div style={{ marginBottom: '45px', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ width: '92px', height: '92px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.4)', animation: 'float1 6s ease-in-out infinite' }} className={`fade-transition ${fade ? 'opacity-0' : 'opacity-100'}`} style={{ opacity: fade ? 0 : 1 }}>
                                {slides[currentSlide].iconMain}
                            </div>
                            <div className="glass-badge-sub" style={{ animation: 'float2 5.5s ease-in-out infinite', opacity: fade ? 0 : 1 }}>
                                {slides[currentSlide].iconSub}
                            </div>
                            <div className="glass-badge-sub" style={{ animation: 'float3 7s ease-in-out infinite', opacity: fade ? 0 : 1 }}>
                                {slides[currentSlide].iconExtra1}
                            </div>
                            <div className="glass-badge-sub" style={{ animation: 'float4 6.2s ease-in-out infinite', opacity: fade ? 0 : 1 }}>
                                {slides[currentSlide].iconExtra2}
                            </div>
                        </div>
                        <h2 className={`fade-transition`} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '32px', fontWeight: 700, marginBottom: '15px', background: 'linear-gradient(90deg, #ffffff, #d1d5db)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2, opacity: fade ? 0 : 1 }}>
                            {slides[currentSlide].title}
                        </h2>
                        <p className={`fade-transition`} style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '30px', opacity: fade ? 0 : 1 }}>
                            {slides[currentSlide].desc}
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', position: 'relative', zIndex: 1 }}>
                        {slides.map((_, i) => (
                            <div key={i} className={`dot ${i === currentSlide ? 'active' : ''}`}></div>
                        ))}
                    </div>
                </div>

                {/* Right Panel */}
                <div className="action-panel" style={{ width: '55%', padding: '40px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#fff' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0px', textDecoration: 'none', marginBottom: '25px' }}>
                        <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33 0C32.7 1.08 32.2 2.06 31.8 3.07C30.4 6.45 28.8 9.83 27.3 13.22C24.5 19.53 21.7 25.84 18.9 32.16C18.7 32.76 18.4 33 17.7 33H10.9C10.2 33 10.2 32.93 10.4 32.37C12.5 27.68 14.5 22.99 16.6 18.3C18.6 13.73 20.6 9.2 22.6 4.61C22.7 4.3 22.9 4.14 23.2 4.02C26.3 2.73 29.4 1.43 32.5 0.14C32.6 0.1 32.7 0.05 32.8 0H33Z" fill="#13110f" />
                            <path d="M0 9.4H7.5C8.2 9.4 8.2 9.45 7.9 10.1C6.8 12.82 5.6 15.54 4.4 18.26C4.3 18.42 4.3 18.69 4.1 18.69C3.8 18.68 3.8 18.41 3.7 18.25C2.6 15.67 1.4 13.07 0.3 10.47C0.2 10.26 0.1 10.07 0 9.87V9.4Z" fill="#13110f" />
                            <path d="M5.1 21.31C5.1 21.19 5.2 21.06 5.2 20.94C6.5 17.95 7.8 14.99 9.1 12C9.4 11.29 9.7 10.6 10.1 9.89C10.2 9.62 10.4 9.4 10.7 9.28C13.7 7.99 16.8 6.72 19.8 5.45C20 5.38 20.2 5.23 20.3 5.36C20.5 5.53 20.3 5.7 20.2 5.87C17.9 10.99 15.6 16.11 13.4 21.24C12.1 24.22 10.8 27.22 9.6 30.21C9.5 30.36 9.5 30.6 9.3 30.62C9.1 30.64 9 30.38 8.9 30.22C7.7 27.27 6.4 24.32 5.2 21.38C5.1 21.36 5.1 21.34 5.1 21.31Z" fill="#13110f" />
                        </svg>
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '26px', fontWeight: 700, color: '#13110f', letterSpacing: '-0.5px', marginLeft: '-6px' }}>esti</span>
                    </Link>

                    <div style={{ width: '100%', maxWidth: '350px', marginBottom: '25px', textAlign: 'center' }}>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', color: '#13110f', margin: '0 0 5px' }}>Create an account</h3>
                        <p style={{ color: '#718096', fontSize: '14px', margin: 0 }}>Start your global journey today.</p>
                    </div>

                    <form onSubmit={handleSignup} style={{ width: '100%', maxWidth: '350px' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                style={{ width: '100%', padding: '16px 18px', border: '1px solid #E2E8F0', borderRadius: '12px', fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#13110f', outline: 'none', boxSizing: 'border-box' }} 
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%', padding: '16px 18px', border: '1px solid #E2E8F0', borderRadius: '12px', fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#13110f', outline: 'none', boxSizing: 'border-box' }} 
                            />
                        </div>
                        <div style={{ marginBottom: '25px' }}>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ width: '100%', padding: '16px 18px', border: '1px solid #E2E8F0', borderRadius: '12px', fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#13110f', outline: 'none', boxSizing: 'border-box' }} 
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                            <button type="submit" className="btn-primary" style={{ flex: 1, height: '54px', margin: 0 }}>
                                Sign Up
                            </button>
                            <button type="button" className="btn-social" style={{ flex: 1, margin: 0 }}>
                                <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                                Google
                            </button>
                        </div>
                    </form>

                    <p style={{ fontSize: '14px', color: '#4A5568', marginTop: '20px', textAlign: 'center' }}>
                        Already have an account? <Link to="/login" style={{ color: '#13110f', fontWeight: 600, textDecoration: 'none' }}>Log in</Link>
                    </p>

                    <p style={{ fontSize: '12px', color: '#718096', textAlign: 'center', marginTop: '15px', lineHeight: 1.4 }}>
                        By clicking "Sign Up," you agree to our <br/><a href="#" style={{ color: '#13110f', textDecoration: 'underline', fontWeight: 500 }}>Privacy Policy</a> and <a href="#" style={{ color: '#13110f', textDecoration: 'underline', fontWeight: 500 }}>Terms & Conditions</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
