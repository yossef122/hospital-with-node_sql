const express = require("express");
const {
  createLapRoomTabe,
  insertIntoLapRoom,
} = require("../services/LapRoomServices");

const router = express.Router();

router.route("/").get(createLapRoomTabe).post(insertIntoLapRoom);

module.exports = router;
