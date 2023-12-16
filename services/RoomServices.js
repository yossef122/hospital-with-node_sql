const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const { createRoom, insertRoom } = require("../utils/queries/roomQueries");

exports.createRoomTabe = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // Create Table
    let sql = createRoom;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.insertIntoRoom = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert Room
    sql = insertRoom(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record Inserted");
      console.log(req.body);
      connect.end((err) => {
        if (err) {
          console.error("Error closing the connection: ", err);
          return res.status(500).json({ message: err.message });
        } else {
          console.log("Connection closed successfully.");
        }
      });
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});
