const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');


const app = express();
app.set('view engine', 'ejs');
app.use(ejsLayout);
app.use(express.static('static')); // will show where the static or not rendered webpages will be 
app.use(express.urlencoded({extended: false})); // Will take form submissions and it will put it into req.body
app.use(methodOverride('_method')); // Will look into the ACTION of the form and then it will do its thing will look for _method=put etc...

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.use('/dinosaurs', require('./routes/dinosaurs.js'));
app.use('/cryptids', require('./routes/cryptids.js'));

app.listen(3000);