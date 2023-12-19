exports.createWardBoy = `
    CREATE TABLE IF NOT EXISTS ward_boy (
        ward_boy_id INT PRIMARY KEY,
        ward_boy_name VARCHAR(255),
        phone VARCHAR(255),
        role VARCHAR(255),
        shift DATE
    )
`;
exports.insertIntoward_boy = (req) => {
  return {
    sql: `INSERT INTO ward_boy (
      ward_boy_id, ward_boy_name,phone,role,shift
    ) VALUES ( ?, ?, ?, ?, ?);`,
    values: [
      req.body.ward_boy_id,
      req.body.ward_boy_name,
      req.body.phone,
      req.body.role,
      req.body.shift,
    ],
  };
};

exports.updateWardBoy = (req, res) => {
  const newWardBoyId = req.body.ward_boy_id;
  const newWardBoyName = req.body.ward_boy_name;
  const newPhone = req.body.phone;
  const newRole = req.body.role;
  const newShift = req.body.shift;

  if (!newWardBoyId && !newWardBoyName && !newPhone && !newRole && !newShift) {
    return res.status(400).json({
      error:
        "At least one parameter (ward_boy_id, ward_boy_name, phone, role, or shift) is required for the update.",
    });
  }

  // Build the SQL query based on the provided parameters
  let sql = "UPDATE `ward_boy` SET ";
  const values = [];

  if (newWardBoyId) {
    sql += "`ward_boy_id` = ?";
    values.push(newWardBoyId);
  }

  if (newWardBoyName) {
    if (newWardBoyId) {
      sql += ", "; // Add a comma if the previous parameter is present
    }
    sql += "`ward_boy_name` = ?";
    values.push(newWardBoyName);
  }

  if (newPhone) {
    if (newWardBoyId || newWardBoyName) {
      sql += ", "; // Add a comma if the previous parameters are present
    }
    sql += "`phone` = ?";
    values.push(newPhone);
  }

  if (newRole) {
    if (newWardBoyId || newWardBoyName || newPhone) {
      sql += ", "; // Add a comma if the previous parameters are present
    }
    sql += "`role` = ?";
    values.push(newRole);
  }

  if (newShift) {
    if (newWardBoyId || newWardBoyName || newPhone || newRole) {
      sql += ", "; // Add a comma if the previous parameters are present
    }
    sql += "`shift` = ?";
    values.push(newShift);
  }

  sql += " WHERE `ward_boy`.`ward_boy_id` = ?;";
  values.push(req.params.wardBoyId); // Assuming wardBoyId is a parameter in the route

  return {
    sql,
    values,
  };
};
