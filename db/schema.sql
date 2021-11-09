DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
    id INT PRIMARY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT PRIMARY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(20,2) NOT NULL, 
    department_id INT, 
    FOREIGN KEY (department_id)
            REFERENCES departments(id)
            ON DELETE SET NULL 
);

CREATE TABLE employees (
    id INT PRIMARY, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INT, 
    FOREIGN KEY (role_id)
        REFERENCES roles(id)
        ON DELETE SET NULL, 
    manager_id INT,
    FOREIGN KEY (manager_id) 
        REFERENCES employees(id)
        ON DELETE SET NULL
);

