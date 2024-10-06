const express = require('express');
const router = express.Router();
const { getOrders, processRefund } = require('../controllers/refundController.jsx');

// Fetch all orders
router.get('/orders', getOrders);

// Process refund
router.post('/refunds', processRefund);

module.exports = router;
