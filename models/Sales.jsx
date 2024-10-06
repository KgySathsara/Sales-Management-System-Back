const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
  category: { type: String, required: true },
  total_sales: { type: Number, required: true },
  daily_sales: { type: Number, required: true },
  monthly_sales: { type: Number, required: true },
  yearly_sales: { type: Number, required: true },
  report_date: { type: Date, required: true },
});

module.exports = mongoose.model('Sales', salesSchema);
