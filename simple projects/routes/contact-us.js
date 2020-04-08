const express = require('express');

const contactUsRoute = express.Router();



contactUsRoute.get('/contact-us', (req, res, next) => {
  res.send(`<h1>Contact us section </h1>`);
})


module.exports = contactUsRoute;