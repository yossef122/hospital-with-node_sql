const mysql = require("mysql");

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

connect.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

module.exports = connect;
