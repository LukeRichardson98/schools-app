const csv = require('csvtojson');
const fs = require('fs');

csv()
    .fromFile('src/data/ks2_results_data.csv')
    .then((jsonObj) => {
        fs.writeFileSync('ks2_results_data.json', JSON.stringify(jsonObj, null, 2));
        console.log('Conversion complete');
    });
