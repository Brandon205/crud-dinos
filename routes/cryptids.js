const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', function(req, res) { // For the home page of the Cryptids
    var cryptids = fs.readFileSync('./cryptids.json');
    var cryptidData = JSON.parse(cryptids);
    res.render('cryptids/index.ejs', {cryptids: cryptidData});
});

router.post('/', function(req, res) { // For the addition of a new cryptid
    var cryptids = fs.readFileSync('./cryptids.json');
    var cryptidData = JSON.parse(cryptids);
    cryptidData.push(req.body);
    fs.writeFileSync('./cryptids.json', JSON.stringify(cryptidData));
    res.redirect('/cryptids');
});

router.delete('/:id', function(req, res) { // For the deletion of a cryptid (from index.ejs)
    var index = parseInt(req.params.id);
    var cryptids = fs.readFileSync('./cryptids.json');
    var cryptidData = JSON.parse(cryptids);
    cryptidData.splice(index, 1);
    fs.writeFileSync('./cryptids.json', JSON.stringify(cryptidData));
    res.redirect('/cryptids');
});

router.get('/edit/:id', function(req, res) { // For displaying the cryptid edit page 
    var index = parseInt(req.params.id);
    var cryptids = fs.readFileSync('./cryptids.json');
    var cryptidData = JSON.parse(cryptids);
    res.render('cryptids/edit', {cryptid: cryptidData[index], cryptidIndex: index});
});

router.put('/:id', function(req, res) { // For the updating of the cryptids data
    var index = parseInt(req.params.id);
    var cryptids = fs.readFileSync('./cryptids.json');
    var cryptidData = JSON.parse(cryptids);
    cryptidData[index] = req.body;
    fs.writeFileSync('./cryptids.json', JSON.stringify(cryptidData));
    res.redirect(`/cryptids/${index}`);
});

router.get('/new', function(req, res) { // For displaying the add new cryptid page 
    res.render('cryptids/new.ejs');
});

router.get('/:id', function(req, res) { // For showing all of the cryptids
    var index = parseInt(req.params.id);
    var cryptids = fs.readFileSync('./cryptids.json');
    var cryptidData = JSON.parse(cryptids);
    res.render('cryptids/show', {cryptid: cryptidData[index], cryptidIndex: index});
});



module.exports = router; // So that we can import it to the server 