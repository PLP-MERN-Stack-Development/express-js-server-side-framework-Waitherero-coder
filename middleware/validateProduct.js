const { ValidationError } = require('../utils/customErrors');

module.exports = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || price == null || !category || inStock == null) {
    throw new ValidationError('All product fields are required');
  }
  next();
};
