//const router = require('express').Router();


// // \copy reviews from '/users/tangqi/desktop/hack/sdc/reviews.csv' delimiter ',' csv header; ✅
// // \copy characteristics from '/users/tangqi/desktop/hack/sdc/characteristics.csv' delimiter ',' csv header;✅
// // \copy characterstics_review from '/users/tangqi/desktop/hack/sdc/characteristic_reviews.csv' delimiter ',' csv header; ✅
// // \copy photos from '/users/tangqi/desktop/hack/sdc/reviews_photos.csv' delimiter ',' csv header;

// // Connect to DB
// \c db_name

// // Show all tb
// \dt

// // Show dbs
// \l

// // describe table
// \d tb_name


var pg = require('pg');
var conString = "postgres://tangqi:@localhost/api_reviews";

var client = new pg.Client(conString);

module.exports = client;