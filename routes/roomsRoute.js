const express = require("express");
const {
  createRoomTabe,
  insertIntoRoom,
  UpdateOneOrMore,
} = require("../services/RoomServices");

const router = express.Router();

router.route("/").get(createRoomTabe).post(insertIntoRoom);
router.route("/:roomId").put(UpdateOneOrMore);

module.exports = router;
