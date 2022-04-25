const db = require('../index.js')

const getReviewsMetaDb = async (product_id) => {
  return await db.query(`
    SELECT 
      reviews.rating,
      reviews.recommend,
      characteristics.name,
      characteristics_review.value,
      characteristics.id as char_id
    FROM reviews
    join characteristics
    on reviews.product_id=characteristics.product_id
    join characteristics_review
    on characteristics_review.review_id=reviews.id
    where reviews.product_id=${product_id} 
    `)
    .then(res => res.rows)
}

const getReviewsMeta = async (product_id) => {
  const reviews = await getReviewsMetaDb(product_id);
  let metaData = {}
  metaData.product_id = product_id;
  metaData.ratings = reviews.reduce((res, x) => {
    res[x.rating] = res[x.rating] + 1 || 1
    return res
  }, {})
  metaData.recommended = reviews.reduce((res, x) => {
    let rec = x.recommend
    res[rec] = res[rec] + 1 || 1
    return res
  }, {})
  metaData.characteristics = reviews.reduce((res, x) => {
    res[x.name] = {
      id: x.char_id, value: res[x.name] ? Number(res[x.name].value) + Number(x.value) : Number(x.value),
      cnt: res[x.name] ? res[x.name].cnt + 1 : 1
    }
    return res;
  }, {})
  for (let key in metaData.characteristics) {
    metaData.characteristics[key].value = (metaData.characteristics[key].value / metaData.characteristics[key].cnt).toFixed(4)
    delete metaData.characteristics[key].cnt
  }

  return metaData;
}

module.exports = getReviewsMeta

//getReviewsMeta(15267)
//ALTER TABLE characteristics_review RENAME TO characteristics_review;