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
        heroTitle: 'Work & Migrate to the United States',
        heroDescription: 'Unlock career advancement, tech innovation hubs, and extraordinary ability petitions (O-1, EB-1A, EB-2 NIW, H-1B). Vesti helps ambitious professionals, founders, and talent build petition-ready portfolios.',
        successRate: '98.5%',
        primaryColor: '#0A3161',
        pricing: { basic: 50, premium: 499 },
        heroMainImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', // Tech skyscraper / corporate headquarters
        heroSideImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', // Tech workspace & team innovation
        galleryImages: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', // Corporate Financial & Tech Hub
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', // Tech Team & Product Leadership
            'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', // Software Engineering & AI Research Lab
            'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80', // NYC Skyline Landmark
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', // Executive Business Leader
            'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80', // Golden Gate Bridge & Silicon Valley
            'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80', // Aerospace & Science Research
            'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80', // Statue of Liberty Landmark
            'https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&w=800&q=80', // Innovation Campus
            'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=800&q=80' // Modern Office Architecture
        ],
        locationName: 'Silicon Valley & New York City',
        services: [
            { title: 'O-1 Extraordinary Ability', icon: 'star', desc: 'Self-petition or employer sponsored pathway for extraordinary tech, business, & science talent.' },
            { title: 'EB-2 NIW Waiver', icon: 'award', desc: 'National Interest Waiver bypasses labor certification for STEM innovators & founders.' },
            { title: 'EB-1A Green Card', icon: 'award', desc: 'Direct Permanent Residency for leaders with proven extraordinary acclaim.' },
            { title: 'H-1B & L-1 Specialty Work', icon: 'work', desc: 'Employer sponsored specialty occupation and corporate transferee visas.' },
            { title: 'Student Visa (F-1 / OPT)', icon: 'student', desc: 'Access world-class US universities with post-study STEM OPT work authorization.' },
            { title: 'B1/B2 Business & Visitor', icon: 'plane', desc: 'Fast-track visa processing for business conferences, trade expos, and leisure.' }
        ],
        clarityHeroTitle: 'Your Path to the American Dream & Global Career',
        clarityHeroDesc: 'Looking to take your career to the next level? US work and talent pathways (O-1, EB-1A, NIW) give you direct access to Silicon Valley, Wall Street, and world-class innovation networks.',
        clarityStats: '850+',
        clarityFlag: 'us',
        clarityAdvisorImg: '/assets/expert-bunmi-BGTZe3Yq.jpg',
        benefits: [
            { title: 'Extraordinary Career Growth', description: 'Gain exposure to cutting-edge AI, biotechnology, and venture-backed tech ecosystems.' },
            { title: 'Self-Petition Green Cards', description: 'EB-2 NIW and EB-1A allow you to sponsor your own permanent residency without employer dependencies.' },
            { title: 'Competitive Remuneration', description: 'Command industry-leading tech and executive compensation in the United States.' },
            { title: 'No Labor Certification Required', description: 'Specialized talent pathways bypass lengthy PERM labor certification requirements.' }
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
        heroMainImg: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=80',
        heroSideImg: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
            'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1519832979-6fa011b87667?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1519178614-68693b05f61c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1489447068241-b349021d0b81?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1508672019048-805479767513?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80'
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
        clarityAdvisorImg: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
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
        heroMainImg: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
        heroSideImg: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
            'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=800&q=80'
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
        clarityAdvisorImg: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
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
        heroMainImg: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
        heroSideImg: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1509299349698-ab22323ae696?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1500315331616-db4f707c24d1?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80'
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
        clarityAdvisorImg: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
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
        heroMainImg: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80',
        heroSideImg: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
            'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1583422409516-2895a771deda?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1512753358964-15c0e15250ff?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1548625361-185e6833b378?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1561632669-6e0e908990cf?auto=format&fit=crop&w=800&q=80'
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
        clarityAdvisorImg: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
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
        heroMainImg: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
        heroSideImg: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
            'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1508672019048-805479767513?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?auto=format&fit=crop&w=800&q=80'
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
        clarityAdvisorImg: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
        benefits: [
            { title: 'Stunning Environments', description: 'Unmatched natural beauty and outdoor adventuring.' },
            { title: 'Work-Life Balance', description: 'A culture that highly prioritizes family and personal time.' },
            { title: 'Safe Society', description: 'Consistently ranked among the safest countries in the world.' },
            { title: 'Innovation Ecosystem', description: 'Growing opportunities in tech, agriculture, and film.' }
        ]
    }
};

export default countries;
