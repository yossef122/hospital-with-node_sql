exports.createDoctor = `
    CREATE TABLE IF NOT EXISTS Doctor (
        doctor_id INT PRIMARY KEY,
        doctor_name VARCHAR(255),
        doctor_email VARCHAR(255),
        phone VARCHAR(255),
        shift DATE,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES Department(department_id)
    )
`;

exports.insertDoctor = (req) => {
  return {
    sql: `INSERT INTO Doctor (
      doctor_id, doctor_name, doctor_email, phone, shift, department_id
    ) VALUES (?, ?, ?, ?, ?, ?);`,
    values: [
      req.body.doctor_id,
      req.body.doctor_name,
      req.body.doctor_email,
      req.body.phone,
      req.body.shift,
      req.body.department_id,
    ],
  };
};

exports.updateDoctor = (req, res) => {
  const newDoctorId = req.body.doctor_id;
  const newDoctorName = req.body.doctor_name;
  const newDoctorEmail = req.body.doctor_email;
  const newPhone = req.body.phone;
  const newShift = req.body.shift;
  const newDepartmentId = req.body.department_id;

  if (
    !newDoctorId &&
    !newDoctorName &&
    !newDoctorEmail &&
    !newPhone &&
    !newShift &&
    !newDepartmentId
  ) {
    return res.status(400).json({
      error:
        "At least one parameter (doctor_id, doctor_name, doctor_email, phone, shift, or department_id) is required for the update.",
    });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `Doctor` SET ";
  const values = [];

  if (newDoctorId) {
    sql += "`doctor_id` = ?";
    values.push(newDoctorId);
  }

  if (newDoctorName) {
    if (newDoctorId) {
      sql += ", "; // Add a comma if the previous parameter is present
    }
    sql += "`doctor_name` = ?";
    values.push(newDoctorName);
  }

  if (newDoctorEmail) {
    if (newDoctorId || newDoctorName) {
      sql += ", "; // Add a comma if the previous parameters are present
    }
    sql += "`doctor_email` = ?";
    values.push(newDoctorEmail);
  }

  if (newPhone) {
    if (newDoctorId || newDoctorName || newDoctorEmail) {
      sql += ", "; // Add a comma if the previous parameters are present
    }
    sql += "`phone` = ?";
    values.push(newPhone);
  }

  if (newShift) {
    if (newDoctorId || newDoctorName || newDoctorEmail || newPhone) {
      sql += ", "; // Add a comma if the previous parameters are present
    }
    sql += "`shift` = ?";
    values.push(newShift);
  }

  if (newDepartmentId) {
    if (
      newDoctorId ||
      newDoctorName ||
      newDoctorEmail ||
      newPhone ||
      newShift
    ) {
      sql += ", "; // Add a comma if the previous parameters are present
    }
    sql += "`department_id` = ?";
    values.push(newDepartmentId);
  }

  sql += " WHERE `Doctor`.`doctor_id` = ?;";
  values.push(req.params.doctorId); // Assuming doctorId is a parameter in the route

  return {
    sql,
    values,
  };
};
