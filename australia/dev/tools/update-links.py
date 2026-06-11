import re

with open('clarity.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the onclick action for the cards
content = content.replace("onclick=\"window.open('https://site.wevesti.com/register', '_blank');\"", "onclick=\"location.href='clarity_payment.html';\"")

# Replace the Watch Session links
content = content.replace("<a href=\"https://site.wevesti.com/register\" target=\"_blank\"", "<a href=\"clarity_payment.html\"")

with open('clarity.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated links in clarity.html to point to clarity_payment.html successfully.")
