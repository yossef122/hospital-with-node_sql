const express = require("express");
const {
  createRegularRoomTabe,
  insertIntoRegularRoom,
} = require("../services/RegularRoomServices");

const router = express.Router();

router.route("/").get(createRegularRoomTabe).post(insertIntoRegularRoom);

module.exports = router;
