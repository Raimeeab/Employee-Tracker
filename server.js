// Import and require mysql2, Inquirer & console.table
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// Set Port environment to variable PORT OR to 3001 if there's nothing there
const PORT = process.env.PORT || 3001;

// Connect to database 
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the company_db database.`)
);


// ENTRANCE of app  / EXIST 

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT} 🚀`);
//   });