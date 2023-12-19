const express = require("express");
const {
  createPatientTabe,
  insertIntoPatient,
  UpdateOneOrMore,
} = require("../services/patientServices");

const router = express.Router();

router.route("/").get(createPatientTabe).post(insertIntoPatient);
router.route("/:patientId").put(UpdateOneOrMore);

module.exports = router;
