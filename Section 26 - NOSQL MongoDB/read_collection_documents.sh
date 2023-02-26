# Show all documents within a collection
db.products.find()

# Query a collection to find all documents where the price is greater than 1
db.products.find({price: {$gt:1}})

# Query a collection to find all documents where the id is 1 and only return the name field
db.products.find({_id:1},{name:1, _id:0})