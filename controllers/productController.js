const { products, uuid } = require('../data/products');
const { NotFoundError } = require('../utils/customErrors');

// GET products with filtering & pagination
exports.getProducts = (req, res) => {
  let result = products;

  if (req.query.category) {
    result = result.filter(p => p.category === req.query.category);
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const start = (page - 1) * limit;
  const end = start + limit;

  res.json({
    total: result.length,
    page,
    limit,
    data: result.slice(start, end)
  });
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) throw new NotFoundError('Product not found');
  res.json(product);
};

exports.createProduct = (req, res) => {
  const newProduct = { id: uuid(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const idx = products.findIndex(p => p.id === req.params.id);
  if (idx === -1) throw new NotFoundError('Product not found');
  products[idx] = { id: req.params.id, ...req.body };
  res.json(products[idx]);
};

exports.deleteProduct = (req, res) => {
  const idx = products.findIndex(p => p.id === req.params.id);
  if (idx === -1) throw new NotFoundError('Product not found');
  const deleted = products.splice(idx, 1);
  res.json(deleted[0]);
};

exports.searchProducts = (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const results = products.filter(p => p.name.toLowerCase().includes(q));
  res.json(results);
};

exports.getStats = (req, res) => {
  const stats = {};
  products.forEach(p => stats[p.category] = (stats[p.category] || 0) + 1);
  res.json(stats);
};
