import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
    return (
        <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <Navbar />
            <main style={{ flex: 1, paddingTop: '24px' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
