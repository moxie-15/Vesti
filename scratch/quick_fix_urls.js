const fs=require('fs');
const path=require('path');
const d='c:/Users/MOXIE/Desktop/Vesti';
function fixHtml(f){
    if(!fs.existsSync(f)) return;
    let c=fs.readFileSync(f,'utf8');
    let m=false;
    c=c.replace(/(src|href)=['"]([^'"]*)['"]/g, (match, attr, val) => {
        if(val.includes('Assets/') && !val.includes('assets/images/')) {
            let n = val.replace(/\.?\.?\/Assets\//gi, 'assets/images/');
            // Adjust depth if necessary. Since index.html is root, we just use assets/images/
            m=true;
            return `${attr}='${n}'`;
        }
        return match;
    });
    if(m) {
        fs.writeFileSync(f,c);
        console.log('Fixed', f);
    }
}
fixHtml(path.join(d, 'index.html'));
fixHtml(path.join(d, 'all countries', 'main.html'));
