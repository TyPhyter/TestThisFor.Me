const express = require('express');
const router = express.Router();
const path = require('path');
// const User = require('../models/user');
// const nodemailer = require('nodemailer');
// const crypto = require('crypto');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'));
});

router.get('/dashboard', function(req, res) {
    //we will only redirect here, so if any unauthenticated attempts are made, send em to the login
    if(res.user){
        console.log(res.user);
        res.render('dashboard', res.user);
    } else {
        res.render('index');
    }
    
});

module.exports = router;