var client = require('./index.js')

const postReviews = async ({ product_id, rating, summary, body, recommend, name, email, photos, characteristics }) => {
  let x = [product_id, rating, summary, body, recommend, name, email].map(x => {
    x = typeof x === 'string' ? "'" + x + "'" : x
    return x
  }).join(',')
  var queryString = `INSERT INTO 
  reviews(product_id,rating,summary,body,recommend,reviewer_name,reviewer_email) 
  VALUES(${x}) returning id`
  await client.connect()
  const review_id = await client.query(queryString)
    .then(data => data.rows[0].id)

  let photoQueryString = `INSERT INTO photos(review_id,url) VALUES($1,$2) returning id`
  for (let url of photos) {
    await client.query(photoQueryString, [review_id, url])
      .then(() => { })
  }

  let charQueryString = `INSERT INTO 
  characteristics_review(characteristic_id,review_id,value) 
  VALUES($1,$2,$3) returning id`
  for (let key in characteristics) {
    await client.query(charQueryString, [key, review_id, characteristics[key]])
      .then(() => { })
  }
  client.end()
}

module.exports = postReviews;
// let a = {
//   product_id: 15267, rating: 5, summary: 'hihihi', body: 'hello', recommend: 'true',
//   name: 'qiqi', email: '123@@gmail.com', photos: ['111', '222', '333'],
//   characteristics: { 51075: 4 }
// }
// postReviews(a)

