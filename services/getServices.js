const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  getDepartments,
  getDoctors,
  getHospitals,
  getNurses,
  getPatients,
  getPharmacies,
  getRooms,
  getWardBoys,
} = require("../utils/queries/getData");

exports.getDepartmentsFromTable = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    connect.query(getDepartments, function (err, result) {
      if (err) throw err;
      return res.status(200).json({ data: result });
    });
  });
});

exports.getDoctorsFromTable = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    connect.query(getDoctors, function (err, result) {
      if (err) throw err;
      return res.status(200).json({ data: result });
    });
  });
});

exports.getHospitalsFromTable = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    connect.query(getHospitals, function (err, result) {
      if (err) throw err;
      return res.status(200).json({ data: result });
    });
  });
});

exports.getNursesFromTable = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    connect.query(getNurses, function (err, result) {
      if (err) throw err;
      return res.status(200).json({ data: result });
    });
  });
});

exports.getPatientsFromTable = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    connect.query(getPatients, function (err, result) {
      if (err) throw err;
      return res.status(200).json({ data: result });
    });
  });
});

exports.getPharmaciesFromTable = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    connect.query(getPharmacies, function (err, result) {
      if (err) throw err;
      return res.status(200).json({ data: result });
    });
  });
});

exports.getRoomsFromTable = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    connect.query(getRooms, function (err, result) {
      if (err) throw err;
      return res.status(200).json({ data: result });
    });
  });
});

exports.getWardBoysFromTable = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    connect.query(getWardBoys, function (err, result) {
      if (err) throw err;
      return res.status(200).json({ data: result });
    });
  });
});
