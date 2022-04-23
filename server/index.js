require('dotenv').config();
const express = require('express');
const getReviews = require('../db/getReviews.js');
const getReviewsMeta = require('../db/getReviewsMeta.js');
const postReviews = require('../db/postReviews.js');
const putHelpful = require('../db/putHelpful.js');
const putReport = require('../db/putReport.js');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const handleGetReviews = async (req, res) => {
  let { sort = 'newest', page = 1, product_id, count = 10 } = req.query
  product_id = Number(product_id)
  page = Number(page)
  count = Number(count)
  let results = await getReviews(page, count, sort, product_id)
  let data = {}
  data.product = product_id;
  data.page = page;
  data.count = count;
  data.results = results;
  res.send(data);
}

const handleGetReviewsMeta = async (req, res) => {
  let { product_id } = req.query;
  product_id = Number(product_id);
  let meta = await getReviewsMeta(product_id)
  res.send(meta);
}


const handlePostReviews = async (req, res) => {
  let data = req.body;
  await postReviews(data);
  res.send();
}


const handlePutHelpful = async (req, res) => {
  let { review_id } = req.params;
  await putHelpful(review_id);
  res.send();
}

const handlePutReport = async (req, res) => {
  let { review_id } = req.params;
  await putReport(review_id);
  res.send();
}


app.get('/reviews', handleGetReviews)
app.get('/reviews/meta', handleGetReviewsMeta)
app.post('/reviews', handlePostReviews)
app.put('/reviews/:review_id/helpful', handlePutHelpful)
app.put('/reviews/:review_id/report', handlePutReport)

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

