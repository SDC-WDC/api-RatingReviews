var pg = require('pg');
const credentials = {
  user: "postgres",
  host: "3.215.63.203",
  database: "api_reviews",
  password: "5432",
};
const pool = new pg.Pool(credentials);

module.exports = pool;
