const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config({path:'./.env'});

const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js');

const app = express();

// Linking to the database
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log("MySQL Connected...");
        getConnection.release(); }
});

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// __dirname
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
