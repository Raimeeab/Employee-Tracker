// Require .env file 
require('dotenv').config();

// Import and require mysql2, Inquirer & console.table
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const Choice = require('inquirer/lib/objects/choice');

// Set Port environment to variable PORT OR to 3001 if there's nothing there
const PORT = process.env.PORT || 3001;

// Connect to database 
const db = mysql.createConnection(
    {
        // MySQL username,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the company_db database.`)
);

db.connect(err => {
    if (err) throw err;
});

userPrompts = () => {
    inquirer.prompt({
        type: "list",
        name: "Welcome to your Employee Tracker, what would you like to do?",
        choices: ["View all departments", "View all roles",
                "View all employees", "Add a Department",
                "Add a role", "Add an employee", "More choices"]
    }).then((choices) => {
        if(choices === "View all departments"){

        } else if (choices === "View all roles"){

        } else if (choices === "View all employees"){

        } else if (choices === "Add a Department"){

        } else if (choices === "Add a role"){

        } else if (choices === "Add an employee"){

        } else if (choices === "More choices"){
            moreChoices();
        }
    })
};

init = () => {
    console.log("===================================");
    console.log("||                               ||");
    console.log("||       EMPLOYEE TRACKER        ||");
    console.log("||              CSM              ||");
    console.log("||                               ||");
    console.log("===================================");
    userPrompts();
};

init();


moreChoices = () => {
    inquirer.prompt({
        type: "list",
        name: "More choices:",
        choices: ["Update employee managers", "View employees by manager",
                "View employees by departments", "Delete department, role, or employee",
                "View the total utlizied budget of a department", "Go back"]
    }).then((choices) => {
        // Each choice will lead to a different function 
        if(choices === "Update employee managers"){

        } else if (choices === "View employees by manager"){

        } else if (choices === "View employees by departments"){

        } else if (choices === "Delete department, role, or employee"){

        } else {
            userPrompts();
        }
    })
};
// ENTRANCE of app  / EXIST 