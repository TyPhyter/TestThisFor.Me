const express = require('express');
const router = express.Router();
var db = require("../models");


//get Test
//add Test
//delete Test
router.get('/', (req, res) => {
    res.render('index', {});
})

module.exports = router;