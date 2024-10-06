const mongoose = require('mongoose');

// Define the schema for offers
const offerSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the offer
  description: { type: String, required: true }, // Description of the offer
  code: { type: String, required: true, unique: true }, // Code/PIN for the offer
  created_at: { type: Date, default: Date.now }, // Automatically add created date
});

// Create the model from the schema
const offerModel = mongoose.model('Offer', offerSchema);

module.exports = offerModel;
