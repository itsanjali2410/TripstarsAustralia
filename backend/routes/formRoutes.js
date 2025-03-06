const express = require("express");
const FormSubmission = require("../models/FormSubmission");

const router = express.Router();

// Submit Form Data
router.post("/submit", async (req, res) => {
  try {
    const newSubmission = new FormSubmission(req.body);
    await newSubmission.save();
    res.status(201).json({ message: "✅ Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "❌ Error saving form: " + error.message });
  }
});

module.exports = router;
