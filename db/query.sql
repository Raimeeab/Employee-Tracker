  SELECT employees.id AS employee_id , employees.first_name, employees.last_name, roles.id AS role_id, roles.title 
    FROM employees
    LEFT JOIN roles 
    ON employees.id = roles.id