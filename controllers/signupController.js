//getting npm packages ready
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
var bcrypt = require('bcryptjs');
var mysql = require('mysql');

var user = require("../models/user.js");

//setting up router for implementation
var router = express.Router();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "impulso_db"
});


//setting up the packages to be used by express 
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.text());
router.use(bodyParser.json({ type: "application/vnd.api+json" }));


//
router.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/app/signin.html"));

});

router.post('/user_login', function(req, res) {

    user.some("user_name=" + JSON.stringify(req.body.user_name), function(data) {

        if (data.length == 0) {
            console.log("INVALID USERNAME")
            res.send(false)
        } else {
            bcrypt.compare(req.body.password_hash, data[0].password_hash, function(err, result) {
                console.log(req.body.password_hash);
                console.log(result);

                if (result == true) {
                    console.log("LOGIN SUCCEDED");
                    req.session.logged_in = true;
                    req.session.user_id = data[0].id;
                    req.session.user_name = data[0].username;
                    res.send(true);
                } else {
                    console.log("WRONG PASSWORD");
                    res.redirect('/login')
                }
            })
        }
    });
});

router.post('/user_signup', function(req, res) {

    user.some("user_name=" + JSON.stringify(req.body.username), function(data) {
        if (data.length == 0) {
            user.some("email=" + JSON.stringify(req.body.email), function(data) {
            if (data.length == 0){
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(req.body.password_hash, salt, function(err, hash) {

                        user.create("user_name, first_name, last_name, email, password_hash", [req.body.username, req.body.first_name, req.body.last_name, req.body.email, hash], function(data) {
                                res.send(true)



                        });

                    })
                })
             }else { console.log("EMAIL ALREADY EXIST")}
         });

        } else {
            res.send();
            console.log("USERNAME NOT AVAILABLE")
        }
    });
});


module.exports = router;
