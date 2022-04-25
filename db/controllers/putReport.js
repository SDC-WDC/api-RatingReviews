var db = require('../index.js')

const putReport = async (review_id) => {
  var queryString = `
  UPDATE reviews
  SET reported=true
  where id=${review_id}
  `
  await db.query(queryString)
    .then(() => { })
}

module.exports = putReport;
//putReport(4950004)