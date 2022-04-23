var client = require('./index.js')

const putHelpful = (review_id) => {
  var queryString = `
  UPDATE reviews
  SET helpfulness=helpfulness+1
  where id=${review_id}
  `
  client.connect();
  client.query(queryString)
    .then(() => { client.end() })
}

module.exports = putHelpful;

//putHelpful(5338506);