const db = require('./index.js')

const getReviewsDb = async (page, count, sort, product_id) => {
  const map = {
    helpful: 'helpfulness',
    newest: 'date',
    relevant: 'helpfulness'
  }
  const start = page * count - count
  const orderBy = map[sort] || 'helpfulness'
  const reviews = await db.query(`
      SELECT 
        id as review_id,
        rating,
        summary,
        recommend,
        response,
        body,
        date,
        reviewer_name,
        helpfulness
      FROM reviews 
      where product_id=${product_id} 
      and reported=false
      order by ${orderBy} 
      limit ${count} offset ${start}`)
    .then(reviews => reviews.rows)
    .catch(err => { console.log('Error in query reviews ', err) })
  // console.log(reviews)
  const id = reviews.map(x => x.review_id).join(',')
  const photos = await db.query(`SELECT * FROM photos where review_id in (${id})`)
    .then(photos => photos.rows)
    .catch(err => { console.log('Error in query photos ', err) })
  return { reviews, photos };
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

//getReviews(1, 100, 'newest', 544069);
module.exports = getReviews; 