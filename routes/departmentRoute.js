const express = require("express");

const {
  insertIntoDepartment,
  createDepartmentTabe,
  UpdateOneOrMore,
} = require("../services/departmentSevices");

const router = express.Router();

router.route("/").get(createDepartmentTabe).post(insertIntoDepartment);
router.route("/:departmentId").put(UpdateOneOrMore);
module.exports = router;
