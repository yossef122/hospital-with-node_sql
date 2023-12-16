exports.createRegularRoom = `
    CREATE TABLE IF NOT EXISTS regular_Room (
        regular_Room INT PRIMARY KEY,
        room_id INT ,
        FOREIGN KEY (room_id) REFERENCES Rooms(room_id)	
    )
`;

exports.insertRegularRoom = (req) => {
  return {
    sql: `INSERT INTO regular_Room (
      regular_Room, room_id
    ) VALUES ( ?, ?);`,
    values: [req.body.regular_Room, req.body.room_id],
  };
};


// Update function for regular_Room table
exports.updateRegularRoom = async (req, res) => {
  const newRegularRoomId = req.body.regular_Room;
  const newRoomId = req.body.room_id;

  // Check if at least one of the values is provided
  if (!newRegularRoomId && !newRoomId) {
    return res
      .status(400)
      .json({
        error:
          "At least one parameter (regular_Room or room_id) is required for the update.",
      });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `regular_Room` SET ";
  const values = [];

  if (newRegularRoomId) {
    sql += "`regular_Room` = ?";
    values.push(newRegularRoomId);
  }

  if (newRoomId) {
    if (newRegularRoomId) {
      sql += ", "; // Add a comma if both parameters are present
    }
    sql += "`room_id` = ?";
    values.push(newRoomId);
  }

  sql += " WHERE `regular_Room` = ?;";
  values.push(req.params.regularRoomId); // Assuming regularRoomId is a parameter in the route
  return {
    sql,
    values,
  };
};