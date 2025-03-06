console.log("MongoDB URI:", process.env.MONGO_URI);
require("dotenv").config(); // Ensure this is at the top
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
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB")) 
  
  .catch((err) => console.error("❌ Failed to connect to MongoDB:", err));

// Schema with Validation
const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true, match: /\S+@\S+\.\S+/ },
  destination: { type: String, required: true },
  departureCity: { type: String, required: true },
  travelDate: { type: String, required: true },
  pax: { type: Number, required: true, min: 1 },
  child: { type: Number, default: 0, min: 0 }
});

const Form = mongoose.model("Form", formSchema);

// API Route for Form Submission
app.post("/api/form", async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(200).json({ message: "✅ Form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error saving form:", error);
    res.status(500).json({ error: error.message || "Failed to submit form" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
