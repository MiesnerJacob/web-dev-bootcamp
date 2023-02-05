//jshint esversion:6

//Imports
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

// Create epxress application
const app = express();

// Set up bodyparser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// Set-up EJS
app.set("view engine", "ejs");

// Define list of items to append to existing list
const items = [];
const workItems = [];

// Define Home page get
app.get("/", function(req, res) {

  // Get today's date in long format
  let day = date.getDate()

  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

// Define work page get
app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work",
    newListItems: workItems
  });
});

// Define about get
app.get("/about", function(req, res) {
  res.render("about");
});

// Define Home page post
app.post("/", function(req, res) {

  let listType = req.body.button

  // Append new item to items array variable
  if (listType === "Work") {
    let item = req.body.newListItem
    workItems.push(item);
    res.redirect("/work");

  } else {
    let item = req.body.newListItem
    items.push(item);
    res.redirect("/");

  }
});

// Start up application on server port 3000
app.listen(3000, function() {
  console.log("App is running on server 3000.")
});
