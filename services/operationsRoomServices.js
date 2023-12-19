const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  createOperationsRoom,
  insertOperationsRoom,
  updateOperationsRoom,
} = require("../utils/queries/operationsRoomQueries");

exports.createOperationsRoomTabe = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // Create Table
    let sql = createOperationsRoom;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.insertIntoOperationsRoom = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert OperationsRoom
    sql = insertOperationsRoom(req);
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
    sql = updateOperationsRoom(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record updated successfully.");
      // console.log(req.body);
      // connect.end((err) => {
      //   if (err) {
      //     console.error("Error closing the connection: ", err);
      //     return res.status(500).json({ message: err.message });
      //   } else {
      //     console.log(result);
      //     console.log("Connection closed successfully.");
      //   }
      // });
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});