const express = require('express');
const router = express.Router();
const offerController = require('../controllers/offerController.jsx');

// Define routes for offers
router.post('/add', offerController.createOffer); // Create a new offer
router.get('/show', offerController.getOffers); // Get all offers
router.put('/:id', offerController.updateOffer); // Update an offer
router.delete('/:id', offerController.deleteOffer); // Delete an offer

module.exports = router;
