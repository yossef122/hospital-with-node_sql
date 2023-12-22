const express = require("express");

const {
  insertIntoHospital,
  createHospitalTabe,
  UpdateOneOrMore,
} = require("../services/hospitalSevices");

const router = express.Router();

router.route("/").get(createHospitalTabe).post(insertIntoHospital);
router.route("/:hospitalName").put(UpdateOneOrMore);
module.exports = router;
