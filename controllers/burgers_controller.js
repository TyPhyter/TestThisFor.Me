const express = require('express');
const router = express.Router();
const BURG = require('../models/burger');

router.get('/burgers', (req, res) => {
    BURG.allBurgers()
        .then((burgers) => {
            res.render('index', { burgers });
            // res.send(burgers);
        });
});

router.post('/burgers', (req, res) => {
    console.log(req.body);
    BURG.addBurger(req.body.name)
        .then(() => {
            BURG.allBurgers()
            .then((burgers) => {
                res.redirect('/burgers');
            });
        });
});

router.put('/burgers', (req, res) => {
    console.log(req.body);
    BURG.eatBurger(req.body.name)
        .then((burger) => {
            BURG.allBurgers()
            .then((burgers) => {
                res.redirect('/burgers');
            });
        })
});

router.get('/', (req, res) => {
    res.redirect('/burgers');
});



module.exports = router;