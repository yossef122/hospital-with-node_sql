exports.createPatient = `
    CREATE TABLE IF NOT EXISTS Patient (
        patient_id INT PRIMARY KEY,
        patient_name VARCHAR(255),
        address VARCHAR(255),
        gender ENUM('male', 'female'),
        email VARCHAR(255),
        disease VARCHAR(255),
        marital_status VARCHAR(255),
        chronic_disease BOOLEAN,
        age VARCHAR(255),
        prescription_id INT,
        treatment VARCHAR(255),
        phone VARCHAR(255),
        room_id INT,
        doctor_id INT,
        FOREIGN KEY (room_id) REFERENCES Room(room_id),
        FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id)
    )
`;

// exports.insertPatient = (req) => {
//   console.log(req.body.id);
//   return {
//     sql: `INSERT INTO patient (id, name, address, gender,
//       email, disease, marital_status,
//       chronic_disease, age, prescription_id,
//       teatment, phone, room_id, doctor_id
//     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
//     values: [
//       req.body.id,
//       req.body.name,
//       req.body.address,
//       req.body.gender,
//       req.body.email,
//       req.body.disease,
//       req.body.marital_status,
//       req.body.chronic_disease,
//       req.body.age,
//       req.body.prescription_id,
//       req.body.teatment,
//       req.body.phone,
//       req.body.room_id,
//       req.body.doctor_id,
//     ],
//   };
// };

exports.insertPatient = (req) => {
  console.log(req.body.id);
  return {
    sql: `INSERT INTO patient (patient_id, patient_name, address, gender,
      email, disease, marital_status,
      chronic_disease, age, prescription_id,
      treatment, phone, room_id, doctor_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
    values: [
      req.body.id,
      req.body.name,
      req.body.address,
      req.body.gender,
      req.body.email,
      req.body.disease,
      req.body.marital_status,
      req.body.chronic_disease,
      req.body.age,
      req.body.prescription_id,
      req.body.teatment,
      req.body.phone,
      req.body.room_id,
      req.body.doctor_id,
    ],
  };
};

exports.updatePatient = (req, res) => {
  
  const newPatientName = req.body.patient_name;
  const newAddress = req.body.address;
  const newGender = req.body.gender;
  const newEmail = req.body.email;
  const newDisease = req.body.disease;
  const newMaritalStatus = req.body.marital_status;
  const newChronicDisease = req.body.chronic_disease;
  const newAge = req.body.age;
  const newPrescriptionId = req.body.prescription_id;
  const newTreatment = req.body.treatment;
  const newPhone = req.body.phone;
  const newRoomId = req.body.room_id;
  const newDoctorId = req.body.doctor_id;

  if (
    !newPatientName &&
    !newAddress &&
    !newGender &&
    !newEmail &&
    !newDisease &&
    !newMaritalStatus &&
    newChronicDisease === undefined &&
    !newAge &&
    !newPrescriptionId &&
    !newTreatment &&
    !newPhone &&
    !newRoomId &&
    !newDoctorId
  ) {
    return res
      .status(400)
      .json({ error: "At least one parameter is required for the update." });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `Patient` SET ";
  const values = [];

  if (newPatientName) {
    sql += "`patient_name` = ?";
    values.push(newPatientName);
  }

  if (newAddress) {
    if (newPatientName) {
      sql += ", "; // Add a comma if previous parameters are present
    }
    sql += "`address` = ?";
    values.push(newAddress);
  }

  if (newGender) {
    if (newPatientName || newAddress) {
      sql += ", "; // Add a comma if previous parameters are present
    }
    sql += "`gender` = ?";
    values.push(newGender);
  }

  if (newEmail) {
    if (newPatientName || newAddress || newGender) {
      sql += ", ";
    }
    sql += "`email` = ?";
    values.push(newEmail);
  }

  if (newDisease) {
    if (newPatientName || newAddress || newGender || newEmail) {
      sql += ", ";
    }
    sql += "`disease` = ?";
    values.push(newDisease);
  }

  if (newMaritalStatus) {
    if (newPatientName || newAddress || newGender || newEmail || newDisease) {
      sql += ", ";
    }
    sql += "`marital_status` = ?";
    values.push(newMaritalStatus);
  }

  if (newChronicDisease !== undefined) {
    if (
      newPatientName ||
      newAddress ||
      newGender ||
      newEmail ||
      newDisease ||
      newMaritalStatus
    ) {
      sql += ", ";
    }
    sql += "`chronic_disease` = ?";
    values.push(newChronicDisease);
  }

  if (newAge) {
    if (
      newPatientName ||
      newAddress ||
      newGender ||
      newEmail ||
      newDisease ||
      newMaritalStatus ||
      newChronicDisease !== undefined
    ) {
      sql += ", ";
    }
    sql += "`age` = ?";
    values.push(newAge);
  }

  if (newPrescriptionId) {
    if (
      newPatientName ||
      newAddress ||
      newGender ||
      newEmail ||
      newDisease ||
      newMaritalStatus ||
      newChronicDisease !== undefined ||
      newAge
    ) {
      sql += ", ";
    }
    sql += "`prescription_id` = ?";
    values.push(newPrescriptionId);
  }

  if (newTreatment) {
    if (
      newPatientName ||
      newAddress ||
      newGender ||
      newEmail ||
      newDisease ||
      newMaritalStatus ||
      newChronicDisease !== undefined ||
      newAge ||
      newPrescriptionId
    ) {
      sql += ", ";
    }
    sql += "`treatment` = ?";
    values.push(newTreatment);
  }

  if (newPhone) {
    if (
      newPatientName ||
      newAddress ||
      newGender ||
      newEmail ||
      newDisease ||
      newMaritalStatus ||
      newChronicDisease !== undefined ||
      newAge ||
      newPrescriptionId ||
      newTreatment
    ) {
      sql += ", ";
    }
    sql += "`phone` = ?";
    values.push(newPhone);
  }

  if (newRoomId) {
    if (
      newPatientName ||
      newAddress ||
      newGender ||
      newEmail ||
      newDisease ||
      newMaritalStatus ||
      newChronicDisease !== undefined ||
      newAge ||
      newPrescriptionId ||
      newTreatment ||
      newPhone
    ) {
      sql += ", ";
    }
    sql += "`room_id` = ?";
    values.push(newRoomId);
  }

  if (newDoctorId) {
    if (
      newPatientName ||
      newAddress ||
      newGender ||
      newEmail ||
      newDisease ||
      newMaritalStatus ||
      newChronicDisease !== undefined ||
      newAge ||
      newPrescriptionId ||
      newTreatment ||
      newPhone ||
      newRoomId
    ) {
      sql += ", ";
    }
    sql += "`doctor_id` = ?";
    values.push(newDoctorId);
  }

  sql += " WHERE `patient_id` = ?;";
  values.push(req.params.patientId); // Assuming patientId is a parameter in the route

  return {
    sql,
    values,
  };
};
