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

//CREATE INDEX reviews_productid_idx ON reviews (product_id);
//CREATE INDEX characteristics_productid_idx ON characteristics (product_id);
//CREATE INDEX characteristics_review_reviewid_idx ON characteristics_review (review_id);
//CREATE INDEX photos_reviewid_idx ON photos (review_id);



var pg = require('pg');
const credentials = {
  user: "tangqi",
  host: "localhost",
  database: "api_reviews",
  password: "",
};
const pool = new pg.Pool(credentials);


module.exports = pool;
