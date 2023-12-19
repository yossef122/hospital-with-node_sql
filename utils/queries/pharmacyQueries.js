exports.createPharmacy = `
    CREATE TABLE IF NOT EXISTS Pharmacy (
        pharmacy_id INT PRIMARY KEY,
        medicine VARCHAR(255),
        doctor_id INT,
        FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id),
        quantity INT,
        price INT
    )
`;

exports.insertIntoPharmacy = (req) => {
  return {
    sql: `INSERT INTO Pharmacy (
      pharmacy_id, medicine, doctor_id, quantity, price
    ) VALUES (?, ?, ?, ?, ?);`,
    values: [
      req.body.pharmacy_id,
      req.body.medicine,
      req.body.doctor_id,
      req.body.quantity,
      req.body.price,
    ],
  };
};

exports.updatePharmacy = (req, res) => {
  const newMedicine = req.body.medicine;
  const newDoctorId = req.body.doctor_id;
  const newQuantity = req.body.quantity;
  const newPrice = req.body.price;

  // Check if at least one of the values is provided
  if (!newMedicine && !newDoctorId && !newQuantity && !newPrice) {
    return res.status(400).json({
      error:
        "At least one parameter (medicine, doctor_id, quantity, or price) is required for the update.",
    });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `Pharmacy` SET ";
  const values = [];

  if (newMedicine) {
    sql += "`medicine` = ?";
    values.push(newMedicine);
  }

  if (newDoctorId) {
    if (newMedicine) {
      sql += ", "; // Add a comma if previous parameters are present
    }
    sql += "`doctor_id` = ?";
    values.push(newDoctorId);
  }

  if (newQuantity) {
    if (newMedicine || newDoctorId) {
      sql += ", "; // Add a comma if previous parameters are present
    }
    sql += "`quantity` = ?";
    values.push(newQuantity);
  }

  if (newPrice) {
    if (newMedicine || newDoctorId || newQuantity) {
      sql += ", "; // Add a comma if previous parameters are present
    }
    sql += "`price` = ?";
    values.push(newPrice);
  }

  sql += " WHERE `pharmacy_id` = ?;";
  values.push(req.params.pharmacyId); // Assuming pharmacyId is a parameter in the route

  return {
    sql,
    values,
  };
};
