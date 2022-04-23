var db = require('./index.js')

const putHelpful = async (review_id) => {
  var queryString = `
  UPDATE reviews
  SET helpfulness=helpfulness+1
  where id=${review_id}
  `
  await db.query(queryString)
    .then(() => { })
}

module.exports = putHelpful;

//putHelpful(5338506);