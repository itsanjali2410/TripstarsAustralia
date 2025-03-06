const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  destination: { type: String, required: true },
  departureCity: { type: String, required: true },
  travelDate: { type: Date, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, required: true },
});

module.exports = mongoose.model("FormSubmission", formSchema);
