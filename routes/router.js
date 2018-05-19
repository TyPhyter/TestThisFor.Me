const express = require('express');
const router = express.Router();
// const User = require('../models/user');
// const nodemailer = require('nodemailer');
// const crypto = require('crypto');

router.get('/', (req, res) => {
    res.render('index', {});
})

module.exports = router;