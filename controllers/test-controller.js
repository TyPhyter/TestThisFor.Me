const express = require('express');
const router = express.Router();
var db = require("../models");



//add Test
router.post('/tests', (req, res) => {
    let test = {
        title: req.body.title,
        body: req.body.body,
        score: req.body.score,
        authorDisplayName: req.body.authorDisplayName,
        authorGithubName: req.body.authorGithubName,
        authorAvatarUrl: req.body.authorAvatarUrl,
        ProjectId: req.body.ProjectId,
        UserId: req.body.UserId
    }


    db.Test.create(test)
        .then((test) => {
            res.redirect(`/projects/${req.body.ProjectId}`);
        });
    // res.render('index', {});
});

//get Tests, all or by id
//this is overriding my /tests/post route, duh
// router.get('/tests/:id?', (req, res) => {
//     if (req.params.id) {
//         let id = req.params.id;
//         db.Test.findById(id)
//             .then((test) => {
//                 res.send(test);
//             });
//     } else {
//         db.Test.findAll({})
//             .then((tests) => {
//                 res.send(tests);
//             });
//     }
// });

//get Tests by project id
router.get('/tests/project/:id', (req, res) => {

    let id = req.params.id;
    db.Test.findAll({ where: { ProjectId: id } })
        .then((tests) => {
            res.send(tests);
        });

});

//get Tests by user id
router.get('/tests/user/:id', (req, res) => {

    let id = req.params.id;
    db.Test.findAll({ where: { UserId: id } })
        .then((tests) => {
            res.send(tests);
        });

});
//delete Test

router.get('/tests/post', (req, res) => {
    res.render('projectReview');
});

module.exports = router;