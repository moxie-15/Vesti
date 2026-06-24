import os
import re

base_dir = "c:/Users/MOXIE/Desktop/Vesti"

replacements = {
    # Old Dark Blue -> Charcoal
    r'#060E42': '#13110f',
    
    # Old Light Green -> WeVesti Light Green
    r'#C0C71E': '#00c758',
    
    # Old Dark Green / Accent Greens -> WeVesti Dark Green
    r'#62943B': '#00a544',
    r'#63A146': '#00a544',
    
    # Old Background Green-White -> WeVesti Cream (or White)
    r'#F4FAF2': '#f9f5f0',
}

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        for old, new in replacements.items():
            # Case insensitive replacement for the hex codes
            content = re.sub(old, new, content, flags=re.IGNORECASE)
            
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated colors in: {filepath}")
            
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

def traverse(directory):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.git' in dirs:
            dirs.remove('.git')
        if 'scratch' in dirs:
            dirs.remove('scratch')
            
        for file in files:
            if file.endswith('.html') or file.endswith('.css') or file.endswith('.js'):
                filepath = os.path.join(root, file)
                replace_in_file(filepath)

if __name__ == '__main__':
    traverse(base_dir)
    print("Color replacement complete.")
