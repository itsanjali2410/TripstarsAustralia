require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection with Debugging
mongoose
.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Exit if MongoDB connection fails
});

// Define Schema and Model
const formSchema = new mongoose.Schema({
name: { type: String, required: true },
contact: { type: String, required: true },
email: { type: String, required: true },
destination: { type: String, required: true },
departureCity: { type: String, required: true },
travelDate: { type: String, required: true },
pax: { type: Number, required: true },
child: { type: Number, required: true },
});
const Form = mongoose.model("Form", formSchema);

// API Route for Form Submission with Debugging
app.get("/api/form", async (req, res) => {
console.log("🔹 Incoming Request Data:", req.body);

try {
    // Check if required fields are missing
    const requiredFields = ["name", "contact", "email", "destination", "departureCity", "travelDate", "pax", "child"];
    for (const field of requiredFields) {
     if (!req.body[field]) {
        console.error(`❌ Validation Error: Missing field -> ${field}`);
        return res.status(400).json({ error: `Validation Error: ${field} is required` });
     }
    }

    // Save form data to MongoDB
    const formData = new Form(req.body);
    await formData.save();

    console.log("✅ Form submitted successfully:", req.body);
    res.status(200).json({ message: "Form submitted successfully!", data: req.body });

} catch (error) {
    console.error("❌ Error saving form to MongoDB:", error.message);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
}
});

// **Test API Route to Check Backend**
app.get("/api/test", (req, res) => {
console.log("✅ Test API called");
res.send("API is working!");
});

// Global Error Handler Middleware
app.use((err, req, res, next) => {
console.error("🔥 Unhandled Error:", err.stack);
res.status(500).json({ error: "Internal Server Error", details: err.message });
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));