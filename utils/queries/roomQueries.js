
exports.createRoom = `
    CREATE TABLE IF NOT EXISTS Rooms (
        room_id INT PRIMARY KEY AUTO_INCREMENT,
        dateTime DATE NOT NULL,
        room_number INT,
        room_kind_name ENUM('operations', 'icu', 'lap', 'regular') NOT NULL
    )
`;

// For inserting a room
exports.insertRoom = (req) => {
  return {
    sql: `INSERT INTO Rooms (
      room_number, dateTime, room_kind_name
    ) VALUES (?, ?, ?);`,
    values: [req.body.room_number, req.body.dateTime, req.body.room_kind_name],
  };
};

// For updating a room
exports.updateRoom = (req, res) => {
  const newDateTime = req.body.dateTime;
  const newRoomNumber = req.body.room_number;
  const newRoomKindName = req.body.room_kind_name;

  if (!newDateTime && !newRoomNumber && !newRoomKindName) {
    return res.status(400).json({
      error:
        "At least one parameter (dateTime, room_number, or room_kind_name) is required for the update.",
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

  if (newRoomKindName) {
    if (newDateTime || newRoomNumber) {
      sql += ", "; // Add a comma if the previous parameters are present
    }
    sql += "`room_kind_name` = ?";
    values.push(newRoomKindName);
  }

  sql += " WHERE `Rooms`.`room_id` = ?;";
  values.push(req.params.roomId); // Assuming roomId is a parameter in the route

  return {
    sql,
    values,
  };
};
