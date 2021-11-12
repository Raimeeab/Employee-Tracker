const { prompt } = require('inquirer');
const { getManagers } = require('../db');
const db = require('../db');
require('console.table');

const startMenu = async () => {
    const options = [
        "View all departments", "View all roles",
        "View all employees", "Add a department",
        "Add a role", "Add an employee", 
        "Update employee role", "More choices", "Exit"
    ]; 
    const startQuestions = [{
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: options
        
    }]

    const answers = await prompt(startQuestions)

    switch(answers.choice) {
        case "View all departments":
            await viewDepartments();
            break;

        case "View all roles":
            await viewRoles();
            break;

        case "View all employees":
            await viewEmployees();
            break;

        case "Add a department":
            await addDepartment();
            break;
        
        case "Add a role":
            await addRole();
            break;

        case  "Add an employee":
            await addEmployee();
            break;

        default: 
            console.clear();
            console.log("Goodbye");
            return; 
    }
}

// View departments
function viewDepartments() { 
    db.viewDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.table(departments);
    })
    .then(() => startMenu());
};

// View roles
function viewRoles() { 
    db.viewRoles()
    .then(([rows]) => {
        let roles = rows;
        console.table(roles);
    })
    .then(() => startMenu());
};

//  View employees
function viewEmployees() { 
    db.viewEmployees()   
    .then(([rows]) => {
        let employees = rows;
        console.table(employees);
    })
    .then(() => startMenu());
};

// Add a department
function addDepartment() {
    const addDepartment = [{
        type: "text",
        name: "department",
        message: "What is the department name?",        
    }];
    prompt(addDepartment)
    .then(({department}) => {
        console.log(department);
        db.createDepartment(department)
        .then(() => {
            console.log(`Added Department ${department}`)
        })
        .then(() => startMenu());
    });
};

// Add a role
function addRole() {
    const addRole = [
        {
            type: "text",
            name: "role",
            message: "What is the title?",        
        },
        {
            type: "text",
            name: "salary",
            message: "What is the salary?",
        },
        {
            type: "text",
            name: "departmentId",
            message: "What is the department ID?",
            default: "NULL"
        },
    ];
    prompt(addRole)
    .then((role) => {
        console.log(role);
        db.createRole(role)
        .then(() => {
            console.log(`Added role ${role}`)
        })
        .then(() => startMenu());
    });
};

// Add an employee
function addEmployee() {
    //query db to display all managers 
    db.getManagers()
    .then(([rows]) => {
        let managers = rows;
        // query db to display all roles 
        db.viewRoles()
        .then(([roles]) => {
            // console.table(roles);
            // console.table(managers);
            const managerChoices = [
                {
                    name: "No Manager",
                    value: "NULL"
                },
            ]
            managers.forEach((manager) => {
                managerChoices.push({
                    name: manager.first_name  + " " + manager.last_name,
                    value: manager.id                  
                });
            });
           const addEmployee = [
            {
                type: "text",
                name: "first",
                message: "What is the employee's first name?",        
            },
            {
                type: "text",
                name: "last",
                message: "What is the employee's last name?",
            },
            {
                type: "list",
                name: "roleId",
                message: "What is the role?",
                choices: 
                    // for every choice an array 
                roles.map((role) => {
                    // roles array contains all the coloumns & 
                    return {
                        name: role.title,
                        value: role.id
                    };
                })
            },
            {
                type: "list",
                name: "managerId",
                message: "Who is the manager?",
                choices: managerChoices
            },
        ];  
        prompt(addEmployee)
        .then((employee) => {
            console.log(employee);
            db.createEmployee(employee)
            .then(() => {
                console.log(`Added employee ${employee}`)
            })
            .then(() => startMenu());
            });
        })
    })
}
module.exports = { startMenu }