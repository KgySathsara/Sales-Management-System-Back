const express = require('express');
const { getSalesData, generateSalesReport } = require('../controllers/salesController.jsx');

const router = express.Router();

// Route to get sales data based on category and month
router.post('/get-sales-data', getSalesData);

// Route to generate a sales report
router.post('/generate-sales-report', generateSalesReport);

module.exports = router;
