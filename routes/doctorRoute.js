const express = require("express");

const {
  createDoctorTabe,
  insertIntoDoctor,
  UpdateOneOrMore,
} = require("../services/doctorServices");

const router = express.Router();

router.route("/").get(createDoctorTabe).post(insertIntoDoctor);
router.route("/:doctorId").put(UpdateOneOrMore);
module.exports = router;
