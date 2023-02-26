// Imports
const { MongoClient } = require("mongodb");
const assert = require('assert');

// Create connection
const uri = 'mongodb://localhost:27017'

// Create DB
const dbName = 'fruitsDB';

// Create MongoDB Client
const client = new MongoClient(uri);

// Function to run all
async function run() {
    try {

      // Log that connection has been made
      console.log("connection made.");

      const database = client.db(dbName);

      const collection = database.collection('fruits')

      await insert_documents(collection);

      await find_documents(collection);

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

// Function to insert documents
async function insert_documents(collection) {
    const docs = [
      { name: "pineapple", healthy: true, review: "Sweet and aromatic" },
      { name: "watermelon", healthy: true, review: "This is absolutely delicious and watery." },
      { name: "orange", healthy: true, review: "It made my hands sticky, not a big fan." }
    ];
  
     // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };
  
    // Try inserting documents, print out error if it fails
    try {
      const result = await collection.insertMany(docs, options);
      assert.equal(err, null)
      assert.equal(3, result.result.n)
      assert.equal(3, result.ops.length)
      console.log(`${result.insertedCount} documents were inserted`);
    } catch (err) {
      console.error(`Error inserting documents: ${err}`);
    }
  }

// Function to query all documents
async function find_documents(collection) {
    // Try finding documents, print out error if it fails
    try {
      const cursor = await collection.find();
      console.log(`Here are the documents were found`);
      await cursor.forEach(console.dir);
    } catch (err) {
      console.error(`Error finding documents: ${err}`);
    }
  }


// Fun main function 
run().catch(console.dir);