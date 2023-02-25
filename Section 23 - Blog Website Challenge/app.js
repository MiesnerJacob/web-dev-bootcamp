//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

// Lorem Ipsum for page starting content
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// Create Express Application
const app = express();

// Set up EJS
app.set('view engine', 'ejs');

// Set up body parser and express to work with our CSS
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Variable for storing all composed pose entries
var entries = [];

// Set up get for home page
app.get("/", function(req, res) {

  res.render("home", {
    homeLoremIpsum: homeStartingContent,
    entries: entries
  });
});

// Set up get for about page
app.get("/about", function(req, res) {

  res.render("about", {
    aboutLoremIpsum: aboutContent
  });
});

// Set up get for contact page
app.get("/contact", function(req, res) {

  res.render("contact", {
    contactLoremIpsum: contactContent
  });
});

// Set up get for compose page
app.get("/compose", function(req, res) {

  res.render("compose", {
  });
});

// Set up post for compose page
app.post("/compose", function(req, res) {

  let entryPost = {
    "title": req.body.entryTitle,
    "body": req.body.entryBody
  }

  entries.push(entryPost);

  res.redirect("/");
});

// Set up get for compose page
app.get("/posts/:name", function(req, res) {

  // Loop through entries and check if there is a match, if there is load the post page
  entries.forEach(function(entry) {
    if (_.lowerCase(entry.title) === _.lowerCase(req.params.name)) {
      res.render("post", {
        title: entry.title,
        body: entry.body
      }); 
    }  
  });

});

// Set up app to listen on port 3000
app.listen(3000, function () {
  console.log("Listening on port 3000...");
})