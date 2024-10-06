const offerModel = require('../models/Offer.jsx'); // Adjust the path as necessary

// Create a new offer
exports.createOffer = async (req, res) => {
  try {
    const newOffer = new offerModel(req.body);
    await newOffer.save();
    res.status(201).json({ message: 'Offer created successfully!', offer: newOffer });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create offer.', error: error.message });
  }
};

// Get all offers
exports.getOffers = async (req, res) => {
  try {
    const offers = await offerModel.find();
    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch offers.', error: error.message });
  }
};

// Update an offer
exports.updateOffer = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedOffer = await offerModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedOffer) {
      return res.status(404).json({ message: 'Offer not found.' });
    }
    res.status(200).json({ message: 'Offer updated successfully!', offer: updatedOffer });
  } catch (error) {
    res.status(400).json({ message: 'Failed to update offer.', error: error.message });
  }
};

// Delete an offer
exports.deleteOffer = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOffer = await offerModel.findByIdAndDelete(id);
    if (!deletedOffer) {
      return res.status(404).json({ message: 'Offer not found.' });
    }
    res.status(200).json({ message: 'Offer deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete offer.', error: error.message });
  }
};
