const express = require("express");
const {
  createOperationsRoomTabe,
  insertIntoOperationsRoom,
} = require("../services/OperationsRoomServices");

const router = express.Router();

router.route("/").get(createOperationsRoomTabe).post(insertIntoOperationsRoom);

module.exports = router;
