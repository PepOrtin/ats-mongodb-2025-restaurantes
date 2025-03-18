// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Pràctica1");

// Find a document in a collection.
db.getCollection('restaurants').find({
    type_of_food: 'African',
    rating: { $gte: 5 }
}).explain();
