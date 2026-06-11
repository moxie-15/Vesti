import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'

themes = {
    'canada': {'name': 'Canada', 'code': 'CA', 'primary': '#E31837'},
    'australia': {'name': 'Australia', 'code': 'AU', 'primary': '#FFCD00'},
    'usa': {'name': 'USA', 'code': 'US', 'primary': '#3B82F6'},
    'france': {'name': 'France', 'code': 'FR', 'primary': '#0055A4'},
    'spain': {'name': 'Spain', 'code': 'ES', 'primary': '#F1BF00'},
    'New_zealand': {'name': 'New Zealand', 'code': 'NZ', 'primary': '#63A146'}
}

for country_dir, info in themes.items():
    clarity_path = os.path.join(workspace_dir, country_dir, 'clarity.html')
    if not os.path.exists(clarity_path):
        continue
    
    with open(clarity_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The original file is heavily hardcoded to "Australia" and "AU" and color "#63A146" (NZ's green).
    
    # 1. Replace country names and codes
    # We will do case-sensitive replacements carefully
    content = content.replace('Australia Tourist & Visitor Visa Clarity Session | Vesti AU', f'{info["name"]} Tourist & Visitor Visa Clarity Session | Vesti {info["code"]}')
    content = content.replace('>AU<', f'>{info["code"]}<')
    content = content.replace(' Watch a Australia', f' Watch a {info["name"]}')
    content = content.replace('AU Tourist Visa', f'{info["code"]} Tourist Visa')
    content = content.replace('Australia Visa Video Guides', f'{info["name"]} Visa Video Guides')
    content = content.replace('Australia Tourist Visa Guide', f'{info["name"]} Tourist Visa Guide')
    content = content.replace('Australia Group Travel Process', f'{info["name"]} Group Travel Process')
    content = content.replace('Australia Business Visa', f'{info["name"]} Business Visa')
    content = content.replace('Australia Family Vacation', f'{info["name"]} Family Vacation')
    content = content.replace('in AU.', f'in {info["code"]}.')
    content = content.replace('to AU together', f'to {info["code"]} together')
    
    # Replace the text "Watch a clarity session tailored specifically to the Australia Tourist & Visitor Visa"
    content = content.replace('specifically to the Australia Tourist', f'specifically to the {info["name"]} Tourist')
    content = content.replace('residents in Australia', f'residents in {info["name"]}')

    # Replace AU indicator in the header: <span class="au-indicator" ...>AU</span>
    content = re.sub(r'<span class="au-indicator"([^>]*)>AU</span>', f'<span class="au-indicator"\\1>{info["code"]}</span>', content)

    # 2. Replace the primary color #63A146 with the country's primary color
    if country_dir != 'New_zealand':
        content = content.replace('#63A146', info['primary'])
        
    with open(clarity_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Clarity pages localized successfully!")
