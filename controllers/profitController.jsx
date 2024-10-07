// controllers/salesController.js
const Sales = require('../models/Profit.jsx');

// Create a new sale
exports.createSale = async (req, res) => {
  const { category, amount, date, commission } = req.body;

  try {
    const newSale = new Sales({ category, amount, date, commission });
    await newSale.save();
    res.status(201).json(newSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all sales
exports.getAllSales = async (req, res) => {
  try {
    const salesData = await Sales.find();
    res.json(salesData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

