require('dotenv').config();
const express = require('express');
const getReviews = require('../db/getReviews.js')
// const router = require('express').Router();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const handleGetReviews = (req, res) => {
  console.log(req)
  getReviews()
}

// const getReviewsMeta = () => {
//   console.log('getReviewsMeta');
// }


// const postReviews = () => {
//   console.log('postReviews')
// }

// const putHelpful = () => {
//   console.log('putHelpful');
// }

// const putReport = () => {
//   console.log('putReport');
// }


app.get('/reviews', handleGetReviews)
// app.get('/reviews/meta', getReviewsMeta)
// app.post('/reviews', postReviews)
// app.put('/reviews/:review_id/helpful', putHelpful)
// app.put('/reviews/:review_id/report', putReport)

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

