//getting npm packages ready
const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require('bcryptjs');


//setting up router for implementation
const router = express.Router();

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
    response.sendFile(path.join(__dirname, "../testing/signin.html"));

});

router.post('/user_login', function(req, res) {

    var query = "SELECT * FROM users WHERE user_name = ?";

    connection.query(query, [req.body.user_name], function(err, response) {
        if (response.length == 0) {
            res.redirect('/home')
        }

        bcrypt.compare(req.body.password_hash, response[0].password_hash, function(err, result) {
            console.log(response[0].password_hash);
            console.log(req.body.password_hash);
            console.log(result);

            if (result == true) {
                console.log("LOGIN SUCCEDED");
                req.session.logged_in = true;
                req.session.user_id = response[0].id;
                req.session.user_name = response[0].username;
                res.redirect("/home");
            } else {
                console.log("LOGIN FAILED");
                res.redirect('/singin')
            }
        });
    });
});

router.post('/user_signup', function(req, res) {

var query = "SELECT * FROM users WHERE email = ?"

connection.query(query, [req.body.email], function(err, response) {

        if (response.length > 0) {
            res.send('we already have an email or username for this account')
        } else {

        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(req.body.password_hash, salt, function(err, hash) {            
            var query = "INSERT INTO users (user_name, first_name, last_name, email, password_hash) VALUES (?, ?, ?, ?, ?)";

                
            connection.query(query, [ req.body.username, req.body.first_name, req.body.last_name, req.body.email, hash], function(err, response) {
                   console.log(req.body); 
              req.session.logged_in = true;

              req.session.id = response.insertId; //only way to get id of an insert for the mysql npm package

              var query = "SELECT * FROM users WHERE id = ?"
              connection.query(query, [ req.session.id ], function(err, response) {
                req.session.user_name = response[0].username;
                req.session.email = response[0].email;
                res.redirect('/');
              });
            });
          });
      });

        }
});
});


                    module.exports = router;
