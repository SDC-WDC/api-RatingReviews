const csv = require('csv-parser');
const fs = require('fs');
const Reviews = require('./reviews.js')


fs.createReadStream('../../reviews_photos.csv')
  .pipe(csv())
  .on('data', (data) => {
    data.review_id = Number(data.review_id);
    // if (data.review_id === 10) {
    //   Reviews.findOneAndUpdate({ review_id: data.review_id }, { $push: { photos: data.url } })
    //     .then(() => { })
    // }
    Reviews.findOneAndUpdate({ review_id: data.review_id }, { $push: { photos: data.url } })
      .then(() => { })
  }).on('end', () => {
    console.log('finish');
  });
