require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

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
  database: DATABASE,
});

app.post("/add_credentials", (req, res) => {
  const { title, password } = req.body;

  db.query(
    "INSERT INTO passwords (title, password) VALUES (?,?)",
    [title, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Success");
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening ${HOST}:${PORT}`);
});
