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
        message: "Welcome to your Employee Tracker, what would you like to do?",
        choices: options
        
    }]

    const answers = await prompt(startQuestions)

    switch(answers.choice) {
        case "View all departments":
            await viewDepartments();
            break;
        // case "View all roles"

        // case "View all employees"

        case "Add a Department":
            await addDepartment();
            break;


        default: 
            console.clear();
            console.log("Goodbye");
            return; 
    }
}

// startMenu();

function viewDepartments() { 
    db.viewDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.table(departments);
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