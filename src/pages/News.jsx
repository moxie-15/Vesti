import React, { useState } from 'react';

const newsArticlesData = [
    {
        id: 1,
        title: 'USCIS Announces New O-1 Visa Processing Times & Fee Guidance',
        category: 'Policy Update',
        categoryColor: '#00A544',
        date: 'July 28, 2026',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        excerpt: 'The United States Citizenship and Immigration Services has released an updated schedule for extraordinary ability visas, streamlining petition reviews for tech and research leaders.'
    },
    {
        id: 2,
        title: 'Introducing the Vesti AI Eligibility Scanner for Global Talent',
        category: 'Product Release',
        categoryColor: '#13110F',
        date: 'July 24, 2026',
        readTime: '3 min read',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        excerpt: 'Our new intelligence layer parses over 40+ signals from your resume to instantly match you with EB-1A, NIW, O-1, and Express Entry pathways.'
    },
    {
        id: 3,
        title: 'UK Global Talent Visa: 2026 Policy Changes & Endorsement Criteria',
        category: 'Global Mobility',
        categoryColor: '#FF5A1F',
        date: 'July 18, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        excerpt: 'Everything you need to know about the new endorsement criteria for tech founders, AI researchers, and digital professionals looking to move to the UK.'
    },
    {
        id: 4,
        title: 'Canada Express Entry Draw: Category-Based Selection for STEM Experts',
        category: 'Policy Update',
        categoryColor: '#00A544',
        date: 'July 10, 2026',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        excerpt: 'IRCC issues fresh rounds of invitations for skilled workers in science, technology, engineering, and mathematics pathways with reduced CRS cutoffs.'
    },
    {
        id: 5,
        title: 'How Vesti Proof of Funds Simplifies Visa Financial Verification',
        category: 'Product Release',
        categoryColor: '#13110F',
        date: 'July 02, 2026',
        readTime: '3 min read',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        excerpt: 'Learn how Vesti Wallet allows applicants to deposit, convert, and generate embassy-approved proof of financial capability seamlessly.'
    },
    {
        id: 6,
        title: 'Spain & France Expand Digital Nomad & Tech Founder Visa Routes',
        category: 'Global Mobility',
        categoryColor: '#FF5A1F',
        date: 'June 25, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        excerpt: 'European hubs compete for international talent with updated tax incentives and fast-tracked residency for remote workers and startup founders.'
    }
];

