const express = require("express");
const {
  createWardBoyTabe,
  insertIntoWardBoy,
  UpdateOneOrMore,
} = require("../services/wardBoyServices");

const router = express.Router();

router.route("/").get(createWardBoyTabe).post(insertIntoWardBoy);
router.route("/:wardBoyId").put(UpdateOneOrMore);

module.exports = router;
