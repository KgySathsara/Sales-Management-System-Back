const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json()); // Replaced bodyParser with express.json()

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB is connected!'))
.catch((err) => console.error('MongoDB connection error:', err));

// Root route
app.get('/', (req, res) => {
  res.send('Hello, MongoDB is connected!');
});

// Sales routes
const salesRoutes = require('./routes/salesRoutes.jsx');
app.use('/api/sales', salesRoutes);

// Promotion routes
const promotionRoutes = require('./routes/promotionRoutes.jsx');
app.use('/api/promotions', promotionRoutes);

// Refund routes
const refundRoutes = require('./routes/refundRoutes.jsx');
app.use('/api', refundRoutes);

// Offer routes
const offerRoutes = require('./routes/offerRoutes.jsx');
app.use('/api/offers', offerRoutes);

// profit routes
const profitRoutes = require('./routes/profitRoutes.jsx');
app.use('/api/profit', profitRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});