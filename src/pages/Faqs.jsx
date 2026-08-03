import React from 'react';
import FaqsAccordion from '../components/FaqsAccordion';
import { THEME } from '../constants';

const Faqs = () => {
    return (
        <div style={{ backgroundColor: THEME.DARK_CHOCOLATE, minHeight: '100vh', paddingTop: '40px' }}>
            <FaqsAccordion />
        </div>
    );
};

export default Faqs;
