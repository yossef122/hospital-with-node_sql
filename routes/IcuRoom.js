const express = require("express");
const {
  createIcuRoomTabe,
  insertIntoIcuRoom,
} = require("../services/IcuRoomServices");

const router = express.Router();

router.route("/").get(createIcuRoomTabe).post(insertIntoIcuRoom);

module.exports = router;
