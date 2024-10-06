const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  total_amount: { type: Number, required: true },
  status: { type: String, required: true },  // 'completed', 'pending', etc.
  created_at: { type: Date, default: Date.now },
  items: [
    {
      product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.model('Order', orderSchema);
