const express = require('express');

const path = require('path');

const addFileRouter = express.Router();

addFileRouter.get('/add-files', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-files.html'));
});

addFileRouter.post('/add-files', (req, res, next) => {
  console.log(req.body);
  res.redirect('/main-page')
}
)

module.exports = addFileRouter;