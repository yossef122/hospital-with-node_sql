exports.createDoctor = `
    CREATE TABLE IF NOT EXISTS Doctor (
        doctor_id INT PRIMARY KEY,
        doctor_name VARCHAR(255),
        doctor_email VARCHAR(255),
        phone VARCHAR(255),
        shift DATE,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES Department(department_id)
    )
`;
