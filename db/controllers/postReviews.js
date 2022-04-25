var db = require('../index.js')

const postReviews = async ({ product_id, rating, summary, body, recommend, name, email, photos, characteristics }) => {
  let date = Date.now();
  let helpfulness = 0;
  let reported = false;
  let x = [product_id, rating, date, summary, body, recommend, reported, name, email, helpfulness].map(x => {
    x = typeof x === 'string' ? "'" + x + "'" : x
    return x
  }).join(',')

  // console.log(x);

  var queryString = `INSERT INTO 
  reviews(product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email, helpfulness) 
  VALUES(${x}) returning id`
  const review_id = await db.query(queryString)
    .then(data => data.rows[0].id)

  let photoQueryString = `INSERT INTO photos(review_id,url) VALUES($1,$2) returning id`
  for (let url of photos) {
    await db.query(photoQueryString, [review_id, url])
      .then(() => { })
  }

  let charQueryString = `INSERT INTO 
  characteristics_review(characteristic_id,review_id,value) 
  VALUES($1,$2,$3) returning id`
  for (let key in characteristics) {
    await db.query(charQueryString, [key, review_id, characteristics[key]])
      .then(() => { })
  }
}

module.exports = postReviews;
// let a = {
//   product_id: 15267, rating: 5, summary: 'hihihi', body: 'hello', recommend: 'true',
//   name: 'qiqi', email: '123@@gmail.com', photos: ['111', '222', '333'],
//   characteristics: { 51075: 4 }
// }
// postReviews(a)

// INSERT INTO 
//   reviews(product_id,rating,summary,body,recommend,reported,reviewer_name,reviewer_email, helpfulness) 
//   VALUES(66642,5,'kkkkkkk','kkk',false,false,'hihihi','k@k.gmail',0) 

