console.log('reading file...');
const fs = require('fs');

fs.readFile('f1', function(err, data) {
    if (err) throw err;
    console.log(data.toString('utf-8'));
});

console.log('...please wait');


