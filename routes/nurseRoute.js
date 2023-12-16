const express = require("express");
const {
  createNurseTabe,
  insertIntoNurse,
} = require("../services/nurseServices");

const router = express.Router();

router.route("/").get(createNurseTabe).post(insertIntoNurse);

module.exports = router;
