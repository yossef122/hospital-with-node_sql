exports.createNurse = `
    CREATE TABLE IF NOT EXISTS Nurse (
        nurse_id INT PRIMARY KEY,
        nurse_name VARCHAR(255),
        phone VARCHAR(255),
        shift DATE,
        doctor_id INT,
        FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id)
    )
`;
exports.insertIntoNurse = (req) => {
  return {
    sql: `INSERT INTO Nurse (
      nurse_id, nurse_name,phone,shift,doctor_id
    ) VALUES ( ?, ?, ?, ?, ?);`,
    values: [
      req.body.nurse_id,
      req.body.nurse_name,
      req.body.phone,
      req.body.shift,
      req.body.doctor_id,
    ],
  };
};

exports.updateNurse = (req, res) => {
  const newNurseName = req.body.nurse_name;
  const newPhone = req.body.phone;
  const newShift = req.body.shift;
  const newDoctorId = req.body.doctor_id;

  // Check if at least one of the values is provided
  if (!newNurseName && !newPhone && !newShift && !newDoctorId) {
    return res.status(400).json({
      error:
        "At least one parameter (nurse_name, phone, shift, or doctor_id) is required for the update.",
    });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `Nurse` SET ";
  const values = [];

  if (newNurseName) {
    sql += "`nurse_name` = ?";
    values.push(newNurseName);
  }

  if (newPhone) {
    if (newNurseName) {
      sql += ", "; // Add a comma if previous parameters are present
    }
    sql += "`phone` = ?";
    values.push(newPhone);
  }

  if (newShift) {
    if (newNurseName || newPhone) {
      sql += ", "; // Add a comma if previous parameters are present
    }
    sql += "`shift` = ?";
    values.push(newShift);
  }

  if (newDoctorId) {
    if (newNurseName || newPhone || newShift) {
      sql += ", "; // Add a comma if previous parameters are present
    }
    sql += "`doctor_id` = ?";
    values.push(newDoctorId);
  }

  sql += " WHERE `nurse_id` = ?;";
  values.push(req.params.nurseId); // Assuming nurseId is a parameter in the route

  return {
    sql,
    values,
  };
};
