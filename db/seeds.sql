INSERT INTO departments (department_name)
VALUES
    ("Operations"),
    ("Maketing & Advertising"),
    ("IT"),
    ("Sales"),
    ("Finance & Accounting"),
    ("Human Resources")
;
    
INSERT INTO roles (role_id, title, salary, department_id)
VALUES 
    (10, "Operations Manager", 90000, 1),
    (20, "Operations Assistant", 65000, 1),
    (30, "Marketing Manager", 90000, 2),
    (40, "Marketing Analyst", 80000, 2),
    (50, "Marketing Assistant", 65000, 2),
    (60, "Technical Budiness Analyst", 150000, 3),
    (70, "Full Stack Engineer", 100000, 3),
    (80, "Junior Developer", 65000, 3),
    (90, "Head of Sales", 85000, 4),
    (100, "Sales Associate", 55000, 4),
    (110, "Finance Manager", 120000, 5),
    (120, "Chief of Human Resources", 90000, 6),
    (130, "Payroll Officer", 70000, 6)
;


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Madeline", "Hopkins", 10, NULL),
    ("Helena", "Middleton", 20, 1),
    ("Ari", "Grey", 30, NULL),
    ("Robert", "Waters", 40, 3),
    ("Ben", "Mattes", 50, NULL),
    ("Raimee", "Abbassi", 60, 6),
    ("Nick", "Smith", 70, 6),
    ("Josh", "George", 80, NULL),
    ("Georgia", "Brasch", 90, 9),
    ("Andrea", "Petrovik", 100, NULL),
    ("Yasmine", "Bawich", 110, 11),
    ("Philip", "Ghignone", 120, NULL),
    ("Anisha", "Dean", 130, 13)
;