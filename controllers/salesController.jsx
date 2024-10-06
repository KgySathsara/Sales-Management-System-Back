const Sales = require('../models/Sales.jsx');

// Get sales data by category and month
exports.getSalesData = async (req, res) => {
  const { category, month } = req.body;

  try {
    const salesData = await Sales.find({
      category: category,
      report_date: {
        $gte: new Date(`${month}-01`),
        $lt: new Date(`${month}-31`)
      }
    });

    if (salesData.length === 0) {
      return res.status(404).json({ message: 'No sales data found for the given category and month' });
    }

    return res.json(salesData);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Generate new sales report
exports.generateSalesReport = async (req, res) => {
  const { category, total_sales, daily_sales, monthly_sales, yearly_sales, report_date } = req.body;

  try {
    const sales = new Sales({
      category,
      total_sales,
      daily_sales,
      monthly_sales,
      yearly_sales,
      report_date
    });

    await sales.save();
    return res.status(201).json({ message: 'Sales report generated successfully', sales });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to generate sales report', error });
  }
};
