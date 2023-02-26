# Delete one document with a fiolter to id equal to 2
db.products.deleteOne({_id: 2})

# Delete all documents (you can apply filter to delete many but not all here as well)
db.inventory.deleteMany({})
