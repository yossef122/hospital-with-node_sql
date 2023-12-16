const express = require("express");
const {
  createWardBoyTabe,
  insertIntoWardBoy,
} = require("../services/wardBoyServices");

const router = express.Router();

router.route("/").get(createWardBoyTabe).post(insertIntoWardBoy);

module.exports = router;
