import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ScanProfile = () => {
    const [step, setStep] = useState(1); // 1: Info, 2: Criteria Checklist, 3: Scanning, 4: Results Report

    // Form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        occupation: 'Software Engineer / Tech Lead',
        yearsExperience: '5-8 years',
        degree: "Master's Degree",
        targetCountry: 'usa',
        achievements: {
            awards: false,
            publications: false,
            highSalary: false,
            leadership: false,
            pressCoverage: false,
            patents: false
        }
    });

    const [scanPhase, setScanPhase] = useState(0);

    const scanMessages = [
        'Parsing career signals & credential portfolio...',
        'Cross-referencing achievements against USCIS & IRCC regulatory criteria...',
        'Evaluating extraordinary ability score and national interest endeavor match...',
        'Finalizing customized global mobility assessment report...'
    ];

    const handleNextStep = (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else if (step === 2) {
            setStep(3);
            // Simulate AI scanning phases
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
                backgroundColor: '#030B17',
                padding: '70px 20px 80px',
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
                    background: 'radial-gradient(circle, rgba(0, 165, 68, 0.2) 0%, rgba(3, 11, 23, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(70px)',
                    pointerEvents: 'none'
                }}></div>

                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        padding: '6px 18px',
                        borderRadius: '50px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        marginBottom: '20px'
                    }}>
                        <span style={{ width: '8px', height: '8px', backgroundColor: '#00A544', borderRadius: '50%', display: 'inline-block' }}></span>
                        <span style={{ fontSize: '12.5px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}>
                            AI Profile Scanner & Route Evaluator
                        </span>
                    </div>

                    <h1 style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                        fontWeight: '800',
                        lineHeight: '1.15',
                        marginBottom: '16px'
                    }}>
                        Discover Your True <span style={{
                            background: 'linear-gradient(135deg, #00A544 0%, #34D399 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>Immigration Eligibility</span>
                    </h1>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'rgba(255, 255, 255, 0.75)',
                        maxWidth: '620px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Our AI intelligence engine evaluates your achievements against regulatory criteria for O-1, EB-1A, EB-2 NIW, Express Entry, and UK Global Talent.
                    </p>
                </div>
            </section>

            {/* Main Interactive Scanner Container */}
            <main style={{ maxWidth: '850px', margin: '-40px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <div style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '28px',
                    padding: '40px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(0,0,0,0.05)'
                }}>
                    {/* Stepper Progress Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px', position: 'relative' }}>
                        {[
                            { num: 1, label: 'Profile Details' },
                            { num: 2, label: 'Achievements' },
                            { num: 3, label: 'AI Evaluation' },
                            { num: 4, label: 'Pathway Report' }
                        ].map((item) => (
                            <div key={item.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, flex: 1 }}>
                                <div style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '50%',
                                    backgroundColor: step >= item.num ? '#00A544' : '#F1F5F9',
                                    color: step >= item.num ? '#FFFFFF' : '#64748B',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '8px',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {step > item.num ? '✓' : item.num}
                                </div>
                                <span style={{
                                    fontSize: '12px',
                                    fontWeight: step === item.num ? '700' : '500',
                                    color: step >= item.num ? '#0F172A' : '#94A3B8',
                                    textAlign: 'center'
                                }}>
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* STEP 1: Basic Profile Information */}
                    {step === 1 && (
                        <form onSubmit={handleNextStep}>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', color: '#0F172A', marginBottom: '8px' }}>
                                Step 1: Tell us about your background
                            </h3>
                            <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '28px' }}>
                                Provide basic details so the AI scanner can contextualize your target visa pathways.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '28px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Alex Morgan"
                                        value={formData.fullName}
                                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                                        style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="e.g. alex@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Primary Occupation / Domain</label>
                                    <select
                                        value={formData.occupation}
                                        onChange={e => setFormData({ ...formData, occupation: e.target.value })}
                                        style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box', backgroundColor: '#FFF' }}
                                    >
                                        <option value="Software Engineer / Tech Lead">Software Engineer / Tech Lead</option>
                                        <option value="AI / ML Researcher">AI / ML Researcher</option>
                                        <option value="Product Manager / Founder">Product Manager / Founder</option>
                                        <option value="Data Scientist / Engineer">Data Scientist / Engineer</option>
                                        <option value="Biomedical / Scientific Researcher">Biomedical / Scientific Researcher</option>
                                        <option value="Finance & Business Executive">Finance & Business Executive</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Target Destination Country</label>
                                    <select
                                        value={formData.targetCountry}
                                        onChange={e => setFormData({ ...formData, targetCountry: e.target.value })}
                                        style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box', backgroundColor: '#FFF' }}
                                    >
                                        <option value="usa">United States (O-1, EB-1A, NIW)</option>
                                        <option value="canada">Canada (Express Entry, PNP)</option>
                                        <option value="australia">Australia (Subclass 189/190)</option>
                                        <option value="france">France (Talent Passport)</option>
                                        <option value="spain">Spain (Digital Nomad)</option>
                                        <option value="new-zealand">New Zealand (Skilled Migrant)</option>
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
                                background: 'linear-gradient(135deg, #00A544 0%, #030B17 100%)',
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

                    {/* STEP 4: AI Match Assessment Report */}
                    {step === 4 && (
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                                <div>
                                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#00A544', textTransform: 'uppercase', letterSpacing: '1px' }}>AI Assessment Complete</span>
                                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '26px', color: '#0F172A', margin: '4px 0 0' }}>
                                        Eligibility Report for {formData.fullName || 'Candidate'}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setStep(1)}
                                    style={{ padding: '8px 16px', background: '#F1F5F9', border: 'none', borderRadius: '10px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', color: '#475569' }}
                                >
                                    Start New Scan
                                </button>
                            </div>

                            {/* Matched Pathway Cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                                <div style={{ padding: '20px', borderRadius: '18px', background: '#F8FAFC', border: '1px solid #00A544' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontWeight: '700', fontSize: '16px', color: '#0F172A' }}>US EB-1A Extraordinary</span>
                                        <span style={{ backgroundColor: '#00A544', color: '#FFF', padding: '3px 10px', borderRadius: '50px', fontSize: '12px', fontWeight: '700' }}>92% Match</span>
                                    </div>
                                    <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: '1.4' }}>Self-petition pathway for leaders with proven extraordinary impact.</p>
                                </div>

                                <div style={{ padding: '20px', borderRadius: '18px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontWeight: '700', fontSize: '16px', color: '#0F172A' }}>US EB-2 NIW Waiver</span>
                                        <span style={{ backgroundColor: '#0A3161', color: '#FFF', padding: '3px 10px', borderRadius: '50px', fontSize: '12px', fontWeight: '700' }}>86% Match</span>
                                    </div>
                                    <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: '1.4' }}>National interest endeavor route bypasses labor certification.</p>
                                </div>

                                <div style={{ padding: '20px', borderRadius: '18px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontWeight: '700', fontSize: '16px', color: '#0F172A' }}>Canada Express Entry</span>
                                        <span style={{ backgroundColor: '#D80621', color: '#FFF', padding: '3px 10px', borderRadius: '50px', fontSize: '12px', fontWeight: '700' }}>88% Match</span>
                                    </div>
                                    <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: '1.4' }}>Federal Skilled Worker stream points-based fast track.</p>
                                </div>
                            </div>

                            {/* Strengths & Recommendations */}
                            <div style={{ backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '20px', marginBottom: '32px', border: '1px solid #E2E8F0' }}>
                                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', color: '#0F172A', marginBottom: '12px' }}>
                                    Key Profile Strengths Identified
                                </h4>
                                <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '13.5px', color: '#475569', lineHeight: '1.7' }}>
                                    <li>Demonstrated expertise as a <strong>{formData.occupation}</strong> with advanced academic background.</li>
                                    <li>Strong candidate for self-petition routes without requiring employer sponsorship.</li>
                                    <li>Recommended Next Step: Pair with a Vesti legal advisor to structure your petition letter & citation evidence.</li>
                                </ul>
                            </div>

                            {/* CTAs */}
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
                                    Explore Matched Pathways →
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
                                    Book Expert Consultation
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ScanProfile;
