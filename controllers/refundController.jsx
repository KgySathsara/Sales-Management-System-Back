const Order = require('../models/Order.jsx');
const Refund = require('../models/Refund.jsx');

// Fetch all orders (with optional filtering)
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('customer_id');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders.' });
  }
};

// Process a refund for a given order
exports.processRefund = async (req, res) => {
  const { orderId } = req.body;

  try {
    // Find the order
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    // Check if a refund already exists for this order
    const existingRefund = await Refund.findOne({ order_id: orderId });

    if (existingRefund) {
      return res.status(400).json({ message: 'Refund already processed for this order.' });
    }

    // Process the refund
    const refund = new Refund({
      order_id: orderId,
      refund_amount: order.total_amount,
      refund_status: 'approved',
    });

    await refund.save();

    // Update the order status (optional)
    order.status = 'refunded';
    await order.save();

    res.json({ message: 'Refund processed successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to process refund.' });
  }
};
