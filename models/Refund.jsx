const mongoose = require('mongoose');

const refundSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  refund_amount: { type: Number, required: true },
  refund_status: { type: String, required: true },  // 'pending', 'approved', etc.
  created_at: { type: Date, default: Date.now },
  processed_at: { type: Date }  // Optional date when refund was processed
});

module.exports = mongoose.model('Refund', refundSchema);
