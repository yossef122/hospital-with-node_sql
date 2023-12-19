const express = require("express");
const {
  createNurseTabe,
  insertIntoNurse,
  UpdateOneOrMore,
} = require("../services/nurseServices");

const router = express.Router();

router.route("/").get(createNurseTabe).post(insertIntoNurse);
router.route("/:nurseId").put(UpdateOneOrMore);

module.exports = router;
