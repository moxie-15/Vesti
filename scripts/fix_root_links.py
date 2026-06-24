import os
import re

filepath = r"c:\Users\MOXIE\Desktop\Vesti\index.html"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

countries = ["New_zealand", "australia", "canada", "france", "spain", "usa", "all countries"]
for c in countries:
    # Update hrefs pointing to country folders
    content = re.sub(rf'href=["\']/?{c}/index\.html["\']', f'href="pages/countries/{c}/index.html"', content)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print('Root index.html updated.')
