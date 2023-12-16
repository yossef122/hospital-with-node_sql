exports.createRoom = `
    CREATE TABLE IF NOT EXISTS Rooms (
        room_id INT PRIMARY KEY,
        patient_id INT Not NULL ,
        ward_boys_id int,
        dateTime date Not NULL,
        room_number INT,
        FOREIGN KEY (ward_boys_id) REFERENCES ward_boy(ward_boy_id)
    )
`;

exports.insertRoom = (req) => {
  return {
    sql: `INSERT INTO Rooms (
      room_id, room_number, dateTime,patient_id,ward_boys_id
    ) VALUES ( ?, ?, ?, ?, ?);`,
    values: [
      req.body.room_id,
      req.body.room_number,
      req.body.dateTime,
      req.body.patient_id,
      req.body.ward_boys,
    ],
  };
};

exports.updateRoom = (req, res) => {
  const newPatientId = req.body.patient_id;
  const newWardBoysId = req.body.ward_boys_id;
  const newDateTime = req.body.dateTime;
  const newRoomNumber = req.body.room_number;

  // Check if at least one of the values is provided
  if (!newPatientId && !newWardBoysId && !newDateTime && !newRoomNumber) {
    return res.status(400).json({
      error:
        "At least one parameter (patient_id, ward_boys_id, dateTime, or room_number) is required for the update.",
    });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `Rooms` SET ";
  const values = [];

  if (newPatientId) {
    sql += "`patient_id` = ?";
    values.push(newPatientId);
  }

  if (newWardBoysId) {
    if (newPatientId) {
      sql += ", "; // Add a comma if previous parameters are present
    }
    sql += "`ward_boys_id` = ?";
    values.push(newWardBoysId);
  }

  if (newDateTime) {
    if (newPatientId || newWardBoysId) {
      sql += ", "; // Add a comma if previous parameters are present
    }
    sql += "`dateTime` = ?";
    values.push(newDateTime);
  }

  if (newRoomNumber) {
    if (newPatientId || newWardBoysId || newDateTime) {
      sql += ", "; // Add a comma if previous parameters are present
    }
    sql += "`room_number` = ?";
    values.push(newRoomNumber);
  }

  sql += " WHERE `room_id` = ?;";
  values.push(req.params.roomId); // Assuming roomId is a parameter in the route

  return {
    sql,
    values,
  };
};
