const mongoose = require('mongoose');

// Define the schema for promotions
const promotionSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the promotion
  description: { type: String, required: true }, // Description of the promotion
  image: { type: String, required: true }, // Image URL or Base64 string for the image
  created_at: { type: Date, default: Date.now }, // Automatically add created date
});

// Create the model from the schema
const promotionModel = mongoose.model('Promotion', promotionSchema);

module.exports = promotionModel;
