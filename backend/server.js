require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Check if required environment variables are loaded
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
  console.error("❌ Missing database environment variables. Check your .env file.");
  process.exit(1);
}

// MySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // Ensure this matches .env
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed: " + err.stack);
    process.exit(1); // Exit the server if DB connection fails
  }
  console.log("✅ Connected to MySQL database");
});

// ✅ Root route for health check
app.get("/", (req, res) => {
  res.send("🚀 Tripstars Backend is running!");
});

// API Route to Handle Form Submission
app.post("/submit-form", (req, res) => {
  const { name, contact, email, destination, departure_city, travel_date, pax, child } = req.body;

  if (!name || !contact || !email || !destination) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const query = `
    INSERT INTO submissions (name, contact, email, destination, departure_city, travel_date, pax, child) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [name, contact, email, destination, departure_city, travel_date, pax, child];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("❌ Error inserting data:", err);
      return res.status(500).json({ message: "Failed to save data" });
    }
    res.status(200).json({ message: "✅ Form submitted successfully" });
  });
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

