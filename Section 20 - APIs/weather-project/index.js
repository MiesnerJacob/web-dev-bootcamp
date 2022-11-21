//jshint esversion:6

const express = require('express');
const https = require('node:https');
const app = express();


app.get("/", function(req, res) {
  const api_url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&appid=bcd866658285e7a11a5436bcb97ab673#"

  https.get(api_url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescrption = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      h1_tag = "<h1> The weather in London is " + temp + " degrees farenheight. </h1>"
      res.write(h1_tag)
      p_tag = "<p> The weather is currently " + weatherDescrption + ".</p>"
      res.write(p_tag)
      res.send()
    });
  });
});


app.listen(3000, function() {
  console.log("App is running on server 3000.")
});
