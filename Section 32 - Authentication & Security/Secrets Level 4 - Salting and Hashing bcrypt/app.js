//jshint esversion:6

//Imports
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Set up express app
const app = express();

//Set up EJS
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

// Create connection, db
mongoose.set('strictQuery', true);

// Connect to local MongoDB instance
mongoose.connect('mongodb://localhost:27017/usersDB');

// Create schema
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Username required.']
    },
    password: {
      type: String,
      required: [true, 'Password required.']
    }
  });

// Compile schema into a model
const User = mongoose.model('User', userSchema);

// Home page render
app.get("/", function(req, res) {
    res.render("home");
});

// Register page render
app.get("/register", function(req, res) {
    res.render("register");
});

// Register Post for Creating a user
app.post("/register", function(req, res) {
    
    // Create hash password with salt rounds
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            // Add document to collection utilizing model
            const newUser = new User({
                "username": req.body.username,
                "password": hash
            });

            // Save data
            newUser.save().then(()=>{
                console.log("Successfully created a new user!");
                res.render("secrets");
            }).catch((err)=>{
                res.send(err);
            });
        });
});

// Login Page render
app.get("/login", function(req, res) {
    res.render("login");
});

// Login Post for validating user info
app.post("/login", function(req, res) {

    // Find user and compare hashed password with salting to authenticate
    User.findOne({username: req.body.username}).then((results)=>{
        if (results) {
            bcrypt.compare(req.body.password, results.password, function(err, result) {
                if (result === true) {
                    res.render("secrets");
                } else {
                    res.redirect('/');    
                }
            });
        } else {
            res.redirect('/');
        }
    }).catch((err)=>{
        res.send(err);
    });
});

// Render home page when Logout is submitted
app.get("/logout", function(req, res) {
    res.render("home");
});

// Have app launch of port 3000
app.listen(3000, function () {
    console.log("App started on server port 3000");
});