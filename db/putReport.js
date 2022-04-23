var client = require('./index.js')

const putReport = (review_id) => {
  var queryString = `
  UPDATE reviews
  SET reported=true
  where id=${review_id}
  `
  client.connect();
  client.query(queryString)
    .then(() => { client.end() })
}

putReport(4950004)
//module.exports = putReport;