// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Pràctica1");

// Find a document in a collection.
db.getCollection('inspections').aggregate(
  [
    {
      $addFields: {
        Obj_restaurant_id: {
          $toObjectId: '$restaurant_id'
        }
      }
    },
    {
      $lookup: {
        from: 'restaurants',
        localField: 'Obj_restaurant_id',
        foreignField: '_id',
        as: 'inspections'
      }
    },
    {
      $group: {
        _id: '$restaurant_id',
        inspections: { $push: '$$ROOT' }
      }
    }
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);
