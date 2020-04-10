const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');


const rootDir = require('./util/path');


const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');   // routes 

const bodyParser = require('body-parser');  //require to parse  body
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(rootDir, 'public'))); // grant excess to public files css in this case!

app.use('/admin', adminData.routes);
app.use(shopRoutes);


app.use((req, res, next) => {
  res.status(404).render('page-not-found');

})

app.listen(3000);