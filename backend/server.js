require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ Failed to connect to MongoDB:", err));

// Define Mongoose Schema and Model
const formSchema = new mongoose.Schema({
name: String,
contact: String,
email: String,
destination: String,
departureCity: String,
travelDate: String,
pax: Number,
child: Number,
});

const Form = mongoose.model("Form", formSchema);

// API Route for Form Submission
app.post("/api/form", async (req, res) => {
try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(200).json({ message: "Form submitted successfully!" });
} catch (error) {
    console.error("❌ Error saving form:", error);
    res.status(500).json({ error: "Failed to submit form" });
}
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));