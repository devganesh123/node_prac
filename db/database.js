const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "node",
  password: "node",
  database: "node_blog",
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

module.exports = connection;
