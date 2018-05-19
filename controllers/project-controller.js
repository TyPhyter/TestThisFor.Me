const express = require('express');
const router = express.Router();
var db = require("../models");


//get Project
//add Project
//delete Project
router.get('/', (req, res) => {
    res.render('index', {});
})

module.exports = router;