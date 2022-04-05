var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

app.use(express.static('public'));
app.use(cors());

app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(req.params.name,req.params.email,req.params.password)
        .then((user) => {
            console.log(user);
            res.send(user);
        });
    });  

app.get('/account/login/:email/:password', function (req, res) {
    dal.find(req.params.email,req.params.password)
        .then((user) => {
        console.log(user);
        res.send(user);
        });
    }); 

app.get('/account/find/:email', function (req, res) {
    dal.find(req.params.email)
        .then((user) => {
        console.log(user);
        res.send(user);
        });
    }); 

app.get('/account/findOne/:email', function (req, res) {
    dal.findOne(req.params.email)
        .then((user) => {
        console.log(user);
        res.send(user);
        });
    }); 

app.get('/account/deposit/:email/:amount', function (req, res) {
    dal.update(req.params.email, req.params.amount)
        .then((user) => {
        console.log(user);
        res.send(user);
        });
    });  

app.get('/account/withdraw/:email/:amount', function (req, res) {
    dal.update(req.params.email, req.params.amount)
        .then((user) => {
        console.log(user);
        res.send(user);
        });
    });    

app.get('/account/updateBalance/:email', function (req, res) {
    dal.update(req.params.email)
        .then((user) => {
        console.log(user);
        res.send(user);
        });
    });

app.get('/account/all', function (req, res) {
    dal.all()
        .then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);