exports.createRoom = `
    CREATE TABLE IF NOT EXISTS Rooms (
        room_id INT PRIMARY KEY,
        ward_boys_id int,
        dateTime date Not NULL,
        room_number INT,
        FOREIGN KEY (ward_boys_id) REFERENCES ward_boy(ward_boy_id)
    )
`;

exports.insertRoom = (req) => {
  return {
    sql: `INSERT INTO Rooms (
      room_id, room_number, dateTime,ward_boys_id
    ) VALUES ( ?, ?, ?, ?);`,
    values: [
      req.body.room_id,
      req.body.room_number,
      req.body.dateTime,
      req.body.ward_boys,
    ],
  };
};

exports.updateRoom = (req, res) => {
  const newWardBoyId = req.body.ward_boys_id;
  const newDateTime = req.body.dateTime;
  const newRoomNumber = req.body.room_number;

  if (!newWardBoyId && !newDateTime && !newRoomNumber) {
    return res.status(400).json({
      error:
        "At least one parameter (ward_boys_id, dateTime, or room_number) is required for the update.",
    });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `Rooms` SET ";
  const values = [];

  if (newWardBoyId) {
    sql += "`ward_boys_id` = ?";
    values.push(newWardBoyId);
  }

  if (newDateTime) {
    if (newWardBoyId) {
      sql += ", "; // Add a comma if the previous parameter is present
    }
    sql += "`dateTime` = ?";
    values.push(newDateTime);
  }

  if (newRoomNumber) {
    if (newWardBoyId || newDateTime) {
      sql += ", "; // Add a comma if the previous parameters are present
    }
    sql += "`room_number` = ?";
    values.push(newRoomNumber);
  }

  sql += " WHERE `Rooms`.`room_id` = ?;";
  values.push(req.params.roomId); // Assuming roomId is a parameter in the route

  return {
    sql,
    values,
  };
};
