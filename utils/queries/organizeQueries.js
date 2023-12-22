exports.createOrganizeTable = `
    CREATE TABLE IF NOT EXISTS organizeTable (
        organizeId INT PRIMARY KEY,
        ward_boy_id INT,
        room_id INT,
        FOREIGN KEY (ward_boy_id) REFERENCES ward_boy(ward_boy_id),
        FOREIGN KEY (room_id) REFERENCES Rooms(room_id)
    )
`;

exports.insertIntoOrganizeTable = (req) => {
  return {
    sql: `INSERT INTO organizeTable (
      ward_boy_id, room_id
    ) VALUES (?, ?);`,
    values: [req.body.ward_boy_id, req.body.room_id],
  };
};

exports.updateOrganizeTable = (req, res) => {
  const newWardBoyId = req.body.ward_boy_id;
  const newRoomId = req.body.room_id;

  // Check if at least one of the values is provided
  if (!newWardBoyId && !newRoomId) {
    return res.status(400).json({
      error:
        "At least one parameter (ward_boy_id or room_id) is required for the update.",
    });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `organizeTable` SET ";
  const values = [];

  if (newWardBoyId) {
    sql += "`ward_boy_id` = ?";
    values.push(newWardBoyId);
  }

  if (newRoomId) {
    if (newWardBoyId) {
      sql += ", "; // Add a comma if both parameters are present
    }
    sql += "`room_id` = ?";
    values.push(newRoomId);
  }

  // Assuming you have a parameter named 'wardBoyId' in your route
  sql += " WHERE `ward_boy_id` = ?;";
  values.push(req.params.wardBoyId);

  return {
    sql,
    values,
  };
};
