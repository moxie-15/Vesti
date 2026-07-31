import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ScanProfile = () => {
    const [step, setStep] = useState(1); // 1: Info, 2: Criteria Checklist, 3: Scanning, 4: Command Center Report
    const [activeTab, setActiveTab] = useState('pathway'); // 'pathway', 'evidence', 'zyra', 'experts'
    const [activeFaq, setActiveFaq] = useState(0);

    // Form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        occupation: 'Software Engineer / Tech Lead',
        yearsExperience: '5-8 years',
        degree: "Master's Degree",
        targetCountry: 'usa',
        achievements: {
            awards: true,
            publications: true,
            highSalary: true,
            leadership: true,
            pressCoverage: false,
            patents: false
        }
    });

    const [scanPhase, setScanPhase] = useState(0);

    const scanMessages = [
        'Parsing 40+ talent signals & credential portfolio...',
        'Cross-referencing achievements against USCIS & IRCC regulatory criteria...',
        'Benchmarking profile against 100k+ successful global petitions...',
        'Finalizing customized Vesti Migration OS command report...'
    ];

    const handleNextStep = (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else if (step === 2) {
            setStep(3);
            setScanPhase(0);
            setTimeout(() => setScanPhase(1), 1000);
            setTimeout(() => setScanPhase(2), 2200);
            setTimeout(() => setScanPhase(3), 3400);
            setTimeout(() => setStep(4), 4500);
        }
    };

    const toggleAchievement = (key) => {
        setFormData(prev => ({
            ...prev,
            achievements: {
                ...prev.achievements,
                [key]: !prev.achievements[key]
            }
        }));
    };

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            {/* Hero Banner Header */}
            <section style={{
                backgroundColor: '#13110f',
                padding: '60px 20px 70px',
                color: '#FFF',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-100px',
                    left: '-100px',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(0, 165, 68, 0.2) 0%, rgba(19, 17, 15, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(70px)',
                    pointerEvents: 'none'
                }}></div>

                <div style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
                        <span style={{ width: '8px', height: '8px', backgroundColor: '#00A544', borderRadius: '50%', display: 'inline-block' }}></span>
                        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFF' }}>
                            Vesti Migration OS Engine
                        </span>
                    </div>

                    <h1 style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                        fontWeight: '900',
                        margin: '0 0 12px',
                        letterSpacing: '-1px'
                    }}>
                        AI Profile Benchmarking & <span style={{ color: '#00A544' }}>Eligibility Scanner</span>
                    </h1>

                    <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', margin: 0, lineHeight: '1.6' }}>
                        Upload your background signals to benchmark against 100k+ petitions for O-1, EB-1A, NIW, UK Global Talent & Canada Express Entry.
                    </p>
                </div>
            </section>

            <main style={{ maxWidth: '1180px', margin: '-30px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                {/* Stepper Card Wrapper */}
                <div style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '32px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
                    border: '1px solid #E2E8F0'
                }}>

                    {/* Step Navigation Progress Bar */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '36px',
                        borderBottom: '1px solid #F1F5F9',
                        paddingBottom: '20px',
                        flexWrap: 'wrap',
                        gap: '12px'
                    }}>
                        {[
                            { stepNum: 1, title: 'Profile Info' },
                            { stepNum: 2, title: 'Criteria Checklist' },
                            { stepNum: 3, title: 'AI Evaluation' },
                            { stepNum: 4, title: 'Command Center Report' }
                        ].map((s) => (
                            <div
                                key={s.stepNum}
                                onClick={() => { if (step > s.stepNum) setStep(s.stepNum); }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    cursor: step > s.stepNum ? 'pointer' : 'default',
                                    opacity: step >= s.stepNum ? 1 : 0.4
                                }}
                            >
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    backgroundColor: step >= s.stepNum ? '#00A544' : '#E2E8F0',
                                    color: step >= s.stepNum ? '#FFF' : '#64748B',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '700',
                                    fontSize: '14px'
                                }}>
                                    {step > s.stepNum ? '✓' : s.stepNum}
                                </div>
                                <span style={{ fontWeight: step === s.stepNum ? '700' : '600', fontSize: '13.5px', color: '#0F172A' }}>
                                    {s.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* STEP 1: Candidate Basic Info */}
                    {step === 1 && (
                        <form onSubmit={handleNextStep}>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', color: '#0F172A', marginBottom: '8px' }}>
                                Step 1: Tell us about your professional background
                            </h3>
                            <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '24px' }}>
                                Enter your details or upload your CV to extract 40+ talent signals automatically.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Moxie Ayomide"
                                        value={formData.fullName}
                                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                                        style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="moxie@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Current Occupation / Title</label>
                                    <select
                                        value={formData.occupation}
                                        onChange={e => setFormData({ ...formData, occupation: e.target.value })}
                                        style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none', backgroundColor: '#FFF' }}
                                    >
                                        <option value="Software Engineer / Tech Lead">Software Engineer / Tech Lead</option>
                                        <option value="AI / Data Science Specialist">AI / Data Science Specialist</option>
                                        <option value="Product Manager / Founder">Product Manager / Founder</option>
                                        <option value="Researcher / Academic PhD">Researcher / Academic PhD</option>
                                        <option value="Healthcare / Medical Doctor">Healthcare / Medical Doctor</option>
                                        <option value="Creative / Designer / Artist">Creative / Designer / Artist</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Years of Professional Experience</label>
                                    <select
                                        value={formData.yearsExperience}
                                        onChange={e => setFormData({ ...formData, yearsExperience: e.target.value })}
                                        style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none', backgroundColor: '#FFF' }}
                                    >
                                        <option value="1-3 years">1-3 years</option>
                                        <option value="3-5 years">3-5 years</option>
                                        <option value="5-8 years">5-8 years</option>
                                        <option value="8+ years">8+ years</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Highest Academic Degree</label>
                                    <select
                                        value={formData.degree}
                                        onChange={e => setFormData({ ...formData, degree: e.target.value })}
                                        style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none', backgroundColor: '#FFF' }}
                                    >
                                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                                        <option value="Master's Degree">Master's Degree</option>
                                        <option value="Ph.D. / Doctorate">Ph.D. / Doctorate</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    backgroundColor: '#00A544',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    borderRadius: '14px',
                                    fontWeight: '700',
                                    fontSize: '15px',
                                    cursor: 'pointer',
                                    boxShadow: '0 8px 20px rgba(0,165,68,0.3)'
                                }}
                            >
                                Continue to Achievements Checklist →
                            </button>
                        </form>
                    )}

                    {/* STEP 2: Achievements Checklist */}
                    {step === 2 && (
                        <form onSubmit={handleNextStep}>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', color: '#0F172A', marginBottom: '8px' }}>
                                Step 2: Select your key accomplishments
                            </h3>
                            <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '24px' }}>
                                Check all signals that apply to your professional trajectory. These directly correlate with regulatory petition criteria.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '14px', marginBottom: '32px' }}>
                                {[
                                    { key: 'awards', title: 'Nationally / Internationally Recognized Awards', desc: 'Received prizes or awards for excellence in your field' },
                                    { key: 'publications', title: 'Scholarly Articles or Industry Publications', desc: 'Authored papers, tech blogs, or peer-reviewed research' },
                                    { key: 'highSalary', title: 'High Salary / Remuneration', desc: 'Commanded significantly high compensation relative to peers' },
                                    { key: 'leadership', title: 'Leading or Critical Role', desc: 'Served as key lead for organizations with distinguished reputation' },
                                    { key: 'pressCoverage', title: 'Major Press or Media Feature', desc: 'Featured in tech outlets, news publications, or media interviews' },
                                    { key: 'patents', title: 'Original Contributions or Patents', desc: 'Created proprietary technology, open source projects, or patents' }
                                ].map((item) => (
                                    <div
                                        key={item.key}
                                        onClick={() => toggleAchievement(item.key)}
                                        style={{
                                            padding: '16px 20px',
                                            borderRadius: '16px',
                                            border: formData.achievements[item.key] ? '2px solid #00A544' : '1px solid #E2E8F0',
                                            backgroundColor: formData.achievements[item.key] ? 'rgba(0, 165, 68, 0.04)' : '#F8FAFC',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '12px',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={formData.achievements[item.key]}
                                            onChange={() => {}}
                                            style={{ marginTop: '3px', accentColor: '#00A544', width: '18px', height: '18px' }}
                                        />
                                        <div>
                                            <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '700', color: '#0F172A' }}>{item.title}</h4>
                                            <p style={{ margin: 0, fontSize: '12.5px', color: '#64748B', lineHeight: '1.4' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '12px' }}>
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    style={{
                                        padding: '14px 24px',
                                        backgroundColor: '#F1F5F9',
                                        color: '#334155',
                                        border: 'none',
                                        borderRadius: '14px',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    ← Back
                                </button>
                                <button
                                    type="submit"
                                    style={{
                                        flex: 1,
                                        padding: '14px',
                                        backgroundColor: '#00A544',
                                        color: '#FFFFFF',
                                        border: 'none',
                                        borderRadius: '14px',
                                        fontWeight: '700',
                                        fontSize: '15px',
                                        cursor: 'pointer',
                                        boxShadow: '0 8px 20px rgba(0,165,68,0.3)'
                                    }}
                                >
                                    Launch AI Evaluation Scan 🚀
                                </button>
                            </div>
                        </form>
                    )}

                    {/* STEP 3: Simulated AI Scanning */}
                    {step === 3 && (
                        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #00A544 0%, #13110f 100%)',
                                color: '#FFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 24px',
                                fontSize: '36px',
                                boxShadow: '0 12px 30px rgba(0,165,68,0.3)',
                                animation: 'pulse 1.5s infinite ease-in-out'
                            }}>
                                ⚡
                            </div>

                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '26px', color: '#0F172A', marginBottom: '12px' }}>
                                Scanning Your Mobility Profile...
                            </h3>

                            <p style={{ color: '#00A544', fontSize: '15px', fontWeight: '600', minHeight: '30px', marginBottom: '30px' }}>
                                {scanMessages[scanPhase]}
                            </p>

                            {/* Progress bar */}
                            <div style={{ width: '100%', height: '8px', backgroundColor: '#E2E8F0', borderRadius: '50px', overflow: 'hidden', maxWidth: '500px', margin: '0 auto' }}>
                                <div style={{
                                    height: '100%',
                                    backgroundColor: '#00A544',
                                    width: `${((scanPhase + 1) / 4) * 100}%`,
                                    transition: 'width 0.8s ease'
                                }}></div>
                            </div>
                        </div>
                    )}

                    {/* STEP 4: Vesti Migration OS Command Center */}
                    {step === 4 && (
                        <div>
                            {/* Command Center Greeting & Stepper */}
                            <div style={{ marginBottom: '28px' }}>
                                <span style={{ fontSize: '12px', fontWeight: '800', color: '#00A544', textTransform: 'uppercase', letterSpacing: '1px' }}>VESTI COMMAND CENTER</span>
                                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '32px', fontWeight: '900', color: '#0F172A', margin: '4px 0 16px' }}>
                                    Good morning, <span style={{ color: '#00A544' }}>{formData.fullName || 'Moxie'}</span>.
                                </h2>

                                {/* Global Mobility Journey Stepper */}
                                <div style={{ backgroundColor: '#F8FAFC', padding: '16px 20px', borderRadius: '18px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>GLOBAL MOBILITY JOURNEY</span>
                                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', fontSize: '12.5px', fontWeight: '600' }}>
                                        <span style={{ color: '#00A544', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>✓ Profile Complete</span> ›
                                        <span style={{ color: '#00A544', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>✓ Assessment Complete</span> ›
                                        <span style={{ backgroundColor: '#0F172A', color: '#FFF', padding: '3px 10px', borderRadius: '50px', fontSize: '11px' }}>3. Evidence Building</span> ›
                                        <span style={{ color: '#94A3B8' }}>4. Expert Review</span> ›
                                        <span style={{ color: '#94A3B8' }}>5. Petition Ready</span> ›
                                        <span style={{ color: '#94A3B8' }}>6. Filing Ready</span>
                                    </div>
                                </div>
                            </div>

                            {/* Migration Subnav Navigation Bar */}
                            <div style={{ display: 'flex', gap: '10px', borderBottom: '1px solid #E2E8F0', paddingBottom: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
                                {[
                                    { id: 'pathway', label: '🧭 Pathway Scores' },
                                    { id: 'evidence', label: '🏆 Evidence Builder (+45% Lift)' },
                                    { id: 'zyra', label: '🪄 Zyra AI Copilot' },
                                    { id: 'experts', label: '💼 Expert Network Chat' }
                                ].map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        style={{
                                            padding: '10px 18px',
                                            borderRadius: '50px',
                                            border: 'none',
                                            backgroundColor: activeTab === tab.id ? '#0F172A' : '#F1F5F9',
                                            color: activeTab === tab.id ? '#FFFFFF' : '#475569',
                                            fontWeight: '700',
                                            fontSize: '13px',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* TAB 1: PATHWAY SCORES */}
                            {activeTab === 'pathway' && (
                                <div>
                                    {/* At a Glance Metrics */}
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginBottom: '28px' }}>
                                        {[
                                            { num: '3', label: 'Assessments Run' },
                                            { num: '6', label: 'Pathways Scored' },
                                            { num: '4/10', label: 'Evidence Uploads' },
                                            { num: '2', label: 'Chats Active' },
                                            { num: '1', label: 'Consultation Booked' },
                                            { num: '8', label: 'Vault Documents' }
                                        ].map((m, idx) => (
                                            <div key={idx} style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                                                <div style={{ fontSize: '24px', fontWeight: '900', color: '#00A544', fontFamily: "'Outfit', sans-serif" }}>{m.num}</div>
                                                <span style={{ fontSize: '11.5px', color: '#64748B', fontWeight: '600' }}>{m.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', color: '#0F172A', marginBottom: '16px' }}>
                                        AI Visa Pathway Matches & Eligibility Scores
                                    </h4>

                                    {/* 6 Matched Pathway Cards */}
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '28px' }}>
                                        <div style={{ padding: '22px', borderRadius: '20px', background: '#F8FAFC', border: '2px solid #00A544' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                                <span style={{ fontWeight: '800', fontSize: '18px', color: '#0F172A' }}>US EB-2 NIW Waiver</span>
                                                <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '800' }}>81% Match • Strong</span>
                                            </div>
                                            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', marginBottom: '14px' }}>National interest endeavor bypasses labor certification for tech leads.</p>
                                            <div style={{ width: '100%', height: '6px', backgroundColor: '#E2E8F0', borderRadius: '50px', overflow: 'hidden' }}>
                                                <div style={{ width: '81%', height: '100%', backgroundColor: '#00A544' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ padding: '22px', borderRadius: '20px', background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                                <span style={{ fontWeight: '800', fontSize: '18px', color: '#0F172A' }}>US O-1A Visa</span>
                                                <span style={{ backgroundColor: '#0A3161', color: '#FFF', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '800' }}>72% Match • Strong</span>
                                            </div>
                                            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', marginBottom: '14px' }}>Extraordinary ability pathway for leaders in technology & business.</p>
                                            <div style={{ width: '100%', height: '6px', backgroundColor: '#E2E8F0', borderRadius: '50px', overflow: 'hidden' }}>
                                                <div style={{ width: '72%', height: '100%', backgroundColor: '#0A3161' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ padding: '22px', borderRadius: '20px', background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                                <span style={{ fontWeight: '800', fontSize: '18px', color: '#0F172A' }}>UK Global Talent</span>
                                                <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '800' }}>68% Match • Building</span>
                                            </div>
                                            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', marginBottom: '14px' }}>Tech Nation endorsement criteria via product leadership & open-source.</p>
                                            <div style={{ width: '100%', height: '6px', backgroundColor: '#E2E8F0', borderRadius: '50px', overflow: 'hidden' }}>
                                                <div style={{ width: '68%', height: '100%', backgroundColor: '#00A544' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ padding: '22px', borderRadius: '20px', background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                                <span style={{ fontWeight: '800', fontSize: '18px', color: '#0F172A' }}>Canada Express Entry</span>
                                                <span style={{ backgroundColor: '#D80621', color: '#FFF', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '800' }}>81% Match (CRS: 478)</span>
                                            </div>
                                            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', marginBottom: '14px' }}>Federal Skilled Worker stream point score exceeds current invitation draw rounds.</p>
                                            <div style={{ width: '100%', height: '6px', backgroundColor: '#E2E8F0', borderRadius: '50px', overflow: 'hidden' }}>
                                                <div style={{ width: '81%', height: '100%', backgroundColor: '#D80621' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ padding: '22px', borderRadius: '20px', background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                                <span style={{ fontWeight: '800', fontSize: '18px', color: '#0F172A' }}>US EB-1A Green Card</span>
                                                <span style={{ backgroundColor: '#64748B', color: '#FFF', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '800' }}>46% Match • Stretch</span>
                                            </div>
                                            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', marginBottom: '14px' }}>Requires international acclaim & 3 additional original major contributions.</p>
                                            <div style={{ width: '100%', height: '6px', backgroundColor: '#E2E8F0', borderRadius: '50px', overflow: 'hidden' }}>
                                                <div style={{ width: '46%', height: '100%', backgroundColor: '#64748B' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ padding: '22px', borderRadius: '20px', background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                                <span style={{ fontWeight: '800', fontSize: '18px', color: '#0F172A' }}>US H-1B Specialty</span>
                                                <span style={{ backgroundColor: '#475569', color: '#FFF', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '800' }}>48% Match • Lottery</span>
                                            </div>
                                            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', marginBottom: '14px' }}>Employer sponsored specialty occupation pathway subject to annual cap lottery.</p>
                                            <div style={{ width: '100%', height: '6px', backgroundColor: '#E2E8F0', borderRadius: '50px', overflow: 'hidden' }}>
                                                <div style={{ width: '48%', height: '100%', backgroundColor: '#475569' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* What We Found AI Insights */}
                                    <div style={{ backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '20px', marginBottom: '28px', border: '1px solid #E2E8F0' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00A544', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>
                                            ⚡ WHAT WE FOUND (40+ SIGNALS PARSED)
                                        </div>
                                        <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', color: '#0F172A', marginBottom: '10px' }}>
                                            Your strongest signals are your leadership and sector impact for NIW.
                                        </h4>
                                        <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                                            Media coverage is your weakest O-1 signal. Securing 3 more press mentions could boost your O-1 score from <strong>72% → 84%</strong> (+12% score lift).
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* TAB 2: EVIDENCE BUILDER */}
                            {activeTab === 'evidence' && (
                                <div style={{ backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
                                        <div>
                                            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', color: '#0F172A', margin: 0 }}>Evidence Builder Workspace</h4>
                                            <span style={{ fontSize: '13px', color: '#64748B' }}>Upload documentation to unlock up to <strong>+45% score lift</strong>.</span>
                                        </div>
                                        <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '6px 14px', borderRadius: '50px', fontWeight: '800', fontSize: '13px' }}>
                                            Total Lift Potential: +45%
                                        </span>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                                        {[
                                            { title: 'Media Recognition', count: '2/5 Uploaded', lift: '+11% Lift', desc: 'Articles, news features, interviews' },
                                            { title: 'Original Contributions', count: '1/3 Uploaded', lift: '+9% Lift', desc: 'Patents, open-source repos, benchmarks' },
                                            { title: 'Awards & Honors', count: '1/3 Uploaded', lift: '+8% Lift', desc: 'Prizes for field excellence' },
                                            { title: 'Judging Peers', count: '0/2 Uploaded', lift: '+7% Lift', desc: 'Hackathon or journal review invites' },
                                            { title: 'Authorship', count: '2/4 Uploaded', lift: '+6% Lift', desc: 'Tech articles or peer-reviewed papers' },
                                            { title: 'Speaking Engagements', count: '3/5 Uploaded', lift: '+4% Lift', desc: 'Keynotes & conference talks' }
                                        ].map((eItem, i) => (
                                            <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                                    <span style={{ fontWeight: '700', fontSize: '14px', color: '#0F172A' }}>{eItem.title}</span>
                                                    <span style={{ color: '#00A544', fontWeight: '800', fontSize: '12px' }}>{eItem.lift}</span>
                                                </div>
                                                <p style={{ fontSize: '12px', color: '#64748B', margin: '0 0 12px' }}>{eItem.desc}</p>
                                                <button style={{ width: '100%', padding: '8px', background: '#F1F5F9', border: '1px dashed #CBD5E1', borderRadius: '8px', fontSize: '12px', fontWeight: '700', color: '#334155', cursor: 'pointer' }}>
                                                    + Upload Document ({eItem.count})
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* TAB 3: ZYRA AI COPILOT */}
                            {activeTab === 'zyra' && (
                                <div style={{ backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#0F172A', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>🪄</div>
                                        <div>
                                            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', color: '#0F172A', margin: 0 }}>Zyra AI Mobility Copilot Simulator</h4>
                                            <span style={{ fontSize: '12px', color: '#64748B' }}>Simulate real-time score impacts before filing.</span>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                                        {[
                                            '⚡ What if I publish 2 research papers?',
                                            '⚡ Simulate adding 1 speaking engagement',
                                            '⚡ Impact of obtaining 3 media mentions',
                                            '⚡ How does a $150k salary boost my O-1?'
                                        ].map((prompt, i) => (
                                            <button key={i} style={{ padding: '10px 16px', background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '50px', fontSize: '12.5px', fontWeight: '600', color: '#0F172A', cursor: 'pointer' }}>
                                                {prompt}
                                            </button>
                                        ))}
                                    </div>

                                    <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '14px', border: '1px solid #E2E8F0', fontSize: '13.5px', color: '#334155', lineHeight: '1.6' }}>
                                        💡 <strong>Zyra Recommendation:</strong> Based on your current profile as a <strong>{formData.occupation}</strong>, completing 2 additional speaking engagements and securing 1 national press feature will elevate your overall O-1 extraordinary ability score to <strong>84% Match</strong>.
                                    </div>
                                </div>
                            )}

                            {/* TAB 4: EXPERT NETWORK CHAT */}
                            {activeTab === 'experts' && (
                                <div style={{ backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', color: '#0F172A', marginBottom: '16px' }}>
                                        Vetted Legal Advisors & Attorney Network
                                    </h4>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                                        {[
                                            { name: 'Olubunmi Opadoyin', role: 'O-1 & EB-1A Lead Specialist', img: '/assets/expert-bunmi-BGTZe3Yq.jpg', status: 'Online' },
                                            { name: 'Damola Oni', role: 'EB-1A Immigration Attorney', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', status: 'Online' },
                                            { name: 'Abimbola Amusan', role: 'EB-2 NIW Counsel', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', status: 'Available' },
                                            { name: 'Michael Chen', role: 'Global Mobility Specialist', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', status: 'Online' }
                                        ].map((expert, i) => (
                                            <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '14px' }}>
                                                <img src={expert.img} alt={expert.name} style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover' }} />
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                        <span style={{ fontWeight: '800', fontSize: '14.5px', color: '#0F172A' }}>{expert.name}</span>
                                                        <span style={{ width: '8px', height: '8px', backgroundColor: '#00A544', borderRadius: '50%' }}></span>
                                                    </div>
                                                    <span style={{ fontSize: '11.5px', color: '#64748B', display: 'block', marginBottom: '8px' }}>{expert.role}</span>
                                                    <Link to="/countries/usa/clarity" style={{ fontSize: '12px', fontWeight: '700', color: '#00A544', textDecoration: 'none' }}>
                                                        Chat Now →
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Action CTAs */}
                            <div style={{ marginTop: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <Link
                                    to="/countries/usa"
                                    style={{
                                        flex: 1,
                                        minWidth: '220px',
                                        padding: '14px',
                                        backgroundColor: '#00A544',
                                        color: '#FFFFFF',
                                        borderRadius: '14px',
                                        fontWeight: '700',
                                        fontSize: '14px',
                                        textAlign: 'center',
                                        textDecoration: 'none',
                                        boxShadow: '0 8px 20px rgba(0,165,68,0.3)'
                                    }}
                                >
                                    Explore Matched Visa Pathways →
                                </Link>

                                <Link
                                    to="/countries/usa/clarity"
                                    style={{
                                        padding: '14px 24px',
                                        backgroundColor: '#0F172A',
                                        color: '#FFFFFF',
                                        borderRadius: '14px',
                                        fontWeight: '700',
                                        fontSize: '14px',
                                        textAlign: 'center',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Book Expert Legal Consultation
                                </Link>
                            </div>
                        </div>
                    )}
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

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ScanProfile;