const News = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleCount] = useState(6);

    const categories = ['All', 'Policy Update', 'Product Release', 'Global Mobility'];

    const filteredArticles = newsArticlesData.filter(article => {
        const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            {/* Hero Header */}
            <section style={{
                backgroundColor: '#030B17',
                padding: '80px 20px 90px',
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

                <div style={{ maxWidth: '1140px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
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
                            Vesti Newsroom & Insights
                        </span>
                    </div>

                    <h1 style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                        fontWeight: '800',
                        lineHeight: '1.15',
                        marginBottom: '16px'
                    }}>
                        Global Mobility & <span style={{
                            background: 'linear-gradient(135deg, #00A544 0%, #34D399 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>Immigration Updates</span>
                    </h1>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'rgba(255, 255, 255, 0.75)',
                        maxWidth: '620px',
                        margin: '0 auto 36px',
                        lineHeight: '1.6'
                    }}>
                        Stay informed with policy breakdowns, product updates, and expert immigration insights curated by Vesti.
                    </p>

                    {/* Search & Filter Bar */}
                    <div style={{
                        maxWidth: '750px',
                        margin: '0 auto',
                        background: 'rgba(255, 255, 255, 0.06)',
                        backdropFilter: 'blur(16px)',
                        borderRadius: '20px',
                        padding: '10px 14px',
                        border: '1px solid rgba(255, 255, 255, 0.12)'
                    }}>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 220px', position: 'relative' }}>
                                <svg style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.45)' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                                <input
                                    type="text"
                                    placeholder="Search news, policy changes, or guides..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '12px 14px 12px 40px',
                                        borderRadius: '14px',
                                        border: '1px solid rgba(255, 255, 255, 0.15)',
                                        background: 'rgba(0, 0, 0, 0.3)',
                                        color: '#FFF',
                                        fontSize: '13.5px',
                                        outline: 'none',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', padding: '2px' }}>
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        style={{
                                            padding: '8px 14px',
                                            borderRadius: '12px',
                                            fontSize: '12.5px',
                                            fontWeight: '600',
                                            border: 'none',
                                            cursor: 'pointer',
                                            whiteSpace: 'nowrap',
                                            backgroundColor: selectedCategory === cat ? '#00A544' : 'rgba(255, 255, 255, 0.08)',
                                            color: selectedCategory === cat ? '#FFFFFF' : 'rgba(255, 255, 255, 0.75)',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Articles Grid */}
            <main style={{ maxWidth: '1140px', margin: '-30px auto 80px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                {filteredArticles.length === 0 ? (
                    <div style={{
                        background: '#FFF',
                        borderRadius: '24px',
                        padding: '60px 20px',
                        textAlign: 'center',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', color: '#1E293B', marginBottom: '8px' }}>No articles match your search</h3>
                        <p style={{ color: '#64748B', fontSize: '14px' }}>Try searching for general terms like "USCIS", "Express Entry", or "Visa".</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            style={{
                                marginTop: '16px',
                                padding: '10px 22px',
                                background: '#13110F',
                                color: '#FFF',
                                border: 'none',
                                borderRadius: '12px',
                                fontWeight: '600',
                                fontSize: '13px',
                                cursor: 'pointer'
                            }}
                        >
                            Reset Search Filters
                        </button>
                    </div>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '28px'
                    }}>
                        {filteredArticles.slice(0, visibleCount).map((article) => (
                            <div
                                key={article.id}
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                }}
                            >
                                <div style={{
                                    height: '200px',
                                    background: `url('${article.image}') center/cover no-repeat`,
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '16px',
                                        left: '16px',
                                        backgroundColor: 'rgba(255,255,255,0.95)',
                                        backdropFilter: 'blur(8px)',
                                        padding: '4px 12px',
                                        borderRadius: '50px',
                                        fontSize: '11.5px',
                                        fontWeight: '700',
                                        color: '#0F172A',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                    }}>
                                        {article.category}
                                    </div>
                                </div>

                                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '10px', display: 'flex', gap: '8px' }}>
                                        <span>{article.date}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>

                                    <h3 style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: '19px',
                                        fontWeight: '700',
                                        color: '#0F172A',
                                        marginBottom: '10px',
                                        lineHeight: '1.3'
                                    }}>
                                        {article.title}
                                    </h3>

                                    <p style={{
                                        fontSize: '13px',
                                        color: '#64748B',
                                        lineHeight: '1.55',
                                        marginBottom: '20px',
                                        flex: 1
                                    }}>
                                        {article.excerpt}
                                    </p>

                                    <div style={{
                                        marginTop: 'auto',
                                        paddingTop: '16px',
                                        borderTop: '1px solid #F1F5F9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <span style={{ fontSize: '13px', fontWeight: '700', color: '#00A544', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                            Read Full Article →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Newsletter Subscription Card */}
                <div style={{
                    marginTop: '60px',
                    padding: '40px 30px',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, #030B17 0%, #0F172A 100%)',
                    color: '#FFF',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    boxShadow: '0 20px 40px rgba(3, 11, 23, 0.2)'
                }}>
                    <div>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: '800', marginBottom: '6px' }}>
                            Never miss an immigration update
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', margin: 0 }}>
                            Get real-time alerts on USCIS policy changes, Express Entry draws, and global mobility news.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            style={{
                                padding: '12px 16px',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                background: 'rgba(255,255,255,0.1)',
                                color: '#FFF',
                                fontSize: '13.5px',
                                outline: 'none',
                                minWidth: '240px'
                            }}
                        />
                        <button style={{
                            padding: '12px 24px',
                            backgroundColor: '#00A544',
                            color: '#FFFFFF',
                            borderRadius: '12px',
                            fontWeight: '700',
                            fontSize: '14px',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 8px 20px rgba(0,165,68,0.4)'
                        }}>
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default News;
