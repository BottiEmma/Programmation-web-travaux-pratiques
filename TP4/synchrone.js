const fs = require('fs');
console.log('reading file...');

try{
    const data = fs.readFileSync('f1', 'utf-8');
    console.log(data);
}catch(e){ console.log(e);}

console.log('...done');
