exports.createPharmacy = `
    CREATE TABLE IF NOT EXISTS Pharmacy (
        medicine_id INT PRIMARY KEY,
        medicine VARCHAR(255),
        quantity INT,
        price INT,
        hospital_name VARCHAR(255),
        FOREIGN KEY (hospital_name) REFERENCES Hospital(name)
    )
`;

exports.insertIntoPharmacy = (req) => {
  return {
    sql: `INSERT INTO Pharmacy (
      medicine_id, medicine, quantity, price, hospital_name
    ) VALUES (?, ?, ?, ?,  ?);`,
    values: [
      req.body.medicine_id,
      req.body.medicine,
      req.body.quantity,
      req.body.price,
      req.body.hospital_name, // Added hospital_name
    ],
  };
};

exports.updatePharmacy = (req, res) => {
  const { medicine,  quantity, price, hospital_name } = req.body;

  // Check if at least one of the values is provided
  if (!medicine &&  !quantity && !price && !hospital_name) {
    return res.status(400).json({
      error:
        "At least one parameter (medicine,  quantity, price, or hospital_name) is required for the update.",
    });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `Pharmacy` SET ";
  const values = [];

  const addValue = (field, value) => {
    if (value !== undefined) {
      if (values.length > 0) sql += ", ";
      sql += `\`${field}\` = ?`;
      values.push(value);
    }
  };

  addValue("medicine", medicine);
  addValue("quantity", quantity);
  addValue("price", price);
  addValue("hospital_name", hospital_name); // Added hospital_name

  sql += " WHERE `medicine_id` = ?;";
  values.push(req.params.pharmacyId); // Assuming pharmacyId is a parameter in the route

  return {
    sql,
    values,
  };
};
