const express = require("express");

const {
  getDepartmentsFromTable,
  getDoctorsFromTable,
  getHospitalsFromTable,
  getNursesFromTable,
  getPatientsFromTable,
  getPharmaciesFromTable,
  getRoomsFromTable,
  getWardBoysFromTable,
} = require("../services/getServices");

const router = express.Router();

router.route("/department/").get(getDepartmentsFromTable);
router.route("/Doctor/").get(getDoctorsFromTable);
router.route("/Hospital/").get(getHospitalsFromTable);
router.route("/Nurse/").get(getNursesFromTable);
router.route("/Patient/").get(getPatientsFromTable);
router.route("/Pharmacie/").get(getPharmaciesFromTable);
router.route("/WardBoy/").get(getWardBoysFromTable);
router.route("/Room/").get(getRoomsFromTable);


module.exports = router;
