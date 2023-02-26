# Update document with id 1 to include value for new stock key
db.products.updateOne({_id: 1}, {$set: {stock: 32}})

# Update document with id 2 to include value for new stock key
db.products.updateOne({_id: 2}, {$set: {stock: 12}})