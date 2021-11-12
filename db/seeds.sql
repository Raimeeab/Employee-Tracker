INSERT INTO departments (department_name)
VALUES
    ("Operations"),
    ("Maketing & Advertising"),
    ("IT"),
    ("Sales"),
    ("Finance & Accounting"),
    ("Human Resources")
;
    
INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Operations Manager", 90000, 1),
    ("Operations Assistant", 65000, 1),
    ("Marketing Manager", 90000, 2),
    ("Marketing Analyst", 80000, 2),
    ("Marketing Assistant", 65000, 2),
    ("Technical Budiness Analyst", 150000, 3),
    ("Full Stack Engineer", 100000, 3),
    ("Junior Developer", 65000, 3),
    ("Head of Sales", 85000, 4),
    ("Sales Associate", 55000, 4),
    ("Finance Manager", 120000, 5),
    ("Financial Accountant", 90000, 5),
    ("Chief of Human Resources", 90000, 6),
    ("Payroll Officer", 70000, 6)
;


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Madeline", "Hopkins", 1, 1),
    ("Helena", "Middleton", 2, NULL),
    ("Ari", "Grey", 3, 3),
    ("Chloe", "Green", 4, NULL),
    ("Robert", "Waters", 5, NULL),
    ("Ben", "Mattes", 6, 6),
    ("Raimee", "Abbassi", 7, NULL),
    ("Nick", "Smith", 8, NULL),
    ("Josh", "George", 9, 9),
    ("Georgia", "Brasch", 10, NULL),
    ("Andrea", "Petrovik", 11, 11),
    ("Yasmine", "Bawich", 12, NULL),
    ("Philip", "Ghinone", 13, 13),
    ("Anisha", "Dean", 14, NULL)
;