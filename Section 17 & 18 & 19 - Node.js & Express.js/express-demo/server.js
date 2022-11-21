//jshint esversion:6

// Import Express JS
const express = require('express')
const app = express()

// Home Page
app.get("/", function (req, res) {
  res.send("<h1> Hello, World!</h1>")
});

// Contact Page
app.get("/contact", function (req, res) {
  res.send("<h1> Contact Page</h1>")
});

// About Page
app.get("/about", function (req, res) {
  res.send("<h1>Jacob Miesner</h1> <p> Developer, Data Scientist, Entrepreneur</p>")
});

app.listen(3000, function () {
  console.log('Port 3000 listening...')
});
