/*
Mo Chowdhury
D3Tech.io
*/

// Load environment variables.
require ('dotenv').load ()

// Call necessary modules.
const mysql = require ('mysql')

// Define MySQL connection parameters.
const dbConn = mysql.createPool ({
  host      : process.env.MYSQL_HOST,
  port      : process.env.MYSQL_PORT,
  user      : process.env.MYSQL_USER,
  password  : process.env.MYSQL_PASSWORD,
  database  : process.env.MYSQL_DATABASE
})

module.exports = dbConn;
