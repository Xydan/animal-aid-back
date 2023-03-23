var mysql = require('mysql');

module.exports = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "animal_aid"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });