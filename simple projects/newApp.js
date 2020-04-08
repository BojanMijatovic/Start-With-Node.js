//  in json file starting script is ---  "start": "node newProject.js",
// to starting  -------- npm start      
//   for server "start-server": "node newProject.js"
// to starting  -------- npm run start-server      

const express = require('express');
const app = express();  // use express

const mainPageRoute = require('./routes/main-page');  // import pages with router 
const contactUsRoute = require('./routes/contact-us');
const homeRoot = require('./routes/home');


/*
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
 install with  ---- npm i body-parser
*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))


app.use(mainPageRoute);  // use pages form ROUTER!!!  
app.use(contactUsRoute);
app.use(homeRoot);

app.use((req, res, next) => {
  res.status(404).send(`<h1>Page not found </h1>`);
})



app.listen(4000);  //  create/ listen  server on port 