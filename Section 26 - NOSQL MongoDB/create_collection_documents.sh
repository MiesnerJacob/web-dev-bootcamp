# Start up MongoDB
mongosh

# Show existing databases
show dbs;

# Create a new database
use shopDB

# Add a document to the products collection under the shopDB database
db.products.insertOne({_id: 1, name: "Pen", price:1.20})

# Show existing collections under shopDB database
show collections

# Show current databse (shopDB)
db

# Insert another document into the products collection
db.products.insertOne({_id: 2, name: "Pencil", price:0.8})