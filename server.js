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
    });
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

// ENTRANCE of app  / EXIST 