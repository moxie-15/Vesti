import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="navbar" id="navbar">
            <div className="nav-container" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                {/* Official Vesti SVG Logo */}
                <Link className="logo-area" to="/" style={{ display: 'flex', alignItems: 'center', gap: '0px', textDecoration: 'none' }}>
                    <svg fill="none" height="38" overflow="visible" viewBox="0 0 34 38" width="34" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33 0C32.7 1.08 32.2 2.06 31.8 3.07C30.4 6.45 28.8 9.83 27.3 13.22C24.5 19.53 21.7 25.84 18.9 32.16C18.7 32.76 18.4 33 17.7 33H10.9C10.2 33 10.2 32.93 10.4 32.37C12.5 27.68 14.5 22.99 16.6 18.3C18.6 13.73 20.6 9.2 22.6 4.61C22.7 4.3 22.9 4.14 23.2 4.02C26.3 2.73 29.4 1.43 32.5 0.14C32.6 0.1 32.7 0.05 32.8 0H33Z" fill="#FFFFFF"></path>
                        <path d="M0 9.4H7.5C8.2 9.4 8.2 9.45 7.9 10.1C6.8 12.82 5.6 15.54 4.4 18.26C4.3 18.42 4.3 18.69 4.1 18.69C3.8 18.68 3.8 18.41 3.7 18.25C2.6 15.67 1.4 13.07 0.3 10.47C0.2 10.26 0.1 10.07 0 9.87V9.4Z" fill="#FFFFFF"></path>
                        <path d="M5.1 21.31C5.1 21.19 5.2 21.06 5.2 20.94C6.5 17.95 7.8 14.99 9.1 12C9.4 11.29 9.7 10.6 10.1 9.89C10.2 9.62 10.4 9.4 10.7 9.28C13.7 7.99 16.8 6.72 19.8 5.45C20 5.38 20.2 5.23 20.3 5.36C20.5 5.53 20.3 5.7 20.2 5.87C17.9 10.99 15.6 16.11 13.4 21.24C12.1 24.22 10.8 27.22 9.6 30.21C9.5 30.36 9.5 30.6 9.3 30.62C9.1 30.64 9 30.38 8.9 30.22C7.7 27.27 6.4 24.32 5.2 21.38C5.1 21.36 5.1 21.34 5.1 21.31Z" fill="#FFFFFF"></path>
                    </svg>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '24px', color: 'white', letterSpacing: '-0.5px', lineHeight: 1, marginLeft: '-6px' }}>esti</span>
                </Link>

                <ul className="nav-menu" id="nav-menu">
                    <li className="dropdown" style={{ position: 'relative' }}>
                        <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Products <ChevronDown className="nav-chevron" size={16} /></a>
                        <ul className="dropdown-menu">
                            <li><Link to="/passports" className="dropdown-item-link">Passports</Link></li>
                            <li><Link to="/consultation" className="dropdown-item-link">Consultation</Link></li>
                            <li><Link to="/visas" className="dropdown-item-link">Visas</Link></li>
                            <li><Link to="/banking" className="dropdown-item-link">Global Banking</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown" style={{ position: 'relative' }}>
                        <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Company <ChevronDown className="nav-chevron" size={16} /></a>
                        <ul className="dropdown-menu">
                            <li><Link to="/about" className="dropdown-item-link">About Vesti</Link></li>
                            <li><Link to="/careers" className="dropdown-item-link">Careers</Link></li>
                            <li><Link to="/press" className="dropdown-item-link">Press</Link></li>
                            <li><Link to="/faqs" className="dropdown-item-link">FAQs</Link></li>
                            <li><Link to="/contact" className="dropdown-item-link">Contact Us</Link></li>
                            <li><Link to="/updates" className="dropdown-item-link">Vesti Updates</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown" style={{ position: 'relative' }}>
                        <Link to="/countries" className="nav-link">Countries <ChevronDown className="nav-chevron" size={16} /></Link>
                        <ul className="country-dropdown-menu">
                            <li><Link to="/countries/usa" className="dropdown-item-link">USA</Link></li>
                            <li><Link to="/countries/canada" className="dropdown-item-link">Canada</Link></li>
                            <li><Link to="/countries/australia" className="dropdown-item-link">Australia</Link></li>
                            <li><Link to="/countries/new-zealand" className="dropdown-item-link">New Zealand</Link></li>
                            <li><Link to="/countries/france" className="dropdown-item-link">France</Link></li>
                            <li><Link to="/countries/spain" className="dropdown-item-link">Spain</Link></li>
                            <li><Link to="/countries" className="dropdown-item-link">All Countries</Link></li>
                        </ul>
                    </li>
                </ul>

                <div className="nav-cta">
                    <Link to="/login" className="btn-signin">Sign In</Link>
                    <Link to="/signup" className="btn-create-account">Create an account</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
