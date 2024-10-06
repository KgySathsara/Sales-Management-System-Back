const Promotion = require('../models/promotionModel.jsx');

// Get all promotions
exports.getAllPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.getAll();
    res.json(promotions);
  } catch (error) {
    console.error('Error fetching promotions:', error);
    res.status(500).send('Server Error');
  }
};

// Create a new promotion
exports.createPromotion = async (req, res) => {
  const { name, description, image } = req.body;
  try {
    const promotion = await Promotion.create({ name, description, image });
    res.status(201).json(promotion);
  } catch (error) {
    console.error('Error creating promotion:', error);
    res.status(500).send('Server Error');
  }
};

// Update a promotion
exports.updatePromotion = async (req, res) => {
  const { id } = req.params;
  const { name, description, image } = req.body;
  try {
    const updatedPromotion = await Promotion.update(id, { name, description, image });
    res.json(updatedPromotion);
  } catch (error) {
    console.error('Error updating promotion:', error);
    res.status(500).send('Server Error');
  }
};

// Delete a promotion
exports.deletePromotion = async (req, res) => {
  const { id } = req.params;
  try {
    await Promotion.remove(id);
    res.json({ message: 'Promotion deleted successfully!' });
  } catch (error) {
    console.error('Error deleting promotion:', error);
    res.status(500).send('Server Error');
  }
};
