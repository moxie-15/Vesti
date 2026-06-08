const fs = require('fs');
const path = require('path');
const indexFile = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexFile, 'utf8');

// 1. Add hero slideshow HTML and CSS
const heroStyleAndDiv = `
<style>
/* Hero Slideshow Styles */
.hero-section { position: relative; overflow: hidden; background: #0B1221; z-index: 1; }
.hero-slideshow {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    z-index: -2;
    background-size: cover; background-position: center;
    animation: slideShow 15s infinite;
}
.hero-section::after {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(11, 18, 33, 0.7); /* Dark overlay for readability */
    z-index: -1;
}

@keyframes slideShow {
    0%, 25% { background-image: url('assets/au-landscape-1.png'); opacity: 1; }
    28%, 33% { opacity: 0.8; }
    33%, 58% { background-image: url('assets/au-landscape-2.png'); opacity: 1; }
    61%, 66% { opacity: 0.8; }
    66%, 91% { background-image: url('assets/au-landscape-3.png'); opacity: 1; }
    94%, 100% { opacity: 0.8; }
}

/* Service Box Layout Fix */
.service_section .box { 
    display: flex; 
    align-items: flex-start; 
    text-align: left; 
}
.service_section .img-box { 
    margin-right: 25px; 
    flex-shrink: 0; 
    height: auto; 
    display: block; 
}
.service_section .img-box img { 
    width: 60px; 
    height: auto; 
}
.service_section .detail-box { 
    flex-grow: 1; 
}
.service_section h6 { 
    margin-top: 0; 
    font-size: 20px;
    text-transform: uppercase;
}
.service_section p {
    color: #666;
}
.service_section .box.active p, .service_section .box:hover p {
    color: #eee;
}
.service_section .btn {
    border-radius: 4px;
}
</style>
<div class="hero-slideshow"></div>
`;

if (content.includes('<section class="hero-section">') && !content.includes('hero-slideshow')) {
    content = content.replace('<section class="hero-section">', '<section class="hero-section">' + heroStyleAndDiv);
}

// 2. The images in the 'Our Services' section are currently rendered like:
// <div class="img-box"><img src="assets/viseas/s1.png" alt=""></div>
// <div class="detail-box"><h6>Business Visa</h6><p>...</p><a ...></div>
// The new CSS will automatically format them horizontally!

fs.writeFileSync(indexFile, content, 'utf8');
console.log('UI updated');
