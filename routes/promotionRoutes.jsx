const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController.jsx');

// Routes for promotion management
router.get('/', promotionController.getAllPromotions); // Get all promotions
router.post('/', promotionController.createPromotion); // Create a new promotion
router.put('/:id', promotionController.updatePromotion); // Update a promotion by ID
router.delete('/:id', promotionController.deletePromotion); // Delete a promotion by ID

module.exports = router;
