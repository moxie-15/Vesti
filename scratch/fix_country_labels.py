import os
import re

workspace_dir = r'c:\Users\MOXIE\Desktop\Vesti'

configs = {
    'canada': {
        'name': 'Canada',
        'abbr': 'CA',
        'currency': 'CAD',
        'symbol': 'CA$',
        'govt': 'IRCC',
        'region': 'North America'
    },
    'usa': {
        'name': 'USA',
        'abbr': 'US',
        'currency': 'USD',
        'symbol': '$',
        'govt': 'USCIS',
        'region': 'North America'
    },
    'france': {
        'name': 'France',
        'abbr': 'FR',
        'currency': 'EUR',
        'symbol': '€',
        'govt': 'Schengen',
        'region': 'Europe'
    },
    'spain': {
        'name': 'Spain',
        'abbr': 'ES',
        'currency': 'EUR',
        'symbol': '€',
        'govt': 'Schengen',
        'region': 'Europe'
    },
    'New_zealand': {
        'name': 'New Zealand',
        'abbr': 'NZ',
        'currency': 'NZD',
        'symbol': 'NZ$',
        'govt': 'INZ',
        'region': 'Oceania'
    }
}

files_to_check = ['travel-fees.html', 'checkout.html', 'portal-settings.html']

for folder, cfg in configs.items():
    for file_name in files_to_check:
        file_path = os.path.join(workspace_dir, folder, file_name)
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace labels
            # Case insensitive "Australia" to Country Name
            content = re.sub(r'(?i)\bAustralia\b', cfg['name'], content)
            
            # Replace AU abbreviation in navbar/badges
            content = content.replace('>AU<', f">{cfg['abbr']}<")
            content = content.replace('esti AU Internal Portal', f"esti {cfg['abbr']} Internal Portal")
            content = content.replace('Vesti AU travel portal', f"Vesti {cfg['abbr']} travel portal")
            content = content.replace('in AU.', f"in {cfg['abbr']}.")
            content = content.replace('AU Visitor Levy', f"{cfg['abbr']} Visitor Levy")
            
            # Replace DHA (Department of Home Affairs) with local agency
            content = content.replace('DHA Visa', f"{cfg['govt']} Visa")
            content = content.replace('DHA Immigration', f"{cfg['govt']} Immigration")
            
            # Replace Currency
            content = content.replace(' AUD ', f" {cfg['currency']} ")
            content = content.replace(' AUD', f" {cfg['currency']}")
            content = content.replace('AUD ', f"{cfg['currency']} ")
            content = content.replace('(AUD', f"({cfg['currency']}")
            content = content.replace('AUD)', f"{cfg['currency']})")
            content = content.replace('AU$', cfg['symbol'])
            
            # Replace Region in Insurance description
            content = content.replace('Oceania coverage', f"{cfg['region']} coverage")
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

print("Country labels fixed for all pages!")
