const csv = require('csv-parser');
const fs = require('fs');
const Reviews = require('./reviews.js')
const Characteristics = require('./characteristics.js')


// fs.createReadStream('../../characteristic_reviews.csv')
//   .pipe(csv())
//   .on('data', (data) => {
//     const id = Number(data.characteristic_id);
//     Characteristics.find({ characteristics_id: id })
//       .exec()
//       .then(res => {
//         // data.review_id = Number(data.review_id);
//         // if (res.length > 0 && data.review_id === 10) {
//         //   const name = 'characteristics.' + res[0].name
//         //   //console.log(data.review_id, name);
//         //   return Reviews.findOneAndUpdate({ review_id: data.review_id }, { characteristics: 'hihihi' }).exec()
//         //     .then((res1) => { console.log(res1) })
//         // }
//         data.review_id = Number(data.review_id);
//         if (res.length > 0) {

//         }
//       })
//       .then(review => { console.log(review) })
//       .catch(err => { })
//   }).on('end', () => {
//     console.log('finish');
//   });

fs.createReadStream('../../characteristic_reviews.csv')
  .pipe(csv())
  .on('data', (data) => {
    const id = Number(data.characteristic_id);
    Characteristics.findOneAndUpdate({ characteristics_id: id }, { value: Number(data.value), review_id: Number(data.review_id) })
      .then(() => { })
  })
  .on('end', () => {
    console.log('finish');
  });