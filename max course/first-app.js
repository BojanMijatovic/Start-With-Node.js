const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(`Here from log`);
  next();
})

app.use((req, res, next) => {
  res.send('<h1>Hello form Express </h1>');
  next();
})


app.listen(3000);