exports.createHospital = `
    CREATE TABLE IF NOT EXISTS Hospital (
        name VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255),
        phone VARCHAR(255),
        address VARCHAR(255)
    )
`;

exports.insertIntoHospital = (req) => {
  return {
    sql: `INSERT INTO Hospital (
      name, email, phone, address
    ) VALUES (?, ?, ?, ?);`,
    values: [req.body.name, req.body.email, req.body.phone, req.body.address],
  };
};

exports.updateHospital = (req, res) => {
  const newName = req.body.name;
  const newEmail = req.body.email;
  const newPhone = req.body.phone;
  const newAddress = req.body.address;

  // Check if at least one of the values is provided
  if (!newName && !newEmail && !newPhone && !newAddress) {
    return res.status(400).json({
      error:
        "At least one parameter (name, email, phone, or address) is required for the update.",
    });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `Hospital` SET ";
  const values = [];

  if (newEmail) {
    sql += "`email` = ?";
    values.push(newEmail);
  }

  if (newPhone) {
    if (newEmail) {
      sql += ", ";
    }
    sql += "`phone` = ?";
    values.push(newPhone);
  }

  if (newAddress) {
    if (newEmail || newPhone) {
      sql += ", ";
    }
    sql += "`address` = ?";
    values.push(newAddress);
  }

  // Assuming 'name' is the primary key for the Hospital table
  sql += " WHERE `name` = ?;";
  values.push(req.params.hospitalName); // Assuming hospitalName is a parameter in the route

  return {
    sql,
    values,
  };
};
