  -- SELECT employees.employee_id, employees.first_name, employees.last_name, roles.title 
  --   FROM employees
  --   LEFT JOIN roles 
  --   ON employees.role_id = roles.role_id\

-- INSERT INTO roles (role_id, title, salary, department_id) 
--  VALUES (123, "test", 1203904, 6);

-- VIEW EMPLOYEES BY DEPARTMENTS
-- SELECT employees.first_name, employees.last_name, departments.department_name 
--   AS departments FROM employees 
--   JOIN roles ON employees.role_id = roles.id
--   JOIN departments ON roles.department_id = departments.id
--   ORDER BY employees.id;

-- VIEW EMPLOYEES BY MANAGERS
SELECT DISTINCT employees.first_name, employees.last_name
FROM employees;