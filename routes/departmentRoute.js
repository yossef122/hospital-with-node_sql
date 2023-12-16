const express = require("express");

const {
  insertIntoDepartment,
  createDepartmentTabe,
} = require("../services/departmentSevices");

const router = express.Router();

router.route("/").get(createDepartmentTabe).post(insertIntoDepartment);

module.exports = router;
