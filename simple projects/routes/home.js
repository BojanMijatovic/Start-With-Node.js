const express = require('express');

const path = require('path');

const homeRoot = express.Router();


homeRoot.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
})


module.exports = homeRoot;