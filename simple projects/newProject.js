//  in json file starting script is ---  "start": "node newProject.js",
// to starting  -------- npm start      
//   for server "start-server": "node newProject.js"
// to starting  -------- npm run start-server      
const express = require('express');

const newProject = express();

newProject.use('/main-page', (req, res, next) => {
  console.log(`From main page`);
  res.send(`<h1>Here is   main  page</h1>`);
})

newProject.use('/contact-us', (req, res, next) => {
  console.log('e sad ovako');
  res.send(`<h2>Contact us here </h2>`);
})


newProject.use('/', (req, res, next) => {
  console.log(`Default`);
  res.send(`<h1>Hello from Express first simple app</h1>`);  // response file 
  //next();                                     // Callback argument to the middleware function 
})



newProject.listen(4000);  //  create server on port 