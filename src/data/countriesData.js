export const getCountryData = (countryId) => {
    return countries[countryId] || null;
};

export const getAllCountries = () => {
    return Object.values(countries);
};

const countries = {
    usa: {
        id: 'usa',
        name: 'United States',
        heroTitle: 'Explore the Magic of America',
        heroDescription: 'Experience the breathtaking beauty of the United States. Whether you\'re planning a scenic vacation or attending business meetings, Vesti helps you secure your pathways.',
        successRate: '98.5%',
        primaryColor: '#0A3161',
        pricing: { basic: 50, premium: 499 },
        heroMainImg: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        heroSideImg: '/images/countries/usa/usa_2.png',
        galleryImages: [
            '/images/countries/usa/usa_2.png',
            'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        locationName: 'New York City',
        services: [
            { title: 'O-1 Visa', icon: 'star', desc: 'For individuals with extraordinary ability or achievement. We provide expert guidance on building your portfolio.' },
            { title: 'EB-1A / NIW', icon: 'award', desc: 'Secure your Green Card through exceptional ability or national interest waiver pathways.' },
            { title: 'Student Visa (F-1)', icon: 'student', desc: 'Unlock world-class education. We assist with proof of funds, SEVIS fees, and securing your study permits.' },
            { title: 'B1/B2 Visitor', icon: 'plane', desc: 'Whether for tourism or business meetings, we simplify the US visitor visa application process.' }
        ],
        clarityHeroTitle: 'Your Path to the American Dream Starts Here',
        clarityHeroDesc: 'Looking to take your career to the next level? The US Visa pathways give you access to world-class networking, career opportunities and resources to bring your expertise to life.',
        clarityStats: '850+',
        clarityFlag: 'us',
        clarityAdvisorImg: '/images/countries/usa/usa_2.png',
        benefits: [
            { title: 'Career Growth', description: 'Gain exposure to cutting-edge technologies and collaborate with some of the world\'s most innovative companies and academic institutions.' },
            { title: 'Permanent Residency', description: 'Work toward permanent residency for yourself and your family in the United States.' },
            { title: 'Competitive Salary', description: 'Gain access to lucrative opportunities and high-paying roles in a competitive job market.' },
            { title: 'No Sponsorship Hassles', description: 'Certain pathways give you full control over your career because they don\'t require employer sponsorship.' }
        ]
    },
    canada: {
        id: 'canada',
        name: 'Canada',
        heroTitle: 'Discover the Great White North',
        heroDescription: 'From vibrant cities to majestic natural wonders, Canada offers unparalleled opportunities for students, professionals, and visitors. Secure your Canadian visa with Vesti.',
        successRate: '97.8%',
        primaryColor: '#D80621',
        pricing: { basic: 45, premium: 450 },
        heroMainImg: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        heroSideImg: '/images/countries/canada/canada_2.png',
        galleryImages: [
            '/images/countries/canada/canada_1.png',
            '/images/countries/canada/canada_2.png',
            'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1519832979-6fa011b87667?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        locationName: 'Toronto',
        services: [
            { title: 'Express Entry', icon: 'award', desc: 'Fast-track your permanent residency through the Federal Skilled Worker or Canadian Experience Class.' },
            { title: 'Provincial Nominee (PNP)', icon: 'map', desc: 'Target specific provinces that need your skills and drastically improve your PR chances.' },
            { title: 'Study Permit', icon: 'student', desc: 'Access top-tier Canadian universities. We help with your study plan and financial proofs.' },
            { title: 'Work Permit', icon: 'work', desc: 'Elevate your career internationally. We guide you through employer sponsorships and LMIA authorizations.' }
        ],
        clarityHeroTitle: 'Your Path to a Brighter Future in Canada',
        clarityHeroDesc: 'Looking to take your career to the next level? The Canadian Visa pathways give you access to world-class networking, career opportunities and resources to bring your expertise to life.',
        clarityStats: '620+',
        clarityFlag: 'ca',
        clarityAdvisorImg: '/images/countries/canada/canada_1.png',
        benefits: [
            { title: 'Quality of Life', description: 'Consistently ranked among the best countries to live in, offering universal healthcare and safety.' },
            { title: 'Fast-Track PR', description: 'One of the most streamlined immigration systems in the world for skilled workers.' },
            { title: 'Inclusive Society', description: 'A welcoming and multicultural society that celebrates diversity.' },
            { title: 'Family Benefits', description: 'Exceptional education systems and childcare benefits for your family.' }
        ]
    },
    australia: {
        id: 'australia',
        name: 'Australia',
        heroTitle: 'Journey to the Land Down Under',
        heroDescription: 'Explore the beautiful beaches, vibrant culture, and diverse landscapes of Australia. Let Vesti guide your pathway for study, work, or permanent residency.',
        successRate: '96.4%',
        primaryColor: '#00008B',
        pricing: { basic: 60, premium: 550 },
        heroMainImg: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        heroSideImg: '/images/countries/australia/au-landscape-2.png',
        galleryImages: [
            '/images/countries/australia/au-landscape-1.png',
            '/images/countries/australia/au-landscape-2.png',
            'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        locationName: 'Sydney',
        services: [
            { title: 'Subclass 189 / 190', icon: 'award', desc: 'Skilled independent and nominated visas for permanent residency in Australia.' },
            { title: 'Student Visa (Subclass 500)', icon: 'student', desc: 'Study in Australia with full support for enrollment, GTE requirements, and financial proof.' },
            { title: 'TSS Work Visa (482)', icon: 'work', desc: 'Temporary Skill Shortage visa. We assist with employer sponsorship and skills assessment.' },
            { title: 'Working Holiday (417/462)', icon: 'plane', desc: 'Explore Australia while working to fund your trip. Perfect for young adults and backpackers.' }
        ],
        clarityHeroTitle: 'Your Path to a Brighter Future Down Under',
        clarityHeroDesc: 'Looking to take your career to the next level? The Australian Visa pathways give you access to world-class networking, career opportunities and resources to bring your expertise to life.',
        clarityStats: '450+',
        clarityFlag: 'au',
        clarityAdvisorImg: '/images/countries/australia/au-landscape-1.png',
        benefits: [
            { title: 'High Minimum Wage', description: 'Australia offers one of the highest minimum wages globally.' },
            { title: 'Work-Life Balance', description: 'A laid-back lifestyle with world-class beaches and outdoor activities.' },
            { title: 'Excellent Healthcare', description: 'Access to Medicare, providing high-quality medical care.' },
            { title: 'World-Class Education', description: 'Top-ranked universities and research institutions.' }
        ]
    },
    france: {
        id: 'france',
        name: 'France',
        heroTitle: 'Experience the Elegance of France',
        heroDescription: 'Immerse yourself in rich history, exquisite cuisine, and iconic landmarks. Vesti provides premium support for your French mobility aspirations.',
        successRate: '95.2%',
        primaryColor: '#002654',
        pricing: { basic: 40, premium: 399 },
        heroMainImg: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        heroSideImg: '/images/countries/france/france_2.png',
        galleryImages: [
            '/images/countries/france/france_1.png',
            '/images/countries/france/france_2.png',
            'https://images.unsplash.com/photo-1509299349698-ab22323ae696?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        locationName: 'Paris',
        services: [
            { title: 'Tech Visa / Talent Passport', icon: 'star', desc: 'Fast-track visa for tech founders, investors, and highly skilled employees.' },
            { title: 'Student Visa', icon: 'student', desc: 'Study in France. We assist with Campus France procedures and financial guarantees.' },
            { title: 'Schengen Tourist Visa', icon: 'plane', desc: 'Seamless support for short-stay visas to explore France and the Schengen zone.' },
            { title: 'Entrepreneur Visa', icon: 'business', desc: 'Start or expand your business in France. We help with business plans and residency.' }
        ],
        clarityHeroTitle: 'Your Path to a Brighter Future in Europe',
        clarityHeroDesc: 'Looking to take your career to the next level? The French Visa pathways give you access to world-class networking, career opportunities and resources to bring your expertise to life.',
        clarityStats: '210+',
        clarityFlag: 'fr',
        clarityAdvisorImg: '/images/countries/france/france_1.png',
        benefits: [
            { title: 'European Mobility', description: 'Travel freely across all Schengen member states without restrictions.' },
            { title: 'Vibrant Culture', description: 'Unmatched culinary, artistic, and historical experiences.' },
            { title: 'Strong Social System', description: 'Excellent worker protections, healthcare, and extended holidays.' },
            { title: 'Tech Hub', description: 'Rapidly growing startup ecosystem and government support for tech talent.' }
        ]
    },
    spain: {
        id: 'spain',
        name: 'Spain',
        heroTitle: 'Uncover the Passion of Spain',
        heroDescription: 'Discover vibrant culture, historic architecture, and beautiful coasts. Start your journey to Spain with our streamlined visa pathways and expert assistance.',
        successRate: '97.1%',
        primaryColor: '#AA151B',
        pricing: { basic: 40, premium: 399 },
        heroMainImg: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        heroSideImg: '/images/countries/spain/spain_2.png',
        galleryImages: [
            '/images/countries/spain/spain_1.png',
            '/images/countries/spain/spain_2.png',
            'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        locationName: 'Madrid',
        services: [
            { title: 'Digital Nomad Visa', icon: 'laptop', desc: 'Live in Spain while working remotely. We handle the complex tax and income requirements.' },
            { title: 'Non-Lucrative Visa', icon: 'home', desc: 'Retire or live in Spain without working. We assist with passive income verification.' },
            { title: 'Golden Visa', icon: 'award', desc: 'Residency by investment. Support for real estate purchases and capital transfers.' },
            { title: 'Student Visa', icon: 'student', desc: 'Pursue your studies in Spain. Complete assistance with admission and visa processing.' }
        ],
        clarityHeroTitle: 'Your Path to a Brighter Future in Spain',
        clarityHeroDesc: 'Looking to take your career to the next level? The Spanish Visa pathways give you access to world-class networking, career opportunities and resources to bring your expertise to life.',
        clarityStats: '185+',
        clarityFlag: 'es',
        clarityAdvisorImg: '/images/countries/spain/spain_1.png',
        benefits: [
            { title: 'Sunny Lifestyle', description: 'Exceptional weather and relaxed lifestyle with a low cost of living.' },
            { title: 'Digital Nomad Friendly', description: 'Favorable tax regimes for remote workers and freelancers.' },
            { title: 'Schengen Access', description: 'The ability to travel seamlessly throughout the EU.' },
            { title: 'World-Class Healthcare', description: 'One of the best healthcare systems globally, available to residents.' }
        ]
    },
    'new-zealand': {
        id: 'new-zealand',
        name: 'New Zealand',
        heroTitle: 'Explore the Magic of Aotearoa',
        heroDescription: 'Ready to experience the breathtaking beauty of New Zealand? Let Vesti help you secure your visitor visa and set up your travel wallet with ease.',
        successRate: '98.0%',
        primaryColor: '#00247D',
        pricing: { basic: 55, premium: 499 },
        heroMainImg: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        heroSideImg: '/images/countries/New_zealand/education-globe.png',
        galleryImages: [
            '/images/countries/New_zealand/hero-landscape.png',
            '/images/countries/New_zealand/education-globe.png',
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        locationName: 'Auckland',
        services: [
            { title: 'Skilled Migrant Category', icon: 'award', desc: 'Points-based system for permanent residency. We maximize your EOI score.' },
            { title: 'Working Holiday Visa', icon: 'plane', desc: 'Travel and work in New Zealand for up to 12-23 months depending on your country.' },
            { title: 'Student Visa', icon: 'student', desc: 'Study in a world-class environment with post-study work opportunities.' },
            { title: 'Essential Skills Work Visa', icon: 'work', desc: 'Work in New Zealand if you have a job offer and the required skills.' }
        ],
        clarityHeroTitle: 'Your Path to a Brighter Future in Aotearoa',
        clarityHeroDesc: 'Looking to take your career to the next level? The New Zealand Visa pathways give you access to world-class networking, career opportunities and resources to bring your expertise to life.',
        clarityStats: '310+',
        clarityFlag: 'nz',
        clarityAdvisorImg: '/images/countries/New_zealand/hero-landscape.png',
        benefits: [
            { title: 'Stunning Environments', description: 'Unmatched natural beauty and outdoor adventuring.' },
            { title: 'Work-Life Balance', description: 'A culture that highly prioritizes family and personal time.' },
            { title: 'Safe Society', description: 'Consistently ranked among the safest countries in the world.' },
            { title: 'Innovation Ecosystem', description: 'Growing opportunities in tech, agriculture, and film.' }
        ]
    }
};


export default countries;
