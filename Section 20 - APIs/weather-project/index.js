//jshint esversion:6

const express = require('express');
const https = require('node:https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.post("/", function(req, res) {

  const cityName = req.body.cityName;
  const app_key = "bcd866658285e7a11a5436bcb97ab673#";
  const api_url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + app_key;

  https.get(api_url, function(response) {
    console.log(response.statusCode);
    if (response.statusCode === 404) {
      res.status(404).send("City not found. Please enter a valid city name.");
      return;
    }

    response.on("data", function(data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescrption = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

      res.write("<h1> The weather in " + cityName + " is " + temp + " degrees farenheight. </h1>")
      res.write("<p> The weather is currently " + weatherDescrption + ".</p>")
      res.write("<img src=" + imageUrl + ">")
      res.send()
    });
  });
});

app.listen(3000, function() {
  console.log("App is running on server 3000.")
});
