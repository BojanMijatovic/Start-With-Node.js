const express = require('express');

const router = express.Router();

router.get('/main-page', (req, res, next) => {  // create separate file 
  res.send(`<h1>This is main page :) </h1>`);
})

module.exports = router;  //export to main file 