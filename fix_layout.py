import os
import re

countries = {
    'australia': {
        'name': 'Australia',
        'magic': 'Australia',
        'flag': 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
        'images': ['au-tourist-beach.png', 'au-landscape-1.png', 'au-landscape-2.png', 'au-landscape-3.png']
    },
    'france': {
        'name': 'France',
        'magic': 'France',
        'flag': 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
        'images': ['au-tourist-beach.png', 'au-landscape-1.png', 'au-landscape-2.png', 'au-landscape-3.png']
    },
    'canada': {
        'name': 'Canada',
        'magic': 'Canada',
        'flag': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
        'images': ['au-tourist-beach.png', 'au-landscape-1.png', 'au-landscape-2.png', 'au-landscape-3.png']
    },
    'usa': {
        'name': 'United States',
        'magic': 'America',
        'flag': 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
        'images': ['au-tourist-beach.png', 'au-landscape-1.png', 'au-landscape-2.png', 'au-landscape-3.png']
    },
    'spain': {
        'name': 'Spain',
        'magic': 'Spain',
        'flag': 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
        'images': ['au-tourist-beach.png', 'au-landscape-1.png', 'au-landscape-2.png', 'au-landscape-3.png']
    }
}

with open('New_zealand/index.html', 'r', encoding='utf-8') as f:
    nz_content = f.read()

# Extract the hero section from NZ
match = re.search(r'<!-- Hero Section.*?<section class="hero-section">.*?</section>', nz_content, re.DOTALL)
if not match:
    print("Could not find NZ hero section")
    exit(1)
nz_hero = match.group(0)

for code, data in countries.items():
    filepath = f"{code}/index.html"
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Build new hero
    new_hero = nz_hero.replace('New Zealand', data['name']).replace('Aotearoa', data['magic'])
    new_hero = new_hero.replace('assets/nz-tourist-beach.png', f"assets/{data['images'][0]}")
    new_hero = new_hero.replace('assets/nz-landscape-1.png', f"assets/{data['images'][1]}")
    new_hero = new_hero.replace('assets/nz-landscape-2.png', f"assets/{data['images'][2]}")
    new_hero = new_hero.replace('assets/nz-landscape-3.png', f"assets/{data['images'][3]}")
    new_hero = new_hero.replace('https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg', data['flag'])
    
    # Remove old hero from destination file
    content = re.sub(r'<!-- Hero Section.*?<section class="hero-section".*?</section>', new_hero, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {code}")
