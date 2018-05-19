const express = require('express');
const router = express.Router();
var db = require("../models");



//create user
//find user
//delete user
router.get('/users/:id?', (req, res) => {
    if(req.params.id) {
        var userID = req.params.id;
        db.User.findById(userID)
            .then((user) => {
                res.send(user);
            })
    } else {
        db.User.findAll({})
            .then((users) => {
                res.send(users);
            })
    }

    // res.render('index', {});
});

router.post('/users', (req, res) => {
    let email = req.body.email;
    //bcrypt this before saving it
    let pass = req.body.pass;
    db.User.findOrCreate({where: {email: email}})
        .then((responseArray) => {
            let userObj = responseArray[0];
            let createdNew = responseArray[1];
            res.send(responseArray);
        })

    // res.render('index', {});
});

module.exports = router;