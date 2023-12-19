exports.createIcuRoom = `
    CREATE TABLE IF NOT EXISTS icu_Room (
        icu_Room INT PRIMARY KEY,
        room_id INT ,
        FOREIGN KEY (room_id) REFERENCES Rooms(room_id)	
    )
`;

exports.insertIcuRoom = (req) => {
  return {
    sql: `INSERT INTO icu_Room (
      icu_Room, room_id
    ) VALUES ( ?, ?);`,
    values: [req.body.icu_Room, req.body.room_id],
  };
};

exports.updateIcuRoom = (req, res) => {
  const newIcuRoomId = req.body.icu_Room;
  const newRoomId = req.body.room_id;

  if (!newIcuRoomId && !newRoomId) {
    return res.status(400).json({
      error:
        "At least one parameter (icu_Room or room_id) is required for the update.",
    });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `icu_Room` SET ";
  const values = [];

  if (newIcuRoomId) {
    sql += "`icu_Room` = ?";
    values.push(newIcuRoomId);
  }

  if (newRoomId) {
    if (newIcuRoomId) {
      sql += ", "; // Add a comma if both parameters are present
    }
    sql += "`room_id` = ?";
    values.push(newRoomId);
  }

  sql += " WHERE `icu_Room` = ?;";
  values.push(req.params.icuRoomId); // Assuming icuRoomId is a parameter in the route

  return {
    sql,
    values,
  };
};


