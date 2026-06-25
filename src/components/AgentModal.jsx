import React, { useState, useEffect, useRef } from 'react';

const AgentModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalState, setModalState] = useState('greeting'); // greeting, onboarding, details, select, scanning, report, chat
    const [isJiggling, setIsJiggling] = useState(false);
    
    // Form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    
    // Scanning state message
    const [scanMessage, setScanMessage] = useState('Initializing profile scanner...');
    
    // Chat state
    const [chatMessages, setChatMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const chatEndRef = useRef(null);

    // Auto-open and jiggle behavior after 30 seconds of inactivity
    useEffect(() => {
        // Removed localStorage check for demo purposes so it always triggers
        // const onboarded = localStorage.getItem('vesti_agent_onboarded') === 'true';
        // if (onboarded) return;

        // Jiggle at 13 seconds
        const jiggleTimeout = setTimeout(() => {
            if (!isOpen) {
                setIsJiggling(true);
            }
        }, 13000);

        // Open modal at 15 seconds
        const openTimeout = setTimeout(() => {
            if (!isOpen) {
                setIsOpen(true);
                setModalState('greeting');
                setIsJiggling(false);
            }
        }, 15000);

        return () => {
            clearTimeout(jiggleTimeout);
            clearTimeout(openTimeout);
        };
    }, [isOpen]);

    // Scroll chat to bottom
    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatMessages]);

    // Handle manual opening
    const handleOpenModal = () => {
        setIsOpen(true);
        const onboarded = localStorage.getItem('vesti_agent_onboarded') === 'true';
        // If they already completed onboarding, go directly to Details or Chat
        if (onboarded) {
            if (name && email) {
                setModalState('chat');
            } else {
                setModalState('details');
            }
        } else {
            setModalState('greeting');
        }
    };

    // Close Modal and save onboarding state
    const handleCloseModal = () => {
        if (modalState === 'greeting') {
            // Instead of closing completely, show the coach mark to teach them where to find Bunmi
            setModalState('onboarding');
        } else {
            setIsOpen(false);
            // localStorage.setItem('vesti_agent_onboarded', 'true');
        }
    };

    // Form submission
    const handleDetailsSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && email.trim() && occupation.trim()) {
            setModalState('select');
        }
    };

    // Scan simulation
    const handleStartScan = (type) => {
        setModalState('scanning');
        
        const phases = [
            { text: `Reading credentials from ${type}...`, delay: 800 },
            { text: `Extracting key achievements and experience as ${occupation}...`, delay: 1600 },
            { text: 'Evaluating matched criteria against US NIW & EB-1A routes...', delay: 2400 },
            { text: 'Finalizing your personalized mobility assessment report...', delay: 3200 }
        ];

        phases.forEach((phase) => {
            setTimeout(() => {
                setScanMessage(phase.text);
            }, phase.delay);
        });

        setTimeout(() => {
            // Set initial chat messages for State 5
            setChatMessages([
                { sender: 'agent', text: `Hi ${name}! I've completed your eligibility scan. Based on your profile as a ${occupation}, you show excellent potential for the US EB-1A Extraordinary Ability pathway (92% match) and the EB-2 National Interest Waiver (85% match).` },
                { sender: 'agent', text: 'How can I assist you with preparing your global mobility roadmap today?' }
            ]);
            setModalState('report');
        }, 4000);
    };

    // Send chat message
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        const userMsg = userInput.trim();
        setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
        setUserInput('');

        // Simulate Bunmi reply
        setTimeout(() => {
            let reply = "I can definitely help guide you through that. Vesti's platform simplifies document uploads and pairs you with legal experts to review your petition letters. Shall we set up a expert consultation?";
            if (userMsg.toLowerCase().includes('eb-1a') || userMsg.toLowerCase().includes('eb1a')) {
                reply = "For the EB-1A, we will look to document at least 3 out of the 10 USCIS criteria (like publications, awards, or high salary). Based on your profile, we can highlight your technical achievements first. Let me know if you would like to start drafting these criteria.";
            } else if (userMsg.toLowerCase().includes('niw') || userMsg.toLowerCase().includes('eb-2')) {
                reply = "The EB-2 NIW requires showing that your endeavor has substantial merit and national importance to the US. It's a fantastic, self-petitioned path. We can construct your National Interest proposal directly on Vesti.";
            }
            setChatMessages(prev => [...prev, { sender: 'agent', text: reply }]);
        }, 1000);
    };

    return (
        <>
            {/* Floating Launcher Button */}
            <div
                onClick={handleOpenModal}
                className={isJiggling ? 'launcher-jiggling' : ''}
                style={{
                    position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000,
                    cursor: 'pointer',
                    width: '72px', height: '72px', borderRadius: '50%',
                    backgroundColor: '#f9f5f0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.18)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'; }}
            >
                <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    backgroundColor: '#13110f', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                    </svg>
                </div>
            </div>

            {/* Modal Overlay / Conditional Onboarding UI */}
            {isOpen && (
                modalState === 'onboarding' ? (
                    /* STATE 1: FLOATING COACH MARK / ONBOARDING BUBBLE (near bottom-right launcher) */
                    <div style={{
                        position: 'fixed', bottom: '110px', right: '24px', zIndex: 1050,
                        width: '320px', background: '#FFF', borderRadius: '16px',
                        border: '1px solid #E2E8F0', padding: '20px',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                        display: 'flex', flexDirection: 'column', gap: '12px'
                    }}>
                        <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: 700, color: '#13110f', margin: 0 }}>
                            You can always find me here!
                        </h4>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#4A5568', margin: 0, lineHeight: 1.5 }}>
                            Click the floating icon anytime to chat, minimize, or check your eligibility scanner results.
                        </p>
                        
                        {/* Pulsing down arrow */}
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0', animation: 'bounce 1s infinite' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#13110f" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                        </div>
                        <style>{`@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }`}</style>

                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                width: '100%', padding: '12px', background: '#13110f', color: '#FFF',
                                border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '14px',
                                cursor: 'pointer', fontFamily: "'Inter', sans-serif", transition: 'background-color 0.2s',
                                textAlign: 'center'
                            }}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = '#2d2a25'}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = '#13110f'}
                        >
                            Got it 👍
                        </button>
                    </div>
                ) : modalState === 'greeting' ? (
                    /* STATE 0: INITIAL GREETING POP-UP (Exactly matches screenshot) */
                    <div style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
                        backgroundColor: 'rgba(19, 17, 15, 0.65)', backdropFilter: 'blur(8px)', 
                        zIndex: 1050, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        animation: 'fadeIn 0.3s ease-out'
                    }}>
                        <style>{`
                            @keyframes scaleUpFade {
                                0% { transform: scale(0.95) translateY(10px); opacity: 0; }
                                100% { transform: scale(1) translateY(0); opacity: 1; }
                            }
                            @keyframes fadeIn {
                                0% { opacity: 0; }
                                100% { opacity: 1; }
                            }
                            .premium-btn {
                                transition: all 0.3s ease;
                                box-shadow: 0 10px 20px -10px rgba(19, 17, 15, 0.5);
                            }
                            .premium-btn:hover {
                                transform: translateY(-2px);
                                box-shadow: 0 15px 25px -10px rgba(19, 17, 15, 0.8);
                                background-color: #2D3748 !important;
                            }
                        `}</style>
                        <div style={{
                            width: '90%', maxWidth: '720px', height: '380px', background: '#FFF', 
                            borderRadius: '24px', display: 'flex', overflow: 'hidden', position: 'relative',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255,255,255,0.1)',
                            animation: 'scaleUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}>
                            {/* Close Button */}
                            <button 
                                onClick={handleCloseModal}
                                style={{
                                    position: 'absolute', top: '20px', right: '20px', background: '#FFF', 
                                    border: 'none', width: '36px', height: '36px', borderRadius: '50%', 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                    cursor: 'pointer', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#13110f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            {/* Left Image Side */}
                            <div style={{ width: '44%', position: 'relative', background: '#13110f' }}>
                                <img 
                                    src="/assets/expert-bunmi-BGTZe3Yq.jpg" 
                                    alt="Bunmi" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    background: 'linear-gradient(to top, rgba(19, 17, 15, 0.85) 0%, rgba(19, 17, 15, 0.25) 50%, rgba(19, 17, 15, 0.1) 100%)'
                                }}></div>
                                <div style={{
                                    position: 'absolute', bottom: '24px', left: '24px', color: '#FFF',
                                    fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: 700
                                }}>
                                    Bunmi from Vesti
                                </div>
                            </div>

                            {/* Right Content Side */}
                            <div style={{ width: '56%', padding: '40px 35px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '28px', fontWeight: 800, color: '#13110f', margin: '0 0 12px 0', lineHeight: 1.1, letterSpacing: '-0.5px' }}>
                                    Need help with your Visa? 👋
                                </h3>
                                <p style={{ fontFamily: "'Inter', sans-serif", color: '#4A5568', fontSize: '15px', lineHeight: 1.6, margin: '0 0 28px 0' }}>
                                    Hi! I'm Bunmi from the Vesti support team. I noticed you're looking at our global mobility pathways. Let me know if you need an expert to guide you through the process!
                                </p>
                                <button
                                    onClick={() => setModalState('details')}
                                    className="premium-btn"
                                    style={{
                                        alignSelf: 'flex-start', padding: '18px 32px', background: '#13110f', color: '#FFF',
                                        border: 'none', borderRadius: '14px', fontWeight: 700, fontSize: '17px',
                                        cursor: 'pointer', fontFamily: "'Inter', sans-serif", display: 'inline-flex', alignItems: 'center', gap: '12px'
                                    }}
                                >
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    Talk to a Live Agent
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* STANDARD 5-STATE DIALOG (States 2, 3, 4, 5) */
                    <div style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
                        backgroundColor: 'rgba(19, 17, 15, 0.65)', backdropFilter: 'blur(4px)', 
                        zIndex: 1050, display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <div style={{
                            width: '90%', maxWidth: '820px', height: '520px', background: '#FFF', 
                            borderRadius: '24px', display: 'flex', overflow: 'hidden', position: 'relative',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
                        }}>
                            
                            {/* Close Button */}
                            <button 
                                onClick={handleCloseModal}
                                style={{
                                    position: 'absolute', top: '20px', right: '20px', background: 'rgba(19, 17, 15, 0.05)', 
                                    border: 'none', width: '36px', height: '36px', borderRadius: '50%', 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                    cursor: 'pointer', zIndex: 10, transition: 'background 0.2s'
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#13110f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            {/* LEFT COLUMN: Identity Panel */}
                            <div style={{ width: '38%', background: '#13110f', color: '#fff', padding: '40px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 12px', background: 'rgba(255,255,255,0.08)', borderRadius: '20px', marginBottom: '25px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <span style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%', display: 'inline-block' }}></span>
                                        <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', fontFamily: "'Inter', sans-serif" }}>AI ACTIVE</span>
                                    </div>
                                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '28px', fontWeight: 700, lineHeight: 1.25, marginBottom: '15px' }}>Meet Bunmi</h2>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Your personal AI Mobility Advisor designed to map your immigration profile to global pathways.</p>
                                </div>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <img 
                                        src="/assets/expert-bunmi-BGTZe3Yq.jpg" 
                                        alt="Bunmi" 
                                        style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }}
                                    />
                                    <div>
                                        <div style={{ fontSize: '16px', fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>Bunmi from Vesti</div>
                                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif" }}>Immigration Specialist</div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Interactive Workspaces */}
                            <div style={{ width: '62%', padding: '45px', display: 'flex', flexDirection: 'column', position: 'relative' }}>

                            {/* STATE 2: CONTACT DETAILS FORM */}
                            {modalState === 'details' && (
                                <form onSubmit={handleDetailsSubmit} style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: 700, color: '#13110f', marginBottom: '8px' }}>Introduce Yourself</h3>
                                    <p style={{ fontFamily: "'Inter', sans-serif", color: '#718096', fontSize: '14px', marginBottom: '20px' }}>Let's grab your basic info so Bunmi can customize your visa results.</p>
                                    
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#4A5568', marginBottom: '6px', fontFamily: "'Inter', sans-serif" }}>FULL NAME</label>
                                            <input 
                                                type="text" 
                                                required
                                                placeholder="e.g. John Doe"
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                                style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', fontFamily: "'Inter', sans-serif" }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#4A5568', marginBottom: '6px', fontFamily: "'Inter', sans-serif" }}>EMAIL ADDRESS</label>
                                            <input 
                                                type="email" 
                                                required
                                                placeholder="e.g. john@example.com"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', fontFamily: "'Inter', sans-serif" }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#4A5568', marginBottom: '6px', fontFamily: "'Inter', sans-serif" }}>CURRENT OCCUPATION</label>
                                            <input 
                                                type="text" 
                                                required
                                                placeholder="e.g. Software Engineer / Researcher"
                                                value={occupation}
                                                onChange={e => setOccupation(e.target.value)}
                                                style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', fontFamily: "'Inter', sans-serif" }}
                                            />
                                        </div>
                                    </div>

                                    <button 
                                        type="submit"
                                        style={{
                                            alignSelf: 'flex-start', padding: '14px 30px', background: '#13110f', color: '#FFF', 
                                            border: 'none', borderRadius: '10px', fontWeight: 600, fontSize: '15px',
                                            cursor: 'pointer', fontFamily: "'Inter', sans-serif", transition: 'background-color 0.2s'
                                        }}
                                        onMouseOver={e => e.currentTarget.style.backgroundColor = '#2d2a25'}
                                        onMouseOut={e => e.currentTarget.style.backgroundColor = '#13110f'}
                                    >
                                        Next: Select Scan Path
                                    </button>
                                </form>
                            )}

                            {/* STATE 2b: PATH SELECTION */}
                            {modalState === 'select' && (
                                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: 700, color: '#13110f', marginBottom: '8px' }}>Select Scan Method</h3>
                                    <p style={{ fontFamily: "'Inter', sans-serif", color: '#718096', fontSize: '14px', marginBottom: '25px' }}>Choose how you'd like Bunmi to scan your professional qualifications.</p>
                                    
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '25px' }}>
                                        <div 
                                            onClick={() => handleStartScan('LinkedIn')}
                                            style={{ padding: '20px', border: '1px solid #E2E8F0', borderRadius: '12px', cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s' }}
                                            onMouseOver={e => { e.currentTarget.style.borderColor = '#13110f'; e.currentTarget.style.background = '#F8FAFC'; }}
                                            onMouseOut={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = 'transparent'; }}
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#0A66C2" style={{ marginBottom: '10px' }}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                            <div style={{ fontWeight: 600, fontSize: '15px', color: '#13110f', fontFamily: "'Outfit', sans-serif" }}>Connect LinkedIn</div>
                                            <div style={{ fontSize: '11px', color: '#718096', marginTop: '4px', fontFamily: "'Inter', sans-serif" }}>Parse profile instantly</div>
                                        </div>
                                        
                                        <div 
                                            onClick={() => handleStartScan('Resume PDF')}
                                            style={{ padding: '20px', border: '1px solid #E2E8F0', borderRadius: '12px', cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s' }}
                                            onMouseOver={e => { e.currentTarget.style.borderColor = '#13110f'; e.currentTarget.style.background = '#F8FAFC'; }}
                                            onMouseOut={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = 'transparent'; }}
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E53E3E" strokeWidth="2" style={{ marginBottom: '10px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                                            <div style={{ fontWeight: 600, fontSize: '15px', color: '#13110f', fontFamily: "'Outfit', sans-serif" }}>Upload Resume</div>
                                            <div style={{ fontSize: '11px', color: '#718096', marginTop: '4px', fontFamily: "'Inter', sans-serif" }}>Drag and drop PDF/DOCX</div>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => handleStartScan('Manual Details')}
                                        style={{
                                            alignSelf: 'center', background: 'none', border: 'none', color: '#4A5568', 
                                            fontWeight: 600, fontSize: '13px', textDecoration: 'underline', 
                                            cursor: 'pointer', fontFamily: "'Inter', sans-serif"
                                        }}
                                    >
                                        Or enter qualifications manually
                                    </button>
                                </div>
                            )}

                            {/* STATE 3: SCANNING */}
                            {modalState === 'scanning' && (
                                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '4px solid #E2E8F0', borderTopColor: '#13110f', animation: 'spin 1s linear infinite', marginBottom: '25px' }}></div>
                                    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 700, color: '#13110f', marginBottom: '10px' }}>Analyzing Credentials</h3>
                                    <p style={{ fontFamily: "'Inter', sans-serif", color: '#718096', fontSize: '15px', maxWidth: '380px' }}>{scanMessage}</p>
                                </div>
                            )}

                            {/* STATE 4: REPORT SUMMARY */}
                            {modalState === 'report' && (
                                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: 700, color: '#13110f', marginBottom: '5px' }}>Your Visa Eligibility Report</h3>
                                    <p style={{ fontFamily: "'Inter', sans-serif", color: '#718096', fontSize: '14px', marginBottom: '20px' }}>Matched global immigration pathways based on your credentials.</p>
                                    
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '25px' }}>
                                        {[
                                            { title: 'USA EB-1A (Extraordinary Ability)', match: '92% Match', status: 'Excellent Fit', color: '#10B981' },
                                            { title: 'USA EB-2 NIW (National Interest Waiver)', match: '85% Match', status: 'Strong Fit', color: '#10B981' },
                                            { title: 'Canada Express Entry (Federal Skilled Worker)', match: '78% Match', status: 'Eligible', color: '#3B82F6' }
                                        ].map((route, i) => (
                                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', border: '1px solid #E2E8F0', borderRadius: '10px' }}>
                                                <div>
                                                    <div style={{ fontWeight: 600, fontSize: '14px', color: '#13110f', fontFamily: "'Outfit', sans-serif" }}>{route.title}</div>
                                                    <div style={{ fontSize: '11px', color: '#718096', marginTop: '2px', fontFamily: "'Inter', sans-serif" }}>{route.status}</div>
                                                </div>
                                                <div style={{ fontWeight: 700, fontSize: '15px', color: route.color, fontFamily: "'Outfit', sans-serif" }}>{route.match}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <button 
                                        onClick={() => setModalState('chat')}
                                        style={{
                                            alignSelf: 'flex-start', padding: '14px 30px', background: '#13110f', color: '#FFF', 
                                            border: 'none', borderRadius: '10px', fontWeight: 600, fontSize: '15px',
                                            cursor: 'pointer', fontFamily: "'Inter', sans-serif", transition: 'background-color 0.2s'
                                        }}
                                        onMouseOver={e => e.currentTarget.style.backgroundColor = '#2d2a25'}
                                        onMouseOut={e => e.currentTarget.style.backgroundColor = '#13110f'}
                                    >
                                        Ask Bunmi About These Routes
                                    </button>
                                </div>
                            )}

                            {/* STATE 5: CHAT SCREEN */}
                            {modalState === 'chat' && (
                                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    {/* Messages Viewport */}
                                    <div style={{ flex: 1, overflowY: 'auto', paddingRight: '5px', marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {chatMessages.map((msg, i) => (
                                            <div 
                                                key={i} 
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '8px',
                                                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                                    maxWidth: '85%'
                                                }}
                                            >
                                                {msg.sender === 'agent' && (
                                                    <img 
                                                        src="/assets/expert-bunmi-BGTZe3Yq.jpg" 
                                                        alt="Bunmi avatar" 
                                                        style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, marginTop: '2px', border: '1px solid rgba(0,0,0,0.05)' }}
                                                    />
                                                )}
                                                <div 
                                                    style={{
                                                        padding: '12px 16px',
                                                        borderRadius: msg.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                                                        background: msg.sender === 'user' ? '#13110f' : '#F0F2F5',
                                                        color: msg.sender === 'user' ? '#FFF' : '#13110f',
                                                        fontSize: '14px',
                                                        fontFamily: "'Inter', sans-serif",
                                                        lineHeight: 1.5
                                                    }}
                                                >
                                                    {msg.text}
                                                </div>
                                            </div>
                                        ))}
                                        <div ref={chatEndRef}></div>
                                    </div>

                                    {/* Message Input Form */}
                                    <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '8px' }}>
                                        <input 
                                            type="text" 
                                            placeholder="Ask Bunmi a question..."
                                            value={userInput}
                                            onChange={e => setUserInput(e.target.value)}
                                            style={{ flex: 1, padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '14px', fontFamily: "'Inter', sans-serif" }}
                                        />
                                        <button 
                                            type="submit"
                                            style={{
                                                padding: '12px 20px', background: '#13110f', color: '#FFF', 
                                                border: 'none', borderRadius: '10px', fontWeight: 600, fontSize: '14px',
                                                cursor: 'pointer', fontFamily: "'Inter', sans-serif"
                                            }}
                                        >
                                            Send
                                        </button>
                                    </form>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            )
        )}
        </>
    );
};

export default AgentModal;
