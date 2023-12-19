exports.createDepartment = `
    CREATE TABLE IF NOT EXISTS Department (
        department_id INT PRIMARY KEY,
        dep_name VARCHAR(255)
    )
`;

exports.insertDepartment = (req) => {
  return {
    sql: "INSERT INTO Department (department_id, dep_name) VALUES (?, ?);",
    values: [req.body.id, req.body.name],
  };
};

exports.updateDepartment = (req, res) => {
  const newDepartmentId = req.body.id;
  const newDepartmentName = req.body.department;

  console.log(newDepartmentId);
  console.log(newDepartmentName);
  console.log(req.params.departmentId);

  if (!newDepartmentId && !newDepartmentName) {
    return res.status(400).json({
      error:
        "At least one parameter (id or department) is required for the update.",
    });
  }

  let sql = "UPDATE `department` SET ";
  const values = [];

  if (newDepartmentId) {
    sql += "`department_id` = ?";
    values.push(newDepartmentId);
  }

  if (newDepartmentName) {
    if (newDepartmentId) {
      sql += ", ";
    }
    sql += "`dep_name` = ?";
    values.push(newDepartmentName);
  }

  sql += " WHERE `department`.`department_id` = ?;";
  values.push(req.params.departmentId);
  return {
    sql,
    values,
  };
};
