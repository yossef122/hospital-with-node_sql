const express = require("express");
const {
  createRegularRoomTabe,
  insertIntoRegularRoom,
  UpdateOneOrMore,
} = require("../services/RegularRoomServices");

const router = express.Router();

router.route("/").get(createRegularRoomTabe).post(insertIntoRegularRoom);
router.route("/:regularRoomId").put(UpdateOneOrMore);

module.exports = router;
