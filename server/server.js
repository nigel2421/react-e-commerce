const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sample product data (replace with your database logic)
const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 20.99 },
  { id: 3, name: 'Product 3', price: 15.99 },
  { id: 4, name: 'Product 4', price: 25.99 },
  { id: 5, name: 'Product 5', price: 30.99 },
  { id: 6, name: 'Product 6', price: 12.99 },
  { id: 7, name: 'Product 7', price: 18.99 },
  { id: 8, name: 'Product 8', price: 22.99 },
  { id: 9, name: 'Product 9', price: 35.99 }
];

app.get('/api/products', (req, res) => {
    res.json(products); // Send product data as JSON
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


