//  in json file starting script is ---  "start": "node newProject.js",
// to starting  -------- npm start      
//   for server "start-server": "node newProject.js"
// to starting  -------- npm run start-server      
const express = require('express');

const app = express();

app.use('/about-us', (req, res, next) => {
  res.send(`<h1>About us section </h1>`);
})


app.use('/', (req, res, next) => {
  res.send(`<h1>Lets start again </h1>`);
})


app.listen(4000);  //  create server on port 