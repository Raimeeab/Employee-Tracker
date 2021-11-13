  SELECT employees.id AS employee_id , employees.first_name, employees.last_name, roles.title 
    FROM employees
    LEFT JOIN roles 
    ON employees.role_id = roles.id