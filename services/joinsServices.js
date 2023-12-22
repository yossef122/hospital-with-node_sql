const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const { join1, join2 } = require("../utils/queries/joinsQueries");

exports.join1Qeury = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    connect.query(join1, function (err, result) {
      if (err) throw err;
      return res.status(200).json({ data: result });
    });
  });
});

exports.join2Qeury = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    connect.query(join2, function (err, result) {
      if (err) throw err;
      return res.status(200).json({ data: result });
    });
  });
});
