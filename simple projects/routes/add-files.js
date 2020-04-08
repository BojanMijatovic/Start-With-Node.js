const express = require('express');

const addFileRouter = express.Router();

addFileRouter.get('/add-files', (req, res, next) => {
  res.send(`<h2> Please insert value here </h2>`)
});


module.exports = addFileRouter;