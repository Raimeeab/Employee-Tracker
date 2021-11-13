  -- SELECT employees.employee_id, employees.first_name, employees.last_name, roles.title 
  --   FROM employees
  --   LEFT JOIN roles 
  --   ON employees.role_id = roles.role_id\

INSERT INTO roles (role_id, title, salary, department_id) 
 VALUES (123, "test", 1203904, 6);