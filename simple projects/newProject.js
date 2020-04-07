
//  in json file starting script is ---  "start": "node newProject.js",
// to starting  -------- npm start      
//   for server "start-server": "node newProject.js"
// to starting  -------- npm run start-server      

const express = require('express');

const newProject = express();



newProject.use((req, res, next) => {
  console.log(`Testing`);
  res.send(`<h1>Hello from Express first simple app </h1> 
  </br> <p> Testing one </p>`);  // response file 
  next();                                     // Callback argument to the middleware function 
})


newProject.listen(4000);  //  create server on port 