//jshint esversion:6

//Imports
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const findOrCreate = require('mongoose-find-or-create');

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
mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true })


// Create schema
const userSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String},
    googleId: {type: String, default: null},
    githubId: {type: String, default: null},
    secret: {type: String, default: null}
  });

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// Compile schema into a model
const User = mongoose.model('User', userSchema);

// create user strategy for passport
passport.use(User.createStrategy());

// use serialize and deserialize of model for passport session support
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Google OAuth setup
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secrets",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
function(accessToken, refreshToken, profile, cb) {
  console.log(profile);

  User.findOrCreate({ 
    googleId: profile.id, 
  }, function (err, user) {
    return cb(err, user);
  });
}
));

// Github OAuth Setup
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/secrets"
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ 
    githubId: profile.id,
  }, function (err, user) {
    return done(err, user);
  });
}
));

// Home page render
app.get("/", function(req, res) {
    res.render("home");
});

// Google Auth
app.get("/auth/google", passport.authenticate('google', { scope: ["profile"] }));

app.get("/auth/google/secrets", 
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect to secrets page.
    res.redirect("/secrets");
  });

// Github Auth
app.get('/auth/github',
passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/secrets', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect to secrets page.
    res.redirect('/secrets');
  });

// Register page render
app.get("/register", function(req, res) {
    res.render("register");
});

app.get("/secrets", function(req, res) {
  User.find({"secret": {$ne:null}}, function(err, foundUsers) {
    if (err) {
      console.log(err);
    } else {
      if (foundUsers) {
        res.render("secrets", {usersWithSecrets: foundUsers});
      }
    }
  })
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

app.get("/submit", function(req, res) {
  if (req.isAuthenticated()) {
    res.render("submit");
  } else {
    res.redirect("/login");
  }
});

app.post("/submit", function(req, res) {
  const submittedSecret = req.body.secret;

  console.log(req.user.id);

  User.findById(req.user.id, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      foundUser.secret = submittedSecret;
      foundUser.save(function() {
        res.redirect("/secrets");
      })
    }
  })
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