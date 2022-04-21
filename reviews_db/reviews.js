const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/apiReviews');
let repoReviews = mongoose.Schema({
  review_id: Number,
  product_id: Number,
  rating: Number,
  date: Number,
  summary: String,
  body: String,
  recommend: Boolean,
  reported: Boolean,
  reviewer_name: String,
  reviewer_email: String,
  response: String,
  helpfulness: Number,
  photos: Array,
  characteristics: Object
});
let Reviews = mongoose.model('reviews', repoReviews);


module.exports = Reviews;