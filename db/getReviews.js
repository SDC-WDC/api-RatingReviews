var client = require('./index.js')

const getReviewsDb = async (page, count, sort, product_id) => {
  await client.connect();
  const map = {
    helpful: 'helpfulness',
    newest: 'date',
    relevant: 'helpfulness'
  }
  const start = page * count - count
  return await client.query(`
      SELECT 
        id as review_id,
        rating,
        summary,
        recommend,
        response,
        body,
        date,
        reviewer_name,
        helpfulness,
      FROM reviews 
      where product_id=${product_id} 
      order by ${map[sort]} 
      limit ${count} offset ${start}`)
    .then(reviews => {
      reviews = reviews.rows;
      const id = reviews.map(x => x.review_id).join(',')
      return client.query(`SELECT * FROM photos where review_id in (${id})`)
        .then(photos => {
          photos = photos.rows;
          return photos
        })
        .then((photos) => {
          //console.log(photos);
          client.end()
          return { reviews, photos }
        })
    })
}

const getReviews = async (page, count, sort, product_id) => {
  const { reviews, photos } = await getReviewsDb(page, count, sort, product_id);
  //console.log(reviews, photos)
  for (let review of reviews) {
    review.date = new Date(Number(review.date))
    review.photos = [];
    for (let photo of photos) {
      if (photo.review_id === review.review_id) {
        review.photos.push({ id: photo.id, url: photo.url })
      }
    }
  }
  return reviews;
}

getReviews(1, 5, 'newest', 15267);
//module.exports = getReviews; 