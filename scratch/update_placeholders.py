import os, glob

index_file = 'c:/Users/MOXIE/Desktop/Vesti/index.html'
with open(index_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract parts
nav_end = content.find('<!-- Agent Popup Modal -->')
if nav_end == -1:
    nav_end = content.find('<!-- Live Agent Floating Button -->')

head_nav = content[:nav_end]

footer_start = content.find('<footer class="footer">')
footer_end = content.find('</html>') + 7
footer = content[footer_start:footer_end]

agent_popup_start = content.find('<!-- Live Agent Floating Button -->')
agent_popup_end = footer_start
agent_popup = content[agent_popup_start:agent_popup_end]

for file in glob.glob('c:/Users/MOXIE/Desktop/Vesti/*.html'):
    if file.replace('\\\\', '/') == index_file:
        continue
    if os.path.getsize(file) == 1112:
        basename = os.path.basename(file).replace('.html', '').replace('-', ' ').title()
        
        new_content = f'''{head_nav}
    <main style="padding: 150px 20px; text-align: center; min-height: 50vh;">
        <h1 style="font-family: 'Outfit', sans-serif; font-size: 3rem; color: #060e42;">{basename}</h1>
        <p style="font-size: 1.2rem; color: #4a5568;">This page is coming soon.</p>
    </main>
{agent_popup}
{footer}'''
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
print('Fixed all placeholder files!')
