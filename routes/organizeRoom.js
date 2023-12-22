const express = require("express");
const {
  createOrganizeTableTabe,
  insertIntoOrganizeTable,
  UpdateOneOrMore,
} = require("../services/LapRoomServices");

const router = express.Router();

router.route("/").get(createOrganizeTableTabe).post(insertIntoOrganizeTable);
router.route("/:organizeId").put(UpdateOneOrMore);

module.exports = router;
