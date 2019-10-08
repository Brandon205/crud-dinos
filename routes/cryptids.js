const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', function(req, res) {
    var cryptids = fs.readFileSync('./cryptids.json');
    var cryptidData = JSON.parse(cryptids);
    res.render('cryptids/index.ejs', {cryptids: cryptidData});
})

module.exports = router;