// Imports
const mongoose = require('mongoose');

// Create connection, db
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/personsDB');

// Create schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
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

// print that script has finished
console.log('person has been added to the personsDB.');
