const { prompt } = require('inquirer');
const db = require('../db');
require('console.table');

const startMenu = async () => {
    const options = [
        "View all departments", "View all roles",
        "View all employees", "Add a Department",
        "Add a role", "Add an employee", "More choices", "Exit"
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

        case "Add a Department":
            await addDepartment();
            break;

        default: 
            console.clear();
            console.log("Goodbye");
            return; 
    }
}

function viewDepartments() { 
    db.viewDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.table(departments);
    })
    .then(() => startMenu());
};

function viewRoles() { 
    db.viewRoles()
    .then(([rows]) => {
        let roles = rows;
        console.table(roles);
    })
    .then(() => startMenu());
};

function viewEmployees() { 
    db.viewEmployees()   
    .then(([rows]) => {
        let employees = rows;
        console.table(employees);
    })
    .then(() => startMenu());
};

function addDepartment() {
    const addDepartment = [{
        type: "text",
        name: "department",
        message: "Add department?",        
    }]
    prompt(addDepartment)
    .then(({department}) => {
        console.log(department);
        db.createDepartment(department)
        .then(() => {
            console.log(`Added Department ${department}`)
        })
        .then(() => startMenu());
    })
}

module.exports = { startMenu };