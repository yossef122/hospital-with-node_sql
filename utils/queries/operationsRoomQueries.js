exports.createOperationsRoom = `
    CREATE TABLE IF NOT EXISTS operations_Room (
        operations_Room INT PRIMARY KEY,
        room_id INT ,
        FOREIGN KEY (room_id) REFERENCES Rooms(room_id)	
    )
`;

exports.insertOperationsRoom = (req) => {
  return {
    sql: `INSERT INTO operations_Room (
      operations_Room, room_id
    ) VALUES ( ?, ?);`,
    values: [req.body.operations_Room, req.body.room_id],
  };
};

exports.updateOperationsRoom = (req, res) => {
  const newOperationsRoomId = req.body.operations_Room;
  const newRoomId = req.body.room_id;

  // Check if at least one of the values is provided
  if (!newOperationsRoomId && !newRoomId) {
    return res
      .status(400)
      .json({
        error:
          "At least one parameter (operations_Room or room_id) is required for the update.",
      });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `operations_Room` SET ";
  const values = [];

  if (newOperationsRoomId) {
    sql += "`operations_Room` = ?";
    values.push(newOperationsRoomId);
  }

  if (newRoomId) {
    if (newOperationsRoomId) {
      sql += ", "; // Add a comma if both parameters are present
    }
    sql += "`room_id` = ?";
    values.push(newRoomId);
  }

  sql += " WHERE `operations_Room` = ?;";
  values.push(req.params.operationsRoomId); // Assuming operationsRoomId is a parameter in the route

  return {
    sql,
    values,
  };
};
