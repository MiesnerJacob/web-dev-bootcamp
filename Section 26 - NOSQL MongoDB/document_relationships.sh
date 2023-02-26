# Create a document that has relationships
db.products.insert({
  _id: 3,
  name: "Rubber"  ,
  price: 1.30,
  stock: 43,
  reviews: [
    {
        authorName: "Sally",
        rating: 5,
        review: "Best rubber ever!"
    },
    {
        authorName: "Jacob",
        rating: 2,
        review: "This rubber was below average..."
    }
  ]
})

# Update document with id 2 to include reviews
db.products.updateOne({_id: 2}, {$set: {  reviews: [
    {
        authorName: "Coco",
        rating: 3,
        review: "Average pencil"
    },
    {
        authorName: "Jacob",
        rating: 2,
        review: "This pencil broke on my first use."
    }
  ]}})