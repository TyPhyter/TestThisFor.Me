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
    res.render('dashboard', res.user);
});

module.exports = router;