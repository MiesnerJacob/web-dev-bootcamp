//jshint esversion:6

// Import Express JS
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: true}))

// Home Page
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  var resultNum = num1 + num2

  res.send("The result is " + resultNum)
});

// BMI Calculator Page
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmiCalculator", function (req, res) {
  var weight = Number(req.body.weight)
  var height = Number(req.body.height)
  var resultNum = weight / (height**2) * 703

  res.send("Your BMI is " + resultNum.toFixed(2))
});

app.listen(3000, function () {
  console.log('Port 3000 listening...')
});
