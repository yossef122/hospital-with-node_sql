exports.createDoctor = `
    CREATE TABLE IF NOT EXISTS Doctor (
        doctor_id INT PRIMARY KEY,
        doctor_name VARCHAR(255),
        doctor_email VARCHAR(255),
        phone VARCHAR(255),
        shift DATE,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES Department(department_id),        
        hospital_name VARCHAR(255),
        FOREIGN KEY (hospital_name) REFERENCES Hospital(name)
    )
`;

exports.insertDoctor = (req) => {
  return {
    sql: `INSERT INTO Doctor (
      doctor_id, doctor_name, doctor_email, phone, shift, department_id, hospital_name
    ) VALUES (?, ?, ?, ?, ?, ?, ?);`,
    values: [
      req.body.doctor_id,
      req.body.doctor_name,
      req.body.doctor_email,
      req.body.phone,
      req.body.shift, // Assuming the shift is provided as a valid DATE format in the request body
      req.body.department_id,
      req.body.hospital_name,
    ],
  };
};


exports.updateDoctor = (req, res) => {
  const newDoctorName = req.body.doctor_name;
  const newDoctorEmail = req.body.doctor_email;
  const newPhone = req.body.phone;
  const newShift = req.body.shift;
  const newDepartmentId = req.body.department_id;
  const newHospitalName = req.body.hospital_name;

  if (
    !newDoctorName &&
    !newDoctorEmail &&
    !newPhone &&
    !newShift &&
    !newDepartmentId &&
    !newHospitalName
  ) {
    return res.status(400).json({
      error: "At least one parameter is required for the update.",
    });
  }

  let sql = "UPDATE `Doctor` SET ";
  const values = [];

  if (newDoctorName) {
    sql += "`doctor_name` = ?";
    values.push(newDoctorName);
  }

  if (newDoctorEmail) {
    if (newDoctorName) {
      sql += ", ";
    }
    sql += "`doctor_email` = ?";
    values.push(newDoctorEmail);
  }

  if (newPhone) {
    if (newDoctorName || newDoctorEmail) {
      sql += ", ";
    }
    sql += "`phone` = ?";
    values.push(newPhone);
  }

  if (newShift) {
    if (newDoctorName || newDoctorEmail || newPhone) {
      sql += ", ";
    }
    sql += "`shift` = ?";
    values.push(newShift);
  }

  if (newDepartmentId) {
    if (newDoctorName || newDoctorEmail || newPhone || newShift) {
      sql += ", ";
    }
    sql += "`department_id` = ?";
    values.push(newDepartmentId);
  }

  if (newHospitalName) {
    if (
      newDoctorName ||
      newDoctorEmail ||
      newPhone ||
      newShift ||
      newDepartmentId
    ) {
      sql += ", ";
    }
    sql += "`hospital_name` = ?";
    values.push(newHospitalName);
  }

  sql += " WHERE `doctor_id` = ?;";
  values.push(req.params.doctorId); // Assuming doctorId is a parameter in the route

  return {
    sql,
    values,
  };
};
