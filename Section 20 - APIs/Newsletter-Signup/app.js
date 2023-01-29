//jshint esversion:6

// Imports
const express = require('express');
const request = require('request');
const Mailchimp = require('mailchimp-api-v3');
const bodyParser = require('body-parser');

// Stand up app
const app = express();

// Set up bodyparser
app.use(bodyParser.urlencoded({
  extended: true
}));

// Set up express to access local files
app.use(express.static("public"));

// Authenticate mailchimp_marketing API
const mailchimp = new Mailchimp("f0bbaa2f9d7eaa272fed91101b72e8dc-us21");

// Set up sign up page getting displayed when at root
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/signup.html')
});

// Set up post for form submit
app.post("/", function(req, res) {

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailAddress = req.body.emailAddress;

  mailchimp.post(`lists/7636f66fb1/members`, {
    email_address: emailAddress,
    status: 'subscribed',
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName
    }
  }).then((result)=>{
    console.log("success",result);
    res.sendFile(__dirname + '/success.html')
  }).catch((err)=>{
    console.log("error",err);
    res.sendFile(__dirname + '/failure.html')
  });


});

app.post("/failure", function(req, res) {
  res.redirect("/")
});

// Listen to port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log("App is running on server 3000.")
});


// Mailchimp API key
// f0bbaa2f9d7eaa272fed91101b72e8dc-us21

// List id
// 7636f66fb1
