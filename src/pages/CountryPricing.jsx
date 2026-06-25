import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getCountryData } from '../data/countriesData';

const CountryPricing = () => {
    const { id } = useParams();
    const country = getCountryData(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!country) {
        return <Navigate to="/countries" replace />;
    }

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, padding: '40px 20px' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '42px', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Simple, Transparent Pricing</h1>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', color: '#64748b' }}>Select a package for your {country.name} immigration journey.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                        {/* Basic Package */}
                        <div style={{ background: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>Clarity Call</h3>
                            <div style={{ fontSize: '42px', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>${country.pricing.basic}<span style={{ fontSize: '16px', color: '#64748b', fontWeight: '500' }}>/one-time</span></div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', color: '#475569', lineHeight: '1.8', flex: 1 }}>
                                <li>✓ 30-minute expert consultation</li>
                                <li>✓ Profile assessment</li>
                                <li>✓ General requirements overview</li>
                            </ul>
                            <Link to={`/countries/${id}/payment?plan=basic`} style={{ display: 'block', padding: '14px', textAlign: 'center', background: '#f1f5f9', color: '#0f172a', borderRadius: '12px', textDecoration: 'none', fontWeight: '600' }}>
                                Select Plan
                            </Link>
                        </div>

                        {/* Premium Package */}
                        <div style={{ background: country.primaryColor, padding: '40px', borderRadius: '24px', boxShadow: `0 20px 40px ${country.primaryColor}40`, color: 'white', display: 'flex', flexDirection: 'column', transform: 'scale(1.05)' }}>
                            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', alignSelf: 'flex-start', marginBottom: '15px' }}>Most Popular</div>
                            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Full Application Support</h3>
                            <div style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>${country.pricing.premium}<span style={{ fontSize: '16px', opacity: 0.8, fontWeight: '500' }}>/one-time</span></div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', lineHeight: '1.8', flex: 1, opacity: 0.9 }}>
                                <li>✓ Everything in Clarity Call</li>
                                <li>✓ Dedicated case manager</li>
                                <li>✓ Document review and filing</li>
                                <li>✓ Priority email support</li>
                            </ul>
                            <Link to={`/countries/${id}/payment?plan=premium`} style={{ display: 'block', padding: '14px', textAlign: 'center', background: 'white', color: country.primaryColor, borderRadius: '12px', textDecoration: 'none', fontWeight: '700' }}>
                                Select Premium
                            </Link>
                        </div>
                    </div>
                    
                    <div style={{ textAlign: 'center' }}>
                        <Link to={`/countries/${id}/clarity`} style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>
                            ← Back to Clarity Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryPricing;
