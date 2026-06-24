import re

with open('C:/Users/MOXIE/.gemini/antigravity-ide/brain/2492dc1d-613f-4342-afa7-3bdbb11623f8/.system_generated/steps/74/content.md', 'r', encoding='utf-8') as f:
    data = f.read()

# find all css variables that define hex colors
colors = re.findall(r'--[a-zA-Z0-9-]+:\s*#[0-9a-fA-F]{3,8}\b', data)
for c in colors:
    print(c)
