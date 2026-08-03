import { THEME } from './theme';

export const VISA_APPLICATION_STEPS = [
    {
        num: '1.',
        title: 'Apply Online',
        text: 'Fill out our secure online visa application form in minutes. Our system ensures all data meets consulate standards to avoid rejections.'
    },
    {
        num: '2.',
        title: 'Submit Documents',
        text: 'Upload scans of your passport and required documents. Our expert visa consultants will review them for accuracy before submission.'
    },
    {
        num: '3.',
        title: 'Receive Visa',
        text: 'Once approved by the embassy, we will securely deliver your travel documents and visa straight to your email or doorstep.'
    }
];

export const FAQS_LIST = [
    { 
        q: 'How does Vesti AI score my visa eligibility?', 
        a: 'Vesti AI parses over 40+ career signals from your CV and portfolio, comparing your credentials against 100,000+ historical approval benchmarks from USCIS, IRCC, and European consulates.' 
    },
    { 
        q: 'Are Vesti petitions reviewed by licensed immigration attorneys?', 
        a: 'Yes! Vesti pairs AI scoring with our human network of verified immigration attorneys who review, edit, and sign off on all legal petition letters.' 
    },
    { 
        q: 'What is Vesti Proof of Funds?', 
        a: 'Vesti Wallet lets applicants deposit, convert, and generate bank-approved financial capability certificates accepted by embassy visa officers.' 
    },
    { 
        q: 'What happens if my petition is not approved?', 
        a: 'Vesti offers an eligibility score money-back guarantee for candidates who meet all recommended petition criteria outlined during the Clarity assessment.' 
    }
];

export const MOBILE_APP_LINKS = [
    {
        id: 'google-play',
        storeName: 'Google Play',
        subtitle: 'AVAILABLE ON',
        url: 'https://play.google.com/store/apps/details?id=com.vesti.app&pli=1',
        svgType: 'google'
    },
    {
        id: 'apple-store',
        storeName: 'Apple Store',
        subtitle: 'AVAILABLE ON',
        url: 'https://apps.apple.com/ca/app/vesti-move-abroad-pay-bills/id1564444402',
        svgType: 'apple'
    }
];

export const FOOTER_NAVIGATION = [
    {
        title: 'INTELLIGENCE',
        links: [
            { label: 'O-1 Scoring', to: '/o1-scoring' },
            { label: 'EB-1A Roadmap', to: '/eb1a-roadmap' },
            { label: 'NIW Builder', to: '/niw-builder' },
            { label: 'Express Entry', to: '/express-entry' }
        ]
    },
    {
        title: 'HUMAN LAYER',
        links: [
            { label: 'Expert Network', to: '/expert-network' },
            { label: 'Legal Reviews', to: '/legal-reviews' },
            { label: 'Concierge', to: '/concierge' },
            { label: 'Success Stories', to: '/success-stories' }
        ]
    },
    {
        title: 'COMPANY',
        links: [
            { label: 'Methodology', to: '/methodology' },
            { label: 'Pricing', to: '/pricing' },
            { label: 'Careers', to: '/careers' },
            { label: 'Contact', to: '/contact' }
        ]
    },
    {
        title: 'LEGAL',
        links: [
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Terms of Service', to: '/terms' },
            { label: 'AML', to: '/aml' },
            { label: 'Disclosures', to: '/disclosures' }
        ]
    }
];

export const VESTI_BRAND_INFO = {
    tagline: 'The operating system for global talent migration. Built for the ambitious, guided by humans.',
    copyrightNotice: `© ${new Date().getFullYear()} Vesti Migration OS. All rights reserved.`,
    brandColor: THEME.DARK_CHOCOLATE,
    greenAccent: THEME.GREEN_ACCENT
};
