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

// Connect to local MongoDB instance
mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true });

// Create schema
const userSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String}
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

app.get("/secrets", function(req, res) {
  if (req.isAuthenticated()) {
    res.render("secrets");
  } else {
    res.redirect("/login");
  }
});

// Register Post for Creating a user
app.post("/register", function(req, res) {

  form_username = req.body.username;
  form_password = req.body.password;

  User.register({username:form_username, active: false}, form_password, function(err, user) {
    if (err) {
      console.log(err);
      res.redirect("/register");
    } else {
      passport.authenticate("local") (req, res, function() {
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
  
  const user =  new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, function(err) {
    if (err) {
      console.log(err);
      } else {
        passport.authenticate("local")(req, res, function(){
          res.redirect("/secrets");
        });
      }
  });
});

// Render home page when Logout is submitted
app.get("/logout", function(req, res) {
  req.logout(function() {
    res.redirect("/");
  });
});


// Have app launch of port 3000
app.listen(3000, function () {
    console.log("App started on server port 3000");
});