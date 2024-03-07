const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "", // You should provide your actual password here
    database: "test",
    connectionLimit: 10
});

pool.query('SELECT * FROM registration', (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
});
