import React from 'react';
import { Link } from 'react-router-dom';

const ScanProfile = () => {
    return (
        <div style={{ padding: '100px 50px', textAlign: 'center', minHeight: '60vh' }}>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '40px', color: '#13110f' }}>ScanProfile Page</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#4A5568', marginTop: '20px' }}>This section is currently being migrated to the new React architecture.</p>
            <Link to="/" style={{ display: 'inline-block', marginTop: '30px', padding: '10px 20px', background: '#13110f', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Back to Home</Link>
        </div>
    );
};

export default ScanProfile;
