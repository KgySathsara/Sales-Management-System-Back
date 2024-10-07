// routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/profitController.jsx');

// Define routes
router.post('/', salesController.createSale);  // Route to create a new sale
router.get('/show', salesController.getAllSales);   // Route to get all sales

// Export the router
module.exports = router;
