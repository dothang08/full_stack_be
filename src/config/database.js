const mysql = require("mysql2") // import SQL 
require('dotenv').config()

//Create the connection database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD
});

module.exports = connection