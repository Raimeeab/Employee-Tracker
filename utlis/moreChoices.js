const inquirer = require('inquirer');
const { prompt } = require('inquirer');
const { viewDepartments } = require('../db');

const db = require('../db');
require('console.table');

const moreChoices = async () => {
    const options = [
        "Update employee managers", "View employees by manager",
        "View employees by departments", "Delete department", "Delete role", "Delete employee",
        "View the total utlizied budget of a department", "Go back"
    ];
    
    const startQuestions = [{
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: options
    }];
    
    const { startMenu } = require('./main');
    
    const answers = await prompt(startQuestions);

    switch(answers.choice) {
        case "Go back":
            await startMenu();
            break;

        case "Delete department":
            await deleteDepartment();
            break;

        default: 
            // Clear terminal & end function
            console.clear();
            console.log("Goodbye");
        return; 
    };

}


const deleteDepartment = async () => {

    const departments = await db.viewDepartments();

    const departmentChoices = departments[0].map((department) => {
        return {
            name: department.department_name,
            value: department.id
        };
    });

    const pickedDepartment = await prompt([
        {
            type: "list",
            name: "departmentId",
            message: "Which department would you like to delete?",
            choices: departmentChoices 
        },
    ]);
    console.log(pickedDepartment);
    await db.deleteDepartment(pickedDepartment);
    await viewDepartments();
}

module.exports = { moreChoices }