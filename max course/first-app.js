const express = require('express');
const path = require('path');
const app = express();


//  Template engines --- pug  // handlebars // ejs
/*

    views, the directory where the template files are located. Eg: app.set('views', './views'). This defaults to the views directory in the application root directory.
    view engine, the template engine to use. For example, to use the Pug template engine: app.set('view engine', 'pug').

      Then install the corresponding template engine npm package; for example to install Pug:
              ------  npm install pug --save
              
      Create a Pug template file named index.pug in the views directory, with the following content:

      app.get('/', function (req, res) {
        res.render('index', { title: 'Hey', message: 'Hello there!' })
      })

When you make a request to the home page, the index.pug file will be rendered as HTML.

Note: The view engine cache does not cache the contents of the template’s output, only the underlying template itself. The view is still re-rendered with every request even when the cache is on.
*/
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