import os

countries = {
    'canada': ('Canada', 'CA$'), 
    'usa': ('USA', '$'), 
    'france': ('France', '€'), 
    'spain': ('Spain', '€'), 
    'australia': ('Australia', 'AU$'), 
    'New_zealand': ('New Zealand', 'NZ$')
}
workspace = r'c:\Users\MOXIE\Desktop\Vesti'

errors = 0

for folder, (name, symbol) in countries.items():
    path = os.path.join(workspace, folder, 'index.html')
    if not os.path.exists(path):
        print(f'MISSING: {path}')
        errors += 1
        continue
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if 'data-lucide' in content: 
        print(f'{folder}: Still has Lucide icons!')
        errors += 1
    if '<svg class="service-icon"' not in content: 
        print(f'{folder}: Missing custom SVGs!')
        errors += 1
    if 'Google Play / Apple Store' not in content: 
        print(f'{folder}: Missing App Download section!')
        errors += 1
    if 'Australia' in content and folder != 'australia': 
        print(f'{folder}: Accidentally contains Australia text!')
        errors += 1

if errors == 0:
    print('Cross-check complete! All pages are perfectly configured.')
else:
    print(f'Found {errors} issues during cross-check.')
