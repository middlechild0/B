const mysql = require('mysql2/promise'); // Using the promise-based version of mysql2
const dotenv = require('dotenv');
dotenv.config();

// Linking to the database
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true, 
    connectionLimit: 10,
    queueLimit: 0,
});

// Handle connection errors
pool.getConnection()
  .then((connection) => {
    console.log('Connected to MySQL!');
    connection.release(); // Release the connection
  })
  .catch((error) => {
    console.error('Error connecting to MySQL:', error);
  });

module.exports = {pool};

