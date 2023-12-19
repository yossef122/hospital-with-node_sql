const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  createIcuRoom,
  insertIcuRoom,
  updateIcuRoom,
} = require("../utils/queries/IcuRoomQueries");

exports.createIcuRoomTabe = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // Create Table
    let sql = createIcuRoom;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.insertIntoIcuRoom = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert IcuRoom
    sql = insertIcuRoom(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record Inserted");
      console.log(req.body);
      // connect.end((err) => {
      //   if (err) {
      //     console.error("Error closing the connection: ", err);
      //     return res.status(500).json({ message: err.message });
      //   } else {
      //     console.log("Connection closed successfully.");
      //   }
      // });
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.UpdateOneOrMore = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert Department
    sql = updateIcuRoom(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record updated successfully.");
    });

    // Close the connection after all queries are executed
    return res.status(200).json({ message: "success" });
  });
});
