const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const fs = require('fs');

const app = express();
app.set('view engine', 'ejs');
app.use(ejsLayout);
app.use(express.static('static')); // will show where the static or not rendered webpages will be 

app.get('/', function(req, res) {
    res.send('Welcome Home');
});

app.use('/dinosaurs', require('./routes/dinosaurs'));

app.listen(3000);