const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/apiReviews');
let repoCharacteristics = mongoose.Schema({
  characteristics_id: Number,
  product_id: Number,
  name: String,
  value: Number,
  review_id: Number
});
let Characteristics = mongoose.model('characteristics', repoCharacteristics);
module.exports = Characteristics;
