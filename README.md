# Express.js RESTful API — Week 2 Assignment

This project is a RESTful API built using **Express.js**, implementing CRUD operations, middleware, routing, validation, authentication, error handling, filtering, search, and pagination.

## Project Structure
```
week2-express-assignment/
├─ server.js
├─ package.json
├─ .env.example
├─ routes/
│  └─ products.js
├─ controllers/
│  └─ productController.js
├─ middleware/
│  ├─ logger.js
│  ├─ auth.js
│  ├─ validateProduct.js
│  └─ errorHandler.js
├─ utils/
│  └─ asyncHandler.js
└─ data/
   └─ products.js
```

## Setup

1. Install dependencies
```bash
npm install
```

2. Copy `.env.example` to `.env` and set your API key
```bash
cp .env.example .env
```

3. Start the server
```bash
npm start
```

Server runs at `http://localhost:3000`.

## Authentication
All requests must include the header `x-api-key` with the API key from your `.env` file.

## Endpoints

- `GET /` - Hello world
- `GET /api/products` - List products (supports `?category=`, `?page=`, `?limit=`)
- `GET /api/products/:id` - Get product by id
- `GET /api/products/search?q=term` - Search products by name
- `GET /api/products/stats` - Product counts by category
- `POST /api/products` - Create product (JSON body)
- `PUT /api/products/:id` - Update product (JSON body)
- `DELETE /api/products/:id` - Delete product

## Example product body
```json
{
  "name": "Blender",
  "description": "500W household blender",
  "price": 45,
  "category": "kitchen",
  "inStock": true
}
```
