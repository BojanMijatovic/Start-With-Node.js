const express = require('express');

const homeRoot = express.Router();


homeRoot.get('/', (req, res, next) => {
  res.send(`<h1>This is Home Page </h1>`)
})


module.exports = homeRoot;