const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "../Frontend")));

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "/*replace with your Password*/",
    database: "auth_project"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed");
    } else {
        console.log("Connected to MySQL");
    }
});

// Backend check
app.get("/", (req, res) => {
    res.send("Backend running successfully 🚀");
});


// SIGNUP
app.post("/signup", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)";

    db.query(sql, [name, email, password], (err, result) => {

        if (err) {
            res.send("Error while signing up");
        } else {
            res.redirect("/login.html");
        }

    });

});


// LOGIN
app.post("/login", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const sql = "SELECT * FROM users WHERE email=? AND password=?";

    db.query(sql, [email, password], (err, result) => {

        // if (result.length > 0) {
        //     // res.send("Login Successful ✅");
        //     res.redirect("/dashboard.html");
        // } else {
        //     res.send("Invalid Email or Password ❌");
        // }
        if (result.length > 0) {
            res.redirect("/dashboard.html");
        } else {
            res.redirect("/login.html?error=1");
        }

    });

});


// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");

});
