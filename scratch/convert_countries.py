import os
import re
from bs4 import BeautifulSoup

countries = [
    ("USA", "usa"),
    ("Canada", "canada"),
    ("Australia", "australia"),
    ("France", "france"),
    ("Spain", "spain"),
    ("NewZealand", "New_zealand"),
]

def html_to_jsx(html_str):
    # Basic replacements to make HTML valid JSX
    jsx = html_str.replace("class=", "className=")
    jsx = jsx.replace("for=", "htmlFor=")
    jsx = re.sub(r'<img([^>]*)(?<!/)>', r'<img\1 />', jsx)
    jsx = re.sub(r'<br([^>]*)(?<!/)>', r'<br\1 />', jsx)
    jsx = re.sub(r'<hr([^>]*)(?<!/)>', r'<hr\1 />', jsx)
    jsx = re.sub(r'<input([^>]*)(?<!/)>', r'<input\1 />', jsx)
    jsx = jsx.replace("<!--", "{/*").replace("-->", "*/}")
    
    # Fix style strings (this is a naive approach, might need manual fixes if styles are complex, 
    # but we will just strip inline styles or try to parse them if possible.
    # For now, let's keep it simple: we will just replace style="..." with a comment or leave it for manual fix.
    # Actually, removing style attributes might ruin the beautiful layout. Let's try to parse simple styles.
    def style_replacer(match):
        style_str = match.group(1)
        styles = {}
        for rule in style_str.split(';'):
            if ':' in rule:
                key, val = rule.split(':', 1)
                key = key.strip()
                val = val.strip()
                # camelCase the key
                key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
                styles[key] = val
        
        style_obj_str = "{" + ", ".join([f'"{k}": "{v}"' for k, v in styles.items()]) + "}"
        return f"style={{{style_obj_str}}}"
    
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    jsx = re.sub(r"style='([^']*)'", style_replacer, jsx)
    return jsx

for name, folder in countries:
    html_file = f"c:/Users/MOXIE/Desktop/Vesti/pages/countries/{folder}/index.html"
    if not os.path.exists(html_file):
        print(f"File not found: {html_file}")
        continue
    
    with open(html_file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # Remove agent-modal-overlay as it's replaced by AgentModal.jsx
    for modal in soup.select('.agent-modal-overlay'):
        modal.decompose()
        
    # We want everything between nav and footer, or just find all <section> elements
    sections = soup.find_all('section')
    if not sections:
        print(f"No sections found for {name}")
        continue
    
    # Combine sections back to string
    combined_html = "".join(str(s) for s in sections)
    
    # Convert to JSX
    jsx_content = html_to_jsx(combined_html)
    
    # Wrap in React Component
    react_code = f"""import React, {{ useEffect }} from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const {name} = () => {{
    useEffect(() => {{
        window.scrollTo(0, 0);
    }}, []);

    return (
        <div className="country-page">
            <Navbar />
            <div className="page-content">
                {jsx_content}
            </div>
            <Footer />
        </div>
    );
}};

export default {name};
"""
    
    out_file = f"c:/Users/MOXIE/Desktop/Vesti/src/pages/{name}.jsx"
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(react_code)
    print(f"Created {out_file}")

