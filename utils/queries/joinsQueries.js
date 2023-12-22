exports.join1 = "SELECT patient_name,nurse_name,doctor_name,treatment,dep_name FROM patient as p JOIN doctor as d ON p.doctor_id = d.doctor_id JOIN nurse as n ON n.doctor_id = d.doctor_id JOIN department as dp ON dp.department_id = d.department_id";

exports.join2 = "SELECT nurse_name,doctor_name FROM doctor as d JOIN nurse as n ON n.doctor_id = d.doctor_id"