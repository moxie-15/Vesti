import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'

captions = {
    'canada': [
        '🍁 Banff National Park',
        '🏙️ Toronto Skyline',
        '🌊 Niagara Falls',
        '🏰 Quebec City'
    ],
    'usa': [
        '🏜️ The Grand Canyon',
        '🗽 Statue of Liberty',
        '🌉 Golden Gate Bridge',
        '🌋 Yellowstone National Park'
    ],
    'france': [
        '🗼 The Eiffel Tower',
        '🏰 Mont Saint-Michel',
        '🪻 Provence Lavender Fields',
        '🛥️ The French Riviera'
    ],
    'spain': [
        '⛪ Sagrada Familia',
        '🏰 Alhambra Palace',
        '🏛️ Plaza Mayor',
        '🦎 Park Güell'
    ],
    'australia': [
        '🏛️ Sydney Opera House',
        '🏜️ Uluru (Ayers Rock)',
        '🐠 Great Barrier Reef',
        '🏙️ Melbourne Skyline'
    ],
    'New_zealand': [
        '🛥️ Milford Sound',
        '🏙️ Auckland Skyline',
        '🏔️ Mount Cook',
        '🏠 Hobbiton Movie Set'
    ]
}

images = {
    'canada': ['canada_1.png', 'canada_2.png', 'canada_3.png', 'canada_4.png'],
    'usa': ['usa_1.png', 'usa_2.png', 'usa_3.png', 'usa_4.png'],
    'france': ['france_1.png', 'france_2.png', 'france_3.png', 'france_4.png'],
    'spain': ['spain_1.png', 'spain_2.png', 'spain_3.png', 'spain_4.png'],
    'australia': [
        'australia_1.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Uluru_Sunset_11.jpg/800px-Uluru_Sunset_11.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Great_Barrier_Reef_Australia.jpg/800px-Great_Barrier_Reef_Australia.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Melbourne_Skyline_from_Southbank.jpg/800px-Melbourne_Skyline_from_Southbank.jpg'
    ],
    'New_zealand': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Milford_Sound_-_panoramio.jpg/800px-Milford_Sound_-_panoramio.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Auckland_skyline.jpg/800px-Auckland_skyline.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Aoraki_Mount_Cook.JPG/800px-Aoraki_Mount_Cook.JPG',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Hobbiton%2C_New_Zealand.jpg/800px-Hobbiton%2C_New_Zealand.jpg'
    ]
}

countries = ['canada', 'usa', 'france', 'spain', 'australia', 'New_zealand']

for country in countries:
    html_path = os.path.join(workspace_dir, country, 'index.html')
    if not os.path.exists(html_path):
        continue
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the hero slides section
    hero_match = re.search(r'<!-- Slides -->(.*?)<!-- Slide controls \(dots\)', content, re.DOTALL)
    if not hero_match:
        print(f"Slides not found for {country}")
        continue
        
    hero_html = hero_match.group(1)
    
    # Reconstruct the hero html
    new_hero_html = "\n"
    
    for i in range(4):
        active_class = " active" if i == 0 else ""
        z_index = "2" if i == 0 else "1"
        opacity = "1" if i == 0 else "0"
        
        img_src = images[country][i]
        if not img_src.startswith('http'):
            img_src = f'assets/{img_src}'
            
        caption = captions[country][i]
        alt_text = caption[2:].strip()
        
        slide_html = f"""                    <div class="hero-slide{active_class}" style="position: absolute; top:0; left:0; width:100%; height:100%; opacity:{opacity}; transition: opacity 1s ease-in-out; z-index: {z_index}; border-radius: inherit; overflow: hidden;">
                        <img src="{img_src}" alt="{alt_text}" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;">
                        <div class="slide-caption" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, rgba(6,14,66,0.95) 0%, rgba(6,14,66,0.6) 50%, rgba(6,14,66,0) 100%); padding: 40px 60px 48px; color: white; font-family: 'Outfit'; font-size: 0.95rem; font-weight: 600; text-align: center; text-shadow: 0 2px 4px rgba(0,0,0,0.8); line-height: 1.4; border-radius: inherit;">
                            {caption}
                        </div>
                    </div>"""
        new_hero_html += slide_html + "\n"
        
    new_hero_html += "                    "
        
    # Replace in content
    content = content.replace(hero_html, new_hero_html)
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("HTML slides updated successfully!")
