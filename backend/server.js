require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL Database");
    }
});

// API Route to store form data
app.post("/submit-form", (req, res) => {
    const { name, contact, email, destination, departureCity, travelDate, pax, child } = req.body;
    const query = `INSERT INTO form_submissions (name, contact, email, destination, departureCity, travelDate, pax, child) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [name, contact, email, destination, departureCity, travelDate, pax, child], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database error", details: err });
        }
        res.status(200).json({ message: "Form submitted successfully!" });
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
