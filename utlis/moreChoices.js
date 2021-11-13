const inquirer = require('inquirer');
const { prompt } = require('inquirer');
const { startMenu } = require('./main');

const db = require('../db');
require('console.table');

const moreChoices = async () => {
    const options = [
        "Update employee managers", "View employees by manager",
        "View employees by departments", "Delete department, role, or employee",
        "View the total utlizied budget of a department", "Go back"
    ];

    const startQuestions = [{
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: options
    }];

    const answers = await prompt(startQuestions);

    switch(answers.choice) {
        case "Go back":
            await startMenu();
            break;

        default: 
            // Clear terminal & end function
            console.clear();
            console.log("Goodbye");
        return; 
    };

}


module.exports = { moreChoices }