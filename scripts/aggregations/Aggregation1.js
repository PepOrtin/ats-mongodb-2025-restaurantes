// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Pràctica1");

// Find a document in a collection.
db.getCollection('restaurants').aggregate(
  [
    {
      $group: {
        _id: '$type_of_food',
        Calificacion_Promedio: { $avg: '$rating' }
      }
    }
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
)
