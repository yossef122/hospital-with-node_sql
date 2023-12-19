const express = require("express");
const {
  createOperationsRoomTabe,
  insertIntoOperationsRoom,
  UpdateOneOrMore,
} = require("../services/OperationsRoomServices");

const router = express.Router();

router.route("/").get(createOperationsRoomTabe).post(insertIntoOperationsRoom);
router.route("/:operationsRoomId").put(UpdateOneOrMore);

module.exports = router;
