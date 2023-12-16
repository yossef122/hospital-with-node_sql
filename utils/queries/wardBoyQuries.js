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
