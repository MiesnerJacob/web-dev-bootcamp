// Imports
const mongoose = require('mongoose');

// Create connection, db
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/fruitsDB');

// Create schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please give the fruit a name!']
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  review: String
});

// Compile schema into a model
const Fruit = mongoose.model('Fruit', fruitSchema);

// Add document to collection utilizing model
const fruit = new Fruit({
  name: "Watermelon",
  rating: 10,
  review: "My favorite fruit. It was even my first word as a small child. True story!"
});

// Save data
fruit.save();

console.log('A fruit has been added to the fruitsDB.');

// Create schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

// Compile schema into a model
const Person = mongoose.model('Person', personSchema);

// Add document to collection utilizing model
const person = new Person({
  name: "John",
  age: 37,
});

// Save data
person.save();

console.log('A person has been added to the fruitsDB.');

// Update John to have Watermelon br his favorite fruit
Person.updateOne( { name: "John" }, { favoriteFruit: fruit }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('A person has been updated to include a favorite fruit.');
  }
});

// Create multiple fruit docs
const orange = new Fruit({
  name: "Orange",
  rating: 5,
  review: "Tastes good but leaves you with sticky hands every time."
});

const banana = new Fruit({
  name: "Banana",
  rating: 2,
  review: "Kinda gross to me."
});

const apple = new Fruit({
  name: "Apple",
  rating: 5,
  review: "1 a day supposedly keeps the doctor away, but they aren't too great."
});

// Add multiple fruits at one time to our DB collection
Fruit.insertMany([orange, banana, apple], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Sucess! Three fruits were inserted into the collection at once.")
  }
})

// Call DB to get all fruits in our fruit collection!
Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {

    // Loop through all the fruit objects and print only the name
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
})

// Update one of our existing documents
Fruit.updateOne({name: "Banana"}, {rating: 5}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Updated rating for banana!");
  }
})

// Delete one of our existing documents in our collection
Fruit.deleteOne({name: "Apple"}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Deleted Apple document!");
  }
})

// Delete all of our existing documents in our collection that have a rating of 5
Fruit.deleteMany({rating: 5}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Deleted documents with a rating of 5!");
  }
})