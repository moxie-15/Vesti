import React from 'react';
import { Link } from 'react-router-dom';

const LegalCommandCenter = () => {
    const jurisdiction = 'Nigeria & US Global';

    const actionCards = [
        {
            icon: '🗡',
            title: 'Ask Zyra',
            desc: 'Describe a situation',
            link: '/zyra'
        },
        {
            icon: '📄',
            title: 'Draft a document',
            desc: '16+ templates',
            link: '/scan-profile'
        },
        {
            icon: '⚖',
            title: 'Start an action',
            desc: 'Pick a problem',
            link: '/scan-profile'
        },
        {
            icon: '🏢',
            title: 'Form a U.S. company',
            desc: 'Delaware or Texas · EIN included',
            link: '/countries/usa'
        }
    ];

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            {/* Header Hero */}
            <section style={{
                backgroundColor: '#F3F6F3',
                padding: '70px 20px 60px',
                borderBottom: '1px solid #E2E8F0'
            }}>
                <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '11.5px',
                        fontWeight: '800',
                        color: '#475569',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '16px'
                    }}>
                        <span>LEGAL COMMAND CENTER</span> • <span style={{ color: '#00A544' }}>{jurisdiction.toUpperCase()}</span>
                    </div>

                    <h1 style={{
                        fontFamily: "'Newsreader', serif",
                        fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                        fontWeight: '400',
                        color: '#0F172A',
                        margin: '0 0 12px',
                        letterSpacing: '-1px',
                        lineHeight: 1.1
                    }}>
                        Good morning.
                    </h1>

                    <p style={{
                        fontSize: '1.15rem',
                        color: '#475569',
                        margin: '0 0 40px',
                        maxWidth: '650px',
                        lineHeight: '1.6'
                    }}>
                        Your matters, your documents, Zyra. Tuned for Nigerian law & global US incorporation.
                    </p>

                    {/* 4 Top Quick Action Cards (Matching Image 2) */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '16px'
                    }}>
                        {actionCards.map((card, idx) => (
                            <Link
                                key={idx}
                                to={card.link}
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '20px',
                                    padding: '24px',
                                    border: '1px solid #E2E8F0',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                                    transition: 'all 0.2s ease',
                                    display: 'block'
                                }}
                                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ fontSize: '24px', marginBottom: '16px' }}>{card.icon}</div>
                                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: '700', color: '#0F172A', margin: '0 0 4px' }}>
                                    {card.title}
                                </h3>
                                <span style={{ fontSize: '13px', color: '#64748B' }}>{card.desc}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Body */}
            <main style={{ maxWidth: '1180px', margin: '50px auto 100px', padding: '0 20px' }}>
                {/* Company Incorporation Section (Matching Image 2) */}
                <div style={{ marginBottom: '50px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                        <div>
                            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '32px', fontWeight: '400', color: '#0F172A', margin: '0 0 6px' }}>
                                Company incorporation
                            </h2>
                            <p style={{ fontSize: '14.5px', color: '#64748B', margin: 0 }}>
                                Form your U.S. C-Corp or LLC in Delaware or Texas. EIN included.
                            </p>
                        </div>
                        <Link to="/countries/usa" style={{ color: '#0F172A', fontWeight: '700', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            Start ↗
                        </Link>
                    </div>

                    {/* 3 Metric Cards (Matching Image 2) */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                        <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <span style={{ fontSize: '20px' }}>🏛</span>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px' }}>FORMS STARTED</span>
                            </div>
                            <div style={{ fontSize: '36px', fontWeight: '900', color: '#0F172A', fontFamily: "'Outfit', sans-serif", marginBottom: '4px' }}>0</div>
                            <span style={{ fontSize: '13px', color: '#64748B' }}>Drafts you've begun.</span>
                        </div>

                        <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <span style={{ fontSize: '20px', color: '#00A544' }}>✓</span>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px' }}>FORMS COMPLETED</span>
                            </div>
                            <div style={{ fontSize: '36px', fontWeight: '900', color: '#0F172A', fontFamily: "'Outfit', sans-serif", marginBottom: '4px' }}>0</div>
                            <span style={{ fontSize: '13px', color: '#64748B' }}>All required fields filled — ready to pay.</span>
                        </div>

                        <div style={{ backgroundColor: '#EBF6EE', padding: '24px', borderRadius: '20px', border: '1px solid #C4E8CE' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <span style={{ fontSize: '20px', color: '#00A544' }}>💳</span>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: '#00A544', textTransform: 'uppercase', letterSpacing: '1px' }}>FORMS PAID FOR</span>
                            </div>
                            <div style={{ fontSize: '36px', fontWeight: '900', color: '#00A544', fontFamily: "'Outfit', sans-serif", marginBottom: '4px' }}>0</div>
                            <span style={{ fontSize: '13px', color: '#0F172A' }}>Payment received. We file within 3–5 business days.</span>
                        </div>
                    </div>
                </div>

                {/* My Matters Section */}
                <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                        <div>
                            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '32px', fontWeight: '400', color: '#0F172A', margin: '0 0 4px' }}>
                                My Matters
                            </h2>
                            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>Open legal matters.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
                                ✏ Refresh summaries
                            </button>
                            <Link to="/zyra" style={{ fontSize: '13px', color: '#0F172A', fontWeight: '700', textDecoration: 'none' }}>
                                + Start a matter
                            </Link>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '60px 24px', textAlign: 'center' }}>
                        <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '22px', fontWeight: '400', color: '#0F172A', margin: '0 0 10px' }}>
                            No open matters yet
                        </h3>
                        <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 24px' }}>
                            Describe a situation with <span style={{ color: '#00A544', fontWeight: '600' }}>Zyra</span> — saved matters appear here.
                        </p>
                        <Link to="/zyra" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            backgroundColor: '#0F172A', color: '#FFF',
                            padding: '12px 24px', borderRadius: '50px',
                            textDecoration: 'none', fontWeight: '700', fontSize: '14px'
                        }}>
                            Open Zyra ↗
                        </Link>
                    </div>
                </div>

                {/* Documents Section */}
                <div style={{ marginBottom: '50px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                        <div>
                            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '32px', fontWeight: '400', color: '#0F172A', margin: '0 0 4px' }}>
                                Documents
                            </h2>
                            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
                                Drafted, saved, <span style={{ color: '#00A544', fontWeight: '600' }}>ready</span> to send.
                            </p>
                        </div>
                        <Link to="/scan-profile" style={{ fontSize: '13px', color: '#0F172A', fontWeight: '700', textDecoration: 'none' }}>
                            All documents ↗
                        </Link>
                    </div>

                    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '60px 24px', textAlign: 'center' }}>
                        <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '22px', fontWeight: '400', color: '#0F172A', margin: '0 0 10px' }}>
                            No documents yet
                        </h3>
                        <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 24px' }}>
                            Pick a template and draft your <span style={{ color: '#00A544', fontWeight: '600' }}>first document</span>.
                        </p>
                        <Link to="/scan-profile" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            backgroundColor: '#0F172A', color: '#FFF',
                            padding: '12px 24px', borderRadius: '50px',
                            textDecoration: 'none', fontWeight: '700', fontSize: '14px'
                        }}>
                            Browse templates ↗
                        </Link>
                    </div>
                </div>

                {/* Your Conversations Section */}
                <div style={{ marginBottom: '80px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                        <div>
                            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '32px', fontWeight: '400', color: '#0F172A', margin: '0 0 4px' }}>
                                Your conversations
                            </h2>
                            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
                                Pick up where you left off with the Vesti team.
                            </p>
                        </div>
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('openAgentModal'))}
                            style={{ fontSize: '13px', color: '#0F172A', fontWeight: '700', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            + Start a new chat
                        </button>
                    </div>

                    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '60px 24px', textAlign: 'center' }}>
                        <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '22px', fontWeight: '400', color: '#0F172A', margin: '0 0 10px' }}>
                            No previous chats yet
                        </h3>
                        <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 24px', maxWidth: '440px', lineHeight: '1.6', marginLeft: 'auto', marginRight: 'auto' }}>
                            When you message a Vesti expert, your conversations will appear here so you can pick up right where you left off.
                        </p>
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('openAgentModal'))}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                backgroundColor: 'transparent', color: '#0F172A',
                                padding: '11px 22px', borderRadius: '50px',
                                border: '1.5px solid #CBD5E1',
                                cursor: 'pointer', fontWeight: '700', fontSize: '14px',
                                fontFamily: "'Inter', sans-serif"
                            }}
                        >
                            Start a chat ↗
                        </button>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default LegalCommandCenter;
