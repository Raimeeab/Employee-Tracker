// Require .env file 
require('dotenv').config();

// Import and require mysql2, Inquirer & console.table
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// Set Port environment to variable PORT OR to 3001 if there's nothing there
const PORT = process.env.PORT || 3001;

// Connect to database 
const db = mysql.createConnection(
    {
        // MySQL access
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the company_db database.`)
);

// If connection to db fails, throw an error
db.connect(err => {
    if (err) throw err;
});

// Basic functions
userPrompts = () => {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "Welcome to your Employee Tracker, what would you like to do?",
        choices: ["View all departments", "View all roles",
                "View all employees", "Add a Department",
                "Add a role", "Add an employee", "More choices"]
    }).then(({choice}) => {
        if(choice === "View all departments"){

        } else if (choice === "View all roles"){

        } else if (choice === "View all employees"){

        } else if (choice === "Add a Department"){

        } else if (choice === "Add a role"){

        } else if (choice === "Add an employee"){

        } else if (choice === "More choices"){
            moreChoices();
        }
    })
};

// Additional funcitons
moreChoices = () => {
    inquirer.prompt({
        type: "list",
        name: "moreChoice",
        message: "More choices:",
        choices: ["Update employee managers", "View employees by manager",
                "View employees by departments", "Delete department, role, or employee",
                "View the total utlizied budget of a department", "Go back"]
    }).then(({moreChoice}) => {
        // Each choice will lead to a different function 
        if(moreChoice === "Update employee managers"){

        } else if (moreChoice === "View employees by manager"){

        } else if (moreChoice === "View employees by departments"){

        } else if (moreChoice === "Delete department, role, or employee"){

        } else {
            userPrompts();
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

// Initialise application
init();
