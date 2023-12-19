const express = require("express");

const {
  createPharmacyTabe,
  insertIntoPharmacy,
  UpdateOneOrMore,
} = require("../services/pharmacyServices");

const router = express.Router();

router.route("/").get(createPharmacyTabe).post(insertIntoPharmacy);
router.route("/:pharmacyId").put(UpdateOneOrMore);
module.exports = router;
