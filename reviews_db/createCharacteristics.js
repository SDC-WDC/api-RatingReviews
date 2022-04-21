const csv = require('csv-parser');
const fs = require('fs');
// const Reviews = require('./reviews.js')
const Characteristics = require('./characteristics');


fs.createReadStream('../../characteristics.csv')
  .pipe(csv())
  .on('data', (data) => {
    let result = {}
    result.characteristics_id = Number(data.id)
    result.product_id = Number(data.product_id)
    result.name = data.name
    // if (result.product_id === 4) {
    //   const characteristics = new Characteristics(result)
    //   characteristics.save()
    // }
    const characteristics = new Characteristics(result)
    characteristics.save()
  }).on('end', () => {
    console.log('finish');
  });
