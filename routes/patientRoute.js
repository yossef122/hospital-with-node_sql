const express = require("express");
const {
  createPatientTabe,
  insertIntoPatient,
} = require("../services/patientServices");

const router = express.Router();

router.route("/").get(createPatientTabe).post(insertIntoPatient);

module.exports = router;
