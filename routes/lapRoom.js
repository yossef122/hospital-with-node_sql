const express = require("express");
const {
  createLapRoomTabe,
  insertIntoLapRoom,
  UpdateOneOrMore,
} = require("../services/LapRoomServices");

const router = express.Router();

router.route("/").get(createLapRoomTabe).post(insertIntoLapRoom);
router.route("/:lapRoomId").put(UpdateOneOrMore);

module.exports = router;
