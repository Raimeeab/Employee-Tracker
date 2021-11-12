const mysql = require('mysql2');

require('dotenv').config();

// Connect to database 
const connection = mysql.createConnection(
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
connection.connect(err => {
    if (err) throw err;
});

module.exports = connection;