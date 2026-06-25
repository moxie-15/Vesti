import React, { useEffect } from 'react';
import { useParams, Navigate, Link, useSearchParams } from 'react-router-dom';
import { getCountryData } from '../data/countriesData';

const CountryPayment = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const plan = searchParams.get('plan') || 'basic';
    const country = getCountryData(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!country) {
        return <Navigate to="/countries" replace />;
    }

    const planDetails = plan === 'premium' ? { name: 'Full Application Support', price: country.pricing.premium } : { name: 'Clarity Call', price: country.pricing.basic };

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, padding: '40px 20px' }}>
                <div className="container" style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '32px', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>Secure Checkout</h1>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#64748b' }}>Complete your payment for {country.name} immigration services.</p>
                    </div>

                    <div style={{ background: '#f1f5f9', padding: '20px', borderRadius: '16px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontSize: '14px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' }}>Selected Plan</div>
                            <div style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>{planDetails.name}</div>
                        </div>
                        <div style={{ fontSize: '24px', fontWeight: '800', color: country.primaryColor }}>
                            ${planDetails.price}
                        </div>
                    </div>

                    <form onSubmit={(e) => { e.preventDefault(); alert('Payment successful! Proceeding to dashboard...'); }}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>Cardholder Name</label>
                            <input type="text" placeholder="John Doe" required style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '16px', outline: 'none' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>Card Number</label>
                            <input type="text" placeholder="0000 0000 0000 0000" required style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '16px', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>Expiry</label>
                                <input type="text" placeholder="MM/YY" required style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '16px', outline: 'none' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>CVV</label>
                                <input type="text" placeholder="123" required style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '16px', outline: 'none' }} />
                            </div>
                        </div>

                        <button type="submit" style={{ width: '100%', padding: '16px', background: country.primaryColor, color: 'white', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '18px', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                            Pay ${planDetails.price}
                        </button>
                    </form>
                    
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <Link to={`/countries/${id}/pricing`} style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
                            ← Back to Pricing
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryPayment;
