// models/Sales.js
const mongoose = require('mongoose');

const profitSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  commission: {
    type: Number,
    default: 0,
  },
});

// Export the model
const Sales = mongoose.model('Profit', profitSchema);
module.exports = Sales;
