const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function(req, res) {
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    res.json(dinoData);
});

module.exports = router;