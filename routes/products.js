const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const validateProduct = require('../middleware/validateProduct');
const asyncHandler = require('../utils/asyncHandler');

router.get('/', asyncHandler(controller.getProducts));
router.get('/search', asyncHandler(controller.searchProducts));
router.get('/stats', asyncHandler(controller.getStats));
router.get('/:id', asyncHandler(controller.getProductById));
router.post('/', validateProduct, asyncHandler(controller.createProduct));
router.put('/:id', validateProduct, asyncHandler(controller.updateProduct));
router.delete('/:id', asyncHandler(controller.deleteProduct));

module.exports = router;
