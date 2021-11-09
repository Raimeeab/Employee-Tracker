// Import and require mysql2
const mysql = require('mysql2');

// Set Port environment to variable PORT OR to 3001 if there's nothing there
const PORT = process.env.PORT || 3001;

// Connect to database 
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: UPDATE MySQL password to something else before adding 
      password: '',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
);


