const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/main-page', (req, res, next) => {  // create separate file 
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
})

module.exports = router;  //export to main file 