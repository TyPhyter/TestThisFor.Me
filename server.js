const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var db = require('./models');
var OAuth = require('oauthio');

OAuth.initialize('CZqVop1givjJzfVWLm4K3YCalTg', 'AMG1CCYUZ9fUQbtHKVcDQJPYBe4');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, 'public')));

//const router = require('./controllers/burgers_controller');
//app.use('/', router);
db.sequelize.sync().then(function() {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
