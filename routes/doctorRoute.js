const express = require("express");

const { insertIntoDoctorTable } = require("../services/doctorServices");

const router = express.Router();

router.route("/").get(insertIntoDoctorTable);

module.exports = router;
