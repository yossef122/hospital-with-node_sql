const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const { createDoctor } = require("../utils/queries/doctorQueries");

exports.insertIntoDoctorTable = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    // Create Table
    var sql = createDoctor;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    // const name = req.body.name;
    // var sql = `INSERT INTO patient (name, address) VALUES ("${name}", 'Highway 37')`;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record Inserted");
    });
    connect.end((err) => {
      if (err) {
        console.error("Error closing the connection: ", err);
      } else {
        console.log("Connection closed successfully.");
      }
    });
    // Close the connection after all queries are executed
  });
});
