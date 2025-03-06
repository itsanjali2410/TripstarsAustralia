require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const formRoutes = require("./routes/formRoutes");

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (Updated ✅)
mongoose
  .connect(process.env.MONGO_URI) // ✅ Removed deprecated options
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Failed to connect to MongoDB:", err));

// API Routes
app.use("/api/form", formRoutes);

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
