// server.js - Week 2 Express.js Assignment (Full Solution)
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

app.use(logger);
app.use(bodyParser.json());
app.use(auth);

// Hello route
app.get('/', (req, res) => {
  res.send('Hello World - Product API');
});

// Routes
app.use('/api/products', productRoutes);

// 404 handler for unknown routes
app.use((req, res, next) => {
  const err = new Error('Route not found');
  err.status = 404;
  next(err);
});

// Global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
