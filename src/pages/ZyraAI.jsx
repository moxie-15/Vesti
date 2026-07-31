import React, { useState, useRef, useEffect } from 'react';

const ZyraAI = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isSimulating, setIsSimulating] = useState(false);
    const chatEndRef = useRef(null);

    const promptCards = [
        {
            title: 'Draft an RFE response outline for an EB-2 NIW case.',
            btnText: 'Open matters →',
            actionPrompt: 'Draft an RFE response outline for an EB-2 NIW case focusing on substantial merit and national importance.'
        },
        {
            title: 'What evidence is weakest across my active matters?',
            btnText: 'Review activity →',
            actionPrompt: 'Analyze my active petition files and tell me which criteria need stronger citation evidence.'
        },
        {
            title: 'Give me a filing checklist for an O-1A petition.',
            btnText: 'Open documents →',
            actionPrompt: 'Provide a complete USCIS filing checklist for an O-1A extraordinary ability petition.'
        },
        {
            title: 'Summarize recent USCIS policy updates that affect my caseload.',
            btnText: 'Back to matters →',
            actionPrompt: 'Summarize the latest USCIS policy manual updates regarding STEM degree holders and EB-2 NIW endeavors.'
        }
    ];

    const handlePromptClick = (promptText) => {
        handleSendMessage(promptText);
    };

    const handleSendMessage = (textToSend = input) => {
        const text = textToSend.trim();
        if (!text) return;

        const newMsg = { sender: 'user', text };
        setMessages(prev => [...prev, newMsg]);
        setInput('');
        setIsSimulating(true);

        setTimeout(() => {
            let responseText = `Here is your Zyra AI Legal strategy synthesis:\n\n1. **Petition Context**: Analyzed request for "${text}".\n2. **Strategy Action**: Referenced 10k+ successful USCIS & Tech Nation petition precedents.\n3. **Recommended Next Steps**: Ensure all recommendation letters highlight specific, measurable industry impact with citation counts.`;
            
            if (text.toLowerCase().includes('eb-2') || text.toLowerCase().includes('rfe')) {
                responseText = `### EB-2 NIW RFE Defense Outline:\n- **Dhanasar Prong 1**: Provide expert opinion letters demonstrating that your endeavor has substantial merit & national scope.\n- **Dhanasar Prong 2**: Highlight 5 key project milestones, press features, and employer impact letters showing you are well-positioned to advance the endeavor.\n- **Dhanasar Prong 3**: Demonstrate that on balance, waiving the job offer requirement benefits the United States.`;
            } else if (text.toLowerCase().includes('o-1') || text.toLowerCase().includes('checklist')) {
                responseText = `### O-1A Petition Filing Checklist:\n- Form I-129 with O/P Supplement\n- Form G-28 (Notice of Appearance)\n- Petitioner Support Letter\n- Written Advisory Opinion from Appropriate Peer Group / Union\n- Copy of Employment Contract / Deal Memo\n- Evidence of 3+ USCIS Criteria (Awards, Publications, High Salary, Critical Role, Media Coverage)`;
            } else if (text.toLowerCase().includes('weakest') || text.toLowerCase().includes('evidence')) {
                responseText = `### Case Evidence Gap Analysis:\n- **Media Recognition**: 2 items found (Target: 4 items, +11% score lift potential).\n- **Original Contributions**: 1 patent draft uploaded.\n- **Recommendation**: Secure 2 additional trade publication interviews or tech podcast features.`;
            }

            setMessages(prev => [...prev, { sender: 'zyra', text: responseText }]);
            setIsSimulating(false);
        }, 1200);
    };

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            {/* Header Hero Section */}
            <section style={{
                backgroundColor: '#F3F6F3',
                padding: '80px 20px 120px',
                textAlign: 'center',
                borderBottom: '1px solid #E2E8F0'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: '800',
                        color: '#00A544',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '16px'
                    }}>
                        <span>🗡 ZYRA</span> • <span>LEGAL & MIGRATION OS</span>
                    </div>

                    <h1 style={{
                        fontFamily: "'Newsreader', serif",
                        fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                        fontWeight: '400',
                        color: '#0F172A',
                        margin: '0 0 16px',
                        letterSpacing: '-1px',
                        lineHeight: 1.1
                    }}>
                        Sharpen strategy. Ship filings.
                    </h1>

                    <p style={{
                        fontSize: '1.15rem',
                        color: '#475569',
                        margin: '0 auto 40px',
                        maxWidth: '600px',
                        lineHeight: '1.6'
                    }}>
                        Ask about matters, filings, RFEs, or precedent. Your caseload context is loaded.
                    </p>

                    {/* 4 Interactive Cards Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                        gap: '16px',
                        textAlign: 'left',
                        marginBottom: '40px'
                    }}>
                        {promptCards.map((card, idx) => (
                            <div
                                key={idx}
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '20px',
                                    padding: '24px',
                                    border: '1px solid #E2E8F0',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '130px'
                                }}
                            >
                                <p style={{
                                    fontFamily: "'Newsreader', serif",
                                    fontSize: '18px',
                                    color: '#0F172A',
                                    margin: '0 0 20px',
                                    lineHeight: '1.4'
                                }}>
                                    {card.title}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <button
                                        onClick={() => handlePromptClick(card.actionPrompt)}
                                        style={{
                                            padding: '8px 16px',
                                            backgroundColor: '#0F172A',
                                            color: '#FFF',
                                            border: 'none',
                                            borderRadius: '50px',
                                            fontWeight: '700',
                                            fontSize: '12.5px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {card.btnText}
                                    </button>

                                    <button
                                        onClick={() => handlePromptClick(card.actionPrompt)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#64748B',
                                            fontWeight: '600',
                                            fontSize: '13px',
                                            cursor: 'pointer',
                                            textDecoration: 'underline'
                                        }}
                                    >
                                        Simulate with Zyra
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Chat Response Stream View */}
            <main style={{ maxWidth: '850px', margin: '40px auto 140px', padding: '0 20px' }}>
                {messages.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    gap: '12px',
                                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%'
                                }}
                            >
                                {msg.sender === 'zyra' && (
                                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#0F172A', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>
                                        🗡
                                    </div>
                                )}

                                <div style={{
                                    padding: '16px 20px',
                                    borderRadius: msg.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                                    backgroundColor: msg.sender === 'user' ? '#0F172A' : '#FFFFFF',
                                    color: msg.sender === 'user' ? '#FFFFFF' : '#0F172A',
                                    border: msg.sender === 'user' ? 'none' : '1px solid #E2E8F0',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                                    fontSize: '14.5px',
                                    lineHeight: '1.6',
                                    whiteSpace: 'pre-line'
                                }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isSimulating && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#00A544', fontWeight: '700', fontSize: '13px' }}>
                                <span>🗡 Zyra AI is reasoning over USCIS precedent...</span>
                            </div>
                        )}

                        <div ref={chatEndRef}></div>
                    </div>
                )}
            </main>

            {/* Bottom Floating Input Bar (Matching Image 2) */}
            <div style={{
                position: 'fixed',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '740px',
                zIndex: 1000
            }}>
                <form
                    onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '50px',
                        padding: '10px 14px 10px 24px',
                        boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
                        border: '1px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}
                >
                    <input
                        type="text"
                        placeholder="Ask about a matter, RFE, or filing strategy..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        style={{
                            flex: 1,
                            border: 'none',
                            outline: 'none',
                            fontSize: '15px',
                            color: '#0F172A',
                            fontFamily: "'Inter', sans-serif"
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '50%',
                            backgroundColor: '#A3A3A3',
                            color: '#FFF',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: '700',
                            transition: 'background-color 0.2s'
                        }}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = '#0F172A'}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = '#A3A3A3'}
                    >
                        ↑
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ZyraAI;
