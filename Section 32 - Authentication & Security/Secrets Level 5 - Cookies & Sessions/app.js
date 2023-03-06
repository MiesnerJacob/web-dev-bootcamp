//jshint esversion:6

//Imports
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

// Set up express app
const app = express();

//Set up EJS
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

// Set up express session
app.use(session({
    secret: "thisisanexamplesecret",
    resave: false,
    saveUninitialized: false
}));

// Set up passport
app.use(passport.initialize());
app.use(passport.session());

// Create connection, db
mongoose.set('strictQuery', true);

// Connect to local MongoDB instance
mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true });

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

userSchema.plugin(passportLocalMongoose);

// Compile schema into a model
const User = mongoose.model('User', userSchema);

// create user strategy for passport
passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    
    User.register({username: username}, password, function(err, user) {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        console.log(user); // Log the user object to the console
        passport.authenticate("local")(req, res, function(){
          res.redirect("/secrets");
        });
      }
    });
  });
  
  

// Login Page render
app.get("/login", function(req, res) {
    res.render("login");
});

// Login Post for validating user info
app.post("/login", function(req, res) {

});

// Render home page when Logout is submitted
app.get("/logout", function(req, res) {
    res.render("home");
});

// Have app launch of port 3000
app.listen(3000, function () {
    console.log("App started on server port 3000");
});