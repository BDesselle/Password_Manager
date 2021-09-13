const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();

// PROCESS.ENV
const PORT = process.env.PORT;
const USER = process.env.USER;
const HOST = process.env.HOST;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;
// PROCESS.ENV

const db = mysql.createConnection({
    user: USER,
    host: HOST,
    password: PASSWORD,
    database: DATABASE
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, ()=>{
    console.log(`Server is listening ${HOST}:${PORT}`);
});