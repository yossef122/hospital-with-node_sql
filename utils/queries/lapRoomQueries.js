exports.createLapRoom = `
    CREATE TABLE IF NOT EXISTS lap_Room (
        lap_Room INT PRIMARY KEY,
        room_id INT ,
        FOREIGN KEY (room_id) REFERENCES Rooms(room_id)	
    )
`;

exports.insertLapRoom = (req) => {
  return {
    sql: `INSERT INTO lap_Room (
      lap_Room, room_id
    ) VALUES ( ?, ?);`,
    values: [req.body.lap_Room, req.body.room_id],
  };
};

exports.updateLapRoom = (req, res) => {
  const newLapRoomId = req.body.lap_Room;
  const newRoomId = req.body.room_id;

  // Check if at least one of the values is provided
  if (!newLapRoomId && !newRoomId) {
    return res.status(400).json({
      error:
        "At least one parameter (lap_Room or room_id) is required for the update.",
    });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `lap_Room` SET ";
  const values = [];

  if (newLapRoomId) {
    sql += "`lap_Room` = ?";
    values.push(newLapRoomId);
  }

  if (newRoomId) {
    if (newLapRoomId) {
      sql += ", "; // Add a comma if both parameters are present
    }
    sql += "`room_id` = ?";
    values.push(newRoomId);
  }

  sql += " WHERE `lap_Room` = ?;";
  values.push(req.params.lapRoomId); // Assuming lapRoomId is a parameter in the route

  return {
    sql,
    values,
  };
};
