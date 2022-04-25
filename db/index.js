var pg = require('pg');
const credentials = {
  user: "tangqi",
  host: "localhost",
  database: "api_reviews",
  password: "",
};
const pool = new pg.Pool(credentials);


module.exports = pool;
