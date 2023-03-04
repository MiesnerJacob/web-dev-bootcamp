//jshint esversion:6

// Imports
const express = require("express");
let ejs = require('ejs');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// Set up express app
const app = express();

// Set up EJS
app.set('view engine', 'ejs');

// Set up Vody Parser and CSS for Express
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Create connection, db
mongoose.set('strictQuery', true);

// Connect to local MongoDB instance
mongoose.connect('mongodb://localhost:27017/wikiDB');

// Create schema
const articleSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, 'No title was given for the post! Maske sure to add one.']
    },
    content: {
      type: String,
      required: [true, 'No content was given for the post! Maske sure to add some.']
    }
  });
  
  // Compile schema into a model
  const Article = mongoose.model('Article', articleSchema);

  // Create get, post, and delete endpoints for all articles
  app.route("/articles")
    // Get endpoint for gathering all articles
    .get(function(req,res) {
        // Search to find blogs posts in MongoDB
        Article.find().then((data) => {
            const entries = data;
            res.send(entries);
        }).catch((err) => {
            console.log(err);
        });
    })
    // Post endpoint for creating a new article
    .post(function(req,res) {
        // Add document to collection utilizing model
        const newArticle = new Article({
            "title": req.body.title,
            "content": req.body.content
        });

        // Save data
        newArticle.save().then(()=>{
            res.send("Successfully created a new article!");
        }).catch((err)=>{
            res.send(err);
        });
    })
    // Delete endpoint for deleting all articles
    .delete(function(req,res) {
        Article.deleteMany().then(()=>{
            res.send("Successfully deleted all articles!");
        }).catch((err)=>{
            res.send(err);
        });
    });

  // Create get, put, patch, delete endpoints for single articles
  app.route("/articles/:articleName")
    // Get one article
    .get(function(req,res) {
        Article.findOne({title: req.params.articleName}).then((results)=>{
            res.send(results);
        }).catch((err)=>{
            res.send(err);
        });
    })
    // Update one article via put
    .put(function(req, res) {
        Article.updateOne(
            {title: req.params.articleName},
            {title: req.body.title, content: req.body.content}).then((results)=>{
                res.send(results);
            }).catch((err)=>{
                res.send(err);
            });
    })
    // Update one article via patch
    .patch(function(req,res) {
        Article.updateOne(
            {title: req.params.articleName},
            {$set: req.body}).then((results)=>{
                res.send(results);
            }).catch((err)=>{
                res.send(err);
            });
    })
    // Delete one article
    .delete(function(req,res) {
        Article.deleteOne({title: req.params.articleName}).then(()=>{
            res.send("Successfully deleted the article!");
        }).catch((err)=>{
            res.send(err);
        });        
    });

  app.listen(3000, function() {
    console.log("Server started on port 3000.")
  });