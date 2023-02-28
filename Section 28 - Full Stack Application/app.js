//jshint esversion:6

// Imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const _ = require('lodash');

// Set up express app
const app = express();

// Set up EJS
app.set('view engine', 'ejs');

// Set up Vody Parser and CSS for Express
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Create connection, db
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/todolistDB');

// Create schema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Compile schema into a model
const Item = mongoose.model('Item', itemSchema);

// Create default item documents
const item1 = new Item({
  name: "code"
});

const item2 = new Item({
  name: "work out"
});

const item3 = new Item({
  name: "walk dogs"
});

// Create default item documents array
const itemsArray = [item1, item2, item3]

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema]
});

// Compile schema into a model
const List = mongoose.model('List', listSchema);

// Set up get request for Home page
app.get("/", function(req, res) {

  // executes, passing results to callback
  Item.find({}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      if (docs.length === 0) {
        // Write default items to MongoDB database
        Item.insertMany(itemsArray, function(error, docs) {
          if (error) {
            console.log(error);
          } else {
            console.log('Sucessfully wrote default items to Mongo database!');
          }
        });
        // Reload home page
        res.redirect('/');
      } else {
        //Render page with default list items
        res.render("list", {listTitle: "Today", newListItems: docs});
      }
    }
  });
});

// Set up add item post request
app.post("/", function(req, res){

  let newItem = req.body.newItem;
  let customListName = req.body.listTitle;

  // Write default items to MongoDB database
  const item = new Item({
    name: newItem
  });

  if (customListName === "Today") {
    // Save new item to Today page
    item.save();
    // Reload home page
    res.redirect('/');
  } else {
    // Find existing custom List and add new item to it
    List.findOne({name: customListName}, function(err, foundList) {
      // Save new item to custom page
      foundList.items.push(item);
      foundList.save();
      // Redirect back to custom page
      res.redirect("/" + customListName);
    });
  }
});

// Set up delete item post request
app.post("/delete", function(req, res){

  let deleteItem = req.body.checkbox;
  let customListName = req.body.listName;
   
  if (customListName === "Today") {
    // Write default items to MongoDB database
    Item.findByIdAndRemove(deleteItem, function (err) {
      if (err) {
        console.log(err);
      }
    });
    // Reload home page
    res.redirect("/");
  } else {
    List.findOneAndUpdate({name: customListName}, {$pull: {items: {_id: deleteItem}}}, function(err, foundList){
      if (!err){
        res.redirect("/" + customListName);
      }
    });
  }
});

// Set up get request for Work page
app.get("/:customName", function(req,res){

  let customListName = _.capitalize(req.params.customName)

  List.findOne({name: customListName}, function(err, results) {
    if (!err) {
      if (results) {
        // Show existing list
        res.render("list", {listTitle: customListName, newListItems: results.items});
      } else {
        // Create new list
        List.create({
          name: customListName,
          items: itemsArray
        });
        res.redirect('/' + customListName);
      }
    }
  });
});


// Set up application to launch on port 3000
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
