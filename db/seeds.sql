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
    ("Madeline", "Hopkins", 1, NULL),
    ("Helena", "Middleton", 2, 1),
    ("Ari", "Grey", 3, NULL),
    ("Chloe", "Green", 4, 3),
    ("Robert", "Waters", 5, 3),
    ("Ben", "Mattes", 6, NULL),
    ("Raimee", "Abbassi", 7, 6),
    ("Nick", "Smith", 8, 6),
    ("Josh", "George", 9, NULL),
    ("Georgia", "Brasch", 10, 9),
    ("Andrea", "Petrovik", 11, NULL),
    ("Yasmine", "Bawich", 12, 11),
    ("Philip", "Ghignone", 13, NULL),
    ("Anisha", "Dean", 14, 13)
;