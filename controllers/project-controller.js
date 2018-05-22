const express = require('express');
const router = express.Router();
var db = require("../models");



//add Project
router.post('/projects', (req, res) => {
    let project = {
        title: req.body.title,
        body: req.body.body,
        repoUrl: req.body.repoUrl,
        hostedUrl: req.body.repoUrl,
        //id of the author
        UserId: req.body.UserId
    }


    db.Project.create(project)
        .then((project) => {
            res.send(project);
        });
    // res.render('index', {});
});

//get Projects, all or by project id
router.get('/projects/:id?', (req, res) => {
    if (req.params.id) {
        let id = req.params.id;
        db.Project.findById(id)
            .then((project) => {
                console.log(project.dataValues);
                res.render('projectDetail', project.dataValues);
            });
    } else {
        db.Project.findAll({})
            .then((projects) => {
                console.log(projects);
                res.render('allProjects', projects);
            });
    }
});

//get Projects by user id
router.get('/projects/user/:id', (req, res) => {

    let id = req.params.id;
    db.Project.findAll({ where: { UserId: id } })
        .then((projects) => {
            res.send(projects);
        });

});


//delete Project
module.exports = router;