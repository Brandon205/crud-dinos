const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const fs = require('fs');

const app = express();
app.set('view engine', 'ejs');
app.use(ejsLayout);
app.use(express.static('static')); // will show where the static or not rendered webpages will be 
app.use(express.urlencoded({extended: false})); // Will take form submissions and it will put it into req.body

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.use('/dinosaurs', require('./routes/dinosaurs.js'));

app.listen(3000);