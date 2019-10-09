const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');


const app = express();
app.set('view engine', 'ejs');

app.use(ejsLayout); // Will allow us to use layouts, it will search in the views directory for something named layout.ejs
app.use(express.static('static')); // Will show where the static or not rendered things will be, THIS is a great place for CSS and JS files
app.use(express.urlencoded({extended: false})); // Will take form submissions and it will put it into req.body
app.use(methodOverride('_method')); // Will look into the ACTION of the form and then it will do its thing will look for _method=put etc...

app.get('/', function(req, res) { // This is a get request for the home directory
    res.render('home.ejs'); //Render is a function that takes in 2 args, 1 is the ejs file to render, and the second is for {} with any data to pass in
});

app.use('/dinosaurs', require('./routes/dinosaurs.js')); // These are both how to use a ROUTES directory with different .js files inside
app.use('/cryptids', require('./routes/cryptids.js'));

app.listen(3000);