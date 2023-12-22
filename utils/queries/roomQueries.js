
exports.createRoom = `
    CREATE TABLE IF NOT EXISTS Rooms (
        room_id INT PRIMARY KEY,
        dateTime DATE NOT NULL,
        room_number INT
    )
`;

exports.insertRoom = (req) => {
  return {
    sql: `INSERT INTO Rooms (
      room_id, room_number, dateTime
    ) VALUES (?, ?, ?);`,
    values: [req.body.room_id, req.body.room_number, req.body.dateTime],
  };
};

exports.updateRoom = (req, res) => {
  const newDateTime = req.body.dateTime;
  const newRoomNumber = req.body.room_number;

  if (!newDateTime && !newRoomNumber) {
    return res.status(400).json({
      error:
        "At least one parameter (dateTime or room_number) is required for the update.",
    });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `Rooms` SET ";
  const values = [];

  if (newDateTime) {
    sql += "`dateTime` = ?";
    values.push(newDateTime);
  }

  if (newRoomNumber) {
    if (newDateTime) {
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
