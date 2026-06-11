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
    },
    'australia': {
        'name': 'Australia',
        'abbr': 'AU',
        'currency': 'AUD',
        'symbol': 'AU$',
        'govt': 'DHA',
        'region': 'Oceania'
    }
}

files_to_check = ['index.html', 'travel-fees.html', 'checkout.html', 'portal-settings.html', 'clarity.html', 'video-catalog.html', 'clarity-payment.html']

for folder, cfg in configs.items():
    for file_name in files_to_check:
        file_path = os.path.join(workspace_dir, folder, file_name)
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Apply the Australia fixes (skip for Australia itself)
            if folder != 'australia':
                # Only replace "Australia" if it's not already correct (case insensitive)
                content = re.sub(r'(?i)\bAustralia\b', cfg['name'], content)
                content = content.replace('>AU<', f">{cfg['abbr']}<")
                content = content.replace('esti AU Internal Portal', f"esti {cfg['abbr']} Internal Portal")
                content = content.replace('Vesti AU travel portal', f"Vesti {cfg['abbr']} travel portal")
                content = content.replace('in AU.', f"in {cfg['abbr']}.")
                content = content.replace('AU Visitor Levy', f"{cfg['abbr']} Visitor Levy")
                content = content.replace('DHA Visa', f"{cfg['govt']} Visa")
                content = content.replace('DHA Immigration', f"{cfg['govt']} Immigration")
                content = content.replace(' AUD ', f" {cfg['currency']} ")
                content = content.replace(' AUD', f" {cfg['currency']}")
                content = content.replace('AUD ', f"{cfg['currency']} ")
                content = content.replace('(AUD', f"({cfg['currency']}")
                content = content.replace('AUD)', f"{cfg['currency']})")
                content = content.replace('AU$', cfg['symbol'])
                content = content.replace('Oceania coverage', f"{cfg['region']} coverage")
            
            # Apply Visitor Visa -> Pathways replacement for everyone except New Zealand
            if folder != 'New_zealand':
                content = content.replace('Tourist & Visitor Visas', 'Pathways')
                content = content.replace('Tourist & Visitor Visa', 'Pathways')
                content = content.replace('Visitor Visas', 'Pathways')
                content = content.replace('Visitor Visa', 'Pathways')
                content = content.replace('visitor visas', 'pathways')
                content = content.replace('visitor visa', 'pathway')

            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

print("Pathways and country labels fixed across ALL HTML files!")
