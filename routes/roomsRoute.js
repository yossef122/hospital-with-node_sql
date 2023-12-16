const express = require("express");
const {
  createRoomTabe,
  insertIntoRoom,
} = require("../services/RoomServices");

const router = express.Router();

router.route("/").get(createRoomTabe).post(insertIntoRoom);

module.exports = router;
