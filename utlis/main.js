const inquirer = require('inquirer');
const { prompt } = require('inquirer');
const { moreChoices } = require('./moreChoices');
const { end } = require('./displayArt');

const db = require('../db');
require('console.table');

const startMenu = async () => {
    try {

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
        }];
    
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
    
            case "Update employee role":
                await updateEmployee();
                break;
    
            case "More choices": 
                await moreChoices();
                break;
    
            default: 
                // Clear terminal & end function
                console.clear();
                end();
            return; 
        };
    } catch(err) {
        console.err("An error occurred:", err)
    }
};

// View departments
function viewDepartments() { 
    try {
        db.viewDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.table(departments);
    })
    .then(() => startMenu());
    } catch(err) {
        console.error("An error occurred:", err)
    }
};

// View roles
function viewRoles() { 
    try {
        db.viewRoles()
    .then(([rows]) => {
        let roles = rows;
        console.table(roles);
    })
    .then(() => startMenu()); 
    } catch(err) {
        console.error("An error occurred:", err);
    };
};

//  View employees
function viewEmployees() { 
    try {
         db.viewEmployees()   
    .then(([rows]) => {
        let employees = rows;
        console.table(employees);
    })
    .then(() => startMenu());
    } catch(err) {
        console.error("An error occurred:", err);
    };
};

// Add a department
function addDepartment() {
    try {
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
        .then(() => viewDepartments());
    });
    } catch(err) {
        console.error("An error occurred:", err);
    };
};

// Add a role
function addRole() {
    try {
        const addRole = [
        {
            type: "text",
            name: "id",
            message: "What is the role id? It must be a number",
            validate: (input) => {
                let userInput = parseInt(input);
                return !Number.isNaN(userInput);
            }
            
        },
        {
            type: "text",
            name: "role",
            message: "What is the title?",        
        },
        {
            type: "text",
            name: "salary",
            message: "What is the salary? (Can have up to two decimals)",
            validate: (input) => {
                let userInput = parseInt(input);
                return !Number.isNaN(userInput);
            }
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
        .then(() => viewRoles());
    });
    } catch(err) {
        console.error("An error occurred:", err);
    }
    
};

// Add an employee
function addEmployee() {
    try {

        //query db to display all managers 
        db.getManagers()
        .then(([rows]) => {
            let managers = rows;
    
            // query db to display all roles 
            db.viewRoles()
            .then(([roles]) => {
                const managerChoices = [
                    {
                        // In the event that the added employee is a manager
                        name: "No manager",
                        value: "NULL"
                    },
                ]
    
                // Push all managers from db into managerChoice array
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
                .then(() => viewEmployees());
    
                });
            });
        });
    } catch (err) {
       console.error("An error occurred:", err);
    }
};

// Update employee
async function updateEmployee() {
    try {

        const employees =  await db.viewEmployees();
        // console.table(employees[0]);
    
        const employeeChoices =  employees[0].map((employees) => {
            return { 
                name: employees.first_name + " " + employees.last_name,
                value: employees.id
            }; 
        });
    
        const selectedEmployee = await prompt([
            {
                type: "list",
                name: "employeeId",
                message: "Which employee would you like to update?",
                choices: employeeChoices
            },
        ]);
    
        const roles = await db.viewRoles();
        // console.table(roles[0]);
    
        const roleChoices = roles[0].map((role) => {
            return {
                name: role.title,
                value: role.id
            }
        });
    
        const newRole = await prompt([
            {
                type: "list",
                name: "roleId",
                message: "What is their new role?",
                choices: roleChoices
            },
        ]);
        
        // console.table(selectedEmployee)
        // console.table(newRole)
        await db.updateEmployeeDb(selectedEmployee, newRole)
        await viewEmployees();
    } catch(err) {
        console.error("An error occurred:", err);
    };
};


module.exports = { startMenu }