const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME, 
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

pool.connect((err, client) => {
    if(err){
        throw err;
    } else {
        console.log(`connected to db on port ${process.env.DB_PORT}`);
    }
})

module.exports = pool;