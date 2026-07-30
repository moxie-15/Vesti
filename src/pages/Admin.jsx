import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialUsersList = [
    { id: 'USR-8901', name: 'Alex Morgan', occupation: 'Software Engineer', route: 'US EB-1A Extraordinary Ability', status: 'In Review', date: '2026-07-29' },
    { id: 'USR-8902', name: 'Elena Rostova', occupation: 'AI / ML Researcher', route: 'US EB-2 National Interest Waiver', status: 'Approved', date: '2026-07-28' },
    { id: 'USR-8903', name: 'David Chen', occupation: 'Product Founder', route: 'Canada Express Entry (STEM)', status: 'In Review', date: '2026-07-27' },
    { id: 'USR-8904', name: 'Sophia Martinez', occupation: 'Data Scientist', route: 'UK Global Talent Visa', status: 'Pending Evidence', date: '2026-07-26' },
    { id: 'USR-8905', name: 'Michael Thorne', occupation: 'Biotech Scientist', route: 'Australia Subclass 189', status: 'Approved', date: '2026-07-25' }
];

const Admin = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [users] = useState(initialUsersList);
    const [activeTab, setActiveTab] = useState('overview');

    const filteredUsers = users.filter(u =>
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.occupation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', fontFamily: "'Inter', sans-serif", display: 'flex' }}>
            {/* Admin Sidebar Navigation */}
            <aside style={{
                width: '260px',
                backgroundColor: '#030B17',
                color: '#FFF',
                padding: '30px 20px',
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
                    <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        backgroundColor: '#00A544',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '800',
                        fontSize: '18px'
                    }}>
                        V
                    </div>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px' }}>
                        Vesti <span style={{ color: '#00A544' }}>Admin</span>
                    </span>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                        { id: 'overview', label: '📊 Dashboard Overview' },
                        { id: 'assessments', label: '📋 User Assessments' },
                        { id: 'pricing', label: '💳 Pathway Fee Management' },
                        { id: 'settings', label: '⚙ System Settings' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                padding: '12px 16px',
                                borderRadius: '12px',
                                fontSize: '14px',
                                fontWeight: '600',
                                border: 'none',
                                textAlign: 'left',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                backgroundColor: activeTab === tab.id ? 'rgba(0, 165, 68, 0.15)' : 'transparent',
                                color: activeTab === tab.id ? '#34D399' : 'rgba(255,255,255,0.7)'
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'block' }}>
                        ← Back to Main App
                    </Link>
                </div>
            </aside>

            {/* Main Admin Dashboard Viewport */}
            <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
                {/* Header Row */}
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                    <div>
                        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '28px', fontWeight: '800', color: '#0F172A', margin: 0 }}>
                            Admin Command Center
                        </h1>
                        <p style={{ color: '#64748B', fontSize: '14px', margin: '4px 0 0' }}>
                            Manage immigration assessments, candidate applications, and platform operations.
                        </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ position: 'relative', width: '280px' }}>
                            <input
                                type="text"
                                placeholder="Search candidate or route..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px 14px 10px 36px',
                                    borderRadius: '12px',
                                    border: '1px solid #E2E8F0',
                                    fontSize: '13.5px',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                            />
                            <svg style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        </div>

                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#0F172A',
                            color: '#FFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '700',
                            fontSize: '14px'
                        }}>
                            M
                        </div>
                    </div>
                </header>

                {/* Stat Metrics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                    {[
                        { title: 'Total Candidates', value: '12,482', change: '+12% this month', color: '#0F172A' },
                        { title: 'Active AI Scans', value: '843', change: '+8% this month', color: '#00A544' },
                        { title: 'Pending Legal Reviews', value: '156', change: '12 urgent', color: '#E11D48' },
                        { title: 'Completed Petitions', value: '4,920', change: '98.4% success rate', color: '#0A3161' }
                    ].map((stat, i) => (
                        <div key={i} style={{
                            backgroundColor: '#FFFFFF',
                            padding: '20px',
                            borderRadius: '20px',
                            border: '1px solid #E2E8F0',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                        }}>
                            <span style={{ fontSize: '12px', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.title}</span>
                            <div style={{ fontSize: '28px', fontWeight: '800', color: stat.color, margin: '8px 0 4px', fontFamily: "'Outfit', sans-serif" }}>{stat.value}</div>
                            <span style={{ fontSize: '12px', color: '#00A544', fontWeight: '600' }}>{stat.change}</span>
                        </div>
                    ))}
                </div>

                {/* Candidate Assessments Table */}
                <div style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '24px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: '700', color: '#0F172A', margin: 0 }}>
                            Recent Candidate Applications
                        </h3>
                        <span style={{ fontSize: '13px', color: '#64748B' }}>Showing {filteredUsers.length} records</span>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                <th style={{ padding: '12px', fontSize: '12px', color: '#64748B', fontWeight: '700' }}>ID</th>
                                <th style={{ padding: '12px', fontSize: '12px', color: '#64748B', fontWeight: '700' }}>CANDIDATE</th>
                                <th style={{ padding: '12px', fontSize: '12px', color: '#64748B', fontWeight: '700' }}>OCCUPATION</th>
                                <th style={{ padding: '12px', fontSize: '12px', color: '#64748B', fontWeight: '700' }}>TARGET ROUTE</th>
                                <th style={{ padding: '12px', fontSize: '12px', color: '#64748B', fontWeight: '700' }}>STATUS</th>
                                <th style={{ padding: '12px', fontSize: '12px', color: '#64748B', fontWeight: '700' }}>DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map(user => (
                                <tr key={user.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                    <td style={{ padding: '14px 12px', fontSize: '13px', fontWeight: '700', color: '#0F172A' }}>{user.id}</td>
                                    <td style={{ padding: '14px 12px', fontSize: '13.5px', fontWeight: '600', color: '#0F172A' }}>{user.name}</td>
                                    <td style={{ padding: '14px 12px', fontSize: '13px', color: '#64748B' }}>{user.occupation}</td>
                                    <td style={{ padding: '14px 12px', fontSize: '13px', color: '#334155', fontWeight: '500' }}>{user.route}</td>
                                    <td style={{ padding: '14px 12px' }}>
                                        <span style={{
                                            padding: '4px 10px',
                                            borderRadius: '50px',
                                            fontSize: '11.5px',
                                            fontWeight: '700',
                                            backgroundColor: user.status === 'Approved' ? 'rgba(0,165,68,0.1)' : 'rgba(234,179,8,0.1)',
                                            color: user.status === 'Approved' ? '#00A544' : '#D97706'
                                        }}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '14px 12px', fontSize: '12.5px', color: '#94A3B8' }}>{user.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;
