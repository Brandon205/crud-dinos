const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function(req, res) {
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    res.render('dinosaurs/index.ejs', {dinos: dinoData});
});

router.post('/', function(req, res) {
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    dinoData.push(req.body);
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
    res.redirect('/dinosaurs');
});

router.get('/edit/:id', function(req, res) {
    var index = parseInt(req.params.id);
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    res.render('dinosaurs/edit', {dino: dinoData[index], dinoIndex: index}); //needs a dino and a index
});

router.put('/:id', function(req, res) {
    var index = parseInt(req.params.id);
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    dinoData[index] = req.body;
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
    res.redirect(`/dinosaurs/${index}`);
})

router.get('/new', function(req, res) {
    res.render('dinosaurs/new');
});

router.get('/:id', function(req, res) {
    var index = parseInt(req.params.id);
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    res.render('dinosaurs/show', {dino: dinoData[index], dinoIndex: index});
});

module.exports = router;