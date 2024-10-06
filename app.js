const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB is connected!'))
.catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello, MongoDB is connected!');
});

// Sales routes
const salesRoutes = require('./routes/salesRoutes.jsx');
app.use('/api/sales', salesRoutes);
const promotionRoutes = require('./routes/promotionRoutes.jsx');
app.use('/api/promotions', promotionRoutes);
const refundRoutes = require('./routes/refundRoutes.jsx');
app.use('/api', refundRoutes);
const offerRoutes = require('./routes/offerRoutes.jsx');
app.use('/api/offers', offerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
