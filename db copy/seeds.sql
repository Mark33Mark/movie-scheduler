INSERT INTO department ( department_id, department_name )
VALUES
    (1, "Customer Service" ),
    -- 1
    (2, "Human Resources" ),
    -- 2
    (3, "Marketing" ),
    -- 3
    (4, "Traders"),
    -- 4
    (5, "Senior Management" );
    -- 5

SELECT * FROM department;

INSERT INTO roles (roles_id, title, salary, department_id )
VALUES
-- Customer Service
(1, "phone operator", 50000, 1),
(2, "customer relations ambassador", 55000, 1),
(3, "complaints handler", 60000, 1),
-- Human Resources
(4, "internal disputes", 50000, 2),
(5, "hiring lead", 55000, 2),
(6, "legal", 60000, 2),
-- Marketing
(7, "social media coordinator", 50000, 3),
(8, "graphic designer", 55000, 3),
(9, "sponsorship coordinator", 60000, 3),
-- Traders
(10, "pre-game trader", 50000, 4),
(11, "in-game trader", 55000, 4),
(12, "trading control", 60000, 4),
-- Senior Management
(13, "customer service manager", 70000, 5),
(14, "hr manager", 70000, 5),
(15, "marketing manager", 70000, 5),
(16, "trading manager", 70000, 5);

SELECT * FROM roles;


INSERT INTO employees (employees_id, first_name, last_name, role_id, manager_id )
VALUES
-- Customer Service
    (1, "Bernd", "Leno", 1, 13),
    (2, "Thomas", "Partey", 2, 13),
    (3, "Gabriel", "Magalhaes", 3, 13),
-- Human Resources
    (4, "Martin", "Odegaard", 4, 14),
    (5, "Pierre", "Aubameyang", 5, 14),
    (6, "Ainsley", "Maitland-Niles", 6, 14),
-- Marketing
    (7, "Cedric", "Soares", 7, 15),
    (8, "Nuno", "Tavares", 8, 15),
    (9, "Calum", "Chambers", 9, 15),
-- Traders
    (10, "Albert", "Sambi-Lokonga", 10, 16),
    (11, "Eddie", "Nketiah", 11, 16),
    (12, "Aaron", "Ramsdale", 12, 16),
-- Senior Management
    (13, "Arthur", "Okonkwo", 13, NULL),
    (14, "Granit", "Xhaka", 14, NULL),
    (15, "Gabriel", "Martinelli", 15, NULL),
    (16, "William", "Saliba", 16, NULL);
    -- UPDATE employee SET manager_id=9 WHERE id!=9;

SELECT * FROM employees;
