const csv = require('csv-parser');
const fs = require('fs');
const Reviews = require('./reviews.js');

fs.createReadStream('../../reviews.csv')
  .pipe(csv())
  .on('data', (data) => {
    // data.review_id = Number(data.id);
    // data.product_id = Number(data.product_id)
    // data.rating = Number(data.rating)
    // data.recommend = data.recommend === 'true' ? 1 : 0
    // data.reported = data.reported === 'true' ? 1 : 0
    // data.helpfulness = Number(data.helpfulness)
    // data.date = Number(data.date);
    // if (data.review_id === 10) {
    //   const newReviews = new Reviews(data);
    //   newReviews.save();
    // }
    const newReviews = new Reviews(data);
    newReviews.save();
  }).on('end', () => {
    console.log('finish');
  });