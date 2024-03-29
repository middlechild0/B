const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mysql = require('mysql2');
const dotenv = require('dotenv');


dotenv.config({path:'./.env'});

const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js');
const router = require('./routes/api.js');

const app = express();


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// __dirname
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/", router);



const PORT =4000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
