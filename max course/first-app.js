const express = require('express');
const path = require('path');
const app = express();

const rootDir = require('./util/path');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');   // routes 

const bodyParser = require('body-parser');  //require to parse  body
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(rootDir, 'public'))); // grant excess to public files css in this case!

app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'))
})

app.listen(3000);