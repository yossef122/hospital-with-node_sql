const express = require("express");
const {
  createIcuRoomTabe,
  insertIntoIcuRoom,
  UpdateOneOrMore,
} = require("../services/IcuRoomServices");

const router = express.Router();

router.route("/").get(createIcuRoomTabe).post(insertIntoIcuRoom);
router.route("/:icuRoomId").put(UpdateOneOrMore);

module.exports = router;
