const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

//                             /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
//                           /admin/add-product => POST
router.post('/add-product', (req, res, next) => {   //path to product
  products.push({ title: req.body.title });   // create obj product key: title form add-product
  res.redirect('/');
})


exports.routes = router;
exports.products = products;
