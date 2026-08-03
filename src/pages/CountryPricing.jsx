import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getCountryData } from '../data/countriesData';
import { THEME } from '../constants';

const CountryPricing = () => {
    const { id } = useParams();
    const country = getCountryData(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!country) {
        return <Navigate to="/countries" replace />;
    }

    // Always use Vesti Dark Chocolate Theme
    const brandColor = THEME.DARK_CHOCOLATE;

    return (
        <div style={{ backgroundColor: THEME.PAGE_BG_LIGHT, minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ padding: '20px 20px 30px' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    
                    {/* Compact Header */}
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '32px', fontWeight: '800', color: THEME.DARK_CHOCOLATE, margin: '0 0 6px 0' }}>
                            Simple, Transparent Pricing
                        </h1>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: THEME.TEXT_MUTED, margin: 0 }}>
                            Select a package for your {country.name} immigration journey.
                        </p>
                    </div>

                    {/* Compact Pricing Cards Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px', alignItems: 'stretch' }}>
                        
                        {/* Basic Package */}
                        <div style={{ 
                            background: '#ffffff', 
                            padding: '24px 28px', 
                            borderRadius: '20px', 
                            border: `1px solid ${THEME.BORDER_LIGHT}`, 
                            boxShadow: '0 10px 25px rgba(0,0,0,0.02)', 
                            display: 'flex', 
                            flexDirection: 'column' 
                        }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', color: THEME.DARK_CHOCOLATE, marginBottom: '6px' }}>Clarity Call</h3>
                            <div style={{ fontSize: '34px', fontWeight: '800', color: THEME.DARK_CHOCOLATE, marginBottom: '16px' }}>
                                ${country.pricing.basic}
                                <span style={{ fontSize: '14px', color: THEME.TEXT_MUTED, fontWeight: '500' }}>/one-time</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', color: '#475569', lineHeight: '1.7', fontSize: '13px', flex: 1 }}>
                                <li>✓ 30-minute expert consultation</li>
                                <li>✓ Profile assessment</li>
                                <li>✓ General requirements overview</li>
                            </ul>
                            <Link 
                                to={`/countries/${id}/payment?plan=basic`} 
                                style={{ 
                                    display: 'block', 
                                    padding: '12px', 
                                    textAlign: 'center', 
                                    background: '#f1f5f9', 
                                    color: THEME.DARK_CHOCOLATE, 
                                    borderRadius: '10px', 
                                    textDecoration: 'none', 
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    transition: 'all 0.2s'
                                }}
                            >
                                Select Plan
                            </Link>
                        </div>

                        {/* Premium Package - Dark Chocolate Theme */}
                        <div style={{ 
                            background: brandColor, 
                            padding: '24px 28px', 
                            borderRadius: '20px', 
                            boxShadow: '0 15px 35px rgba(19, 17, 15, 0.25)', 
                            color: '#ffffff', 
                            display: 'flex', 
                            flexDirection: 'column',
                            position: 'relative'
                        }}>
                            <div style={{ 
                                background: 'rgba(255,255,255,0.18)', 
                                padding: '4px 10px', 
                                borderRadius: '14px', 
                                fontSize: '10px', 
                                fontWeight: '700', 
                                textTransform: 'uppercase', 
                                alignSelf: 'flex-start', 
                                marginBottom: '10px',
                                letterSpacing: '0.5px'
                            }}>
                                Most Popular
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '6px' }}>Full Application Support</h3>
                            <div style={{ fontSize: '34px', fontWeight: '800', marginBottom: '16px' }}>
                                ${country.pricing.premium}
                                <span style={{ fontSize: '14px', opacity: 0.8, fontWeight: '500' }}>/one-time</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', lineHeight: '1.7', fontSize: '13px', flex: 1, opacity: 0.95 }}>
                                <li>✓ Everything in Clarity Call</li>
                                <li>✓ Dedicated case manager</li>
                                <li>✓ Document review and filing</li>
                                <li>✓ Priority email support</li>
                            </ul>
                            <Link 
                                to={`/countries/${id}/payment?plan=premium`} 
                                style={{ 
                                    display: 'block', 
                                    padding: '12px', 
                                    textAlign: 'center', 
                                    background: '#ffffff', 
                                    color: brandColor, 
                                    borderRadius: '10px', 
                                    textDecoration: 'none', 
                                    fontWeight: '800',
                                    fontSize: '14px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    transition: 'all 0.2s'
                                }}
                            >
                                Select Premium
                            </Link>
                        </div>

                    </div>
                    
                    {/* Back Link */}
                    <div style={{ textAlign: 'center' }}>
                        <Link to={`/countries/${id}/clarity`} style={{ color: THEME.TEXT_MUTED, textDecoration: 'none', fontWeight: '600', fontSize: '13px' }}>
                            ← Back to Clarity Details
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CountryPricing;
