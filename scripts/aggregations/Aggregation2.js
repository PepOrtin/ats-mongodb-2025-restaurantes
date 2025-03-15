// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Pràctica1");

// Find a document in a collection.
db.getCollection('inspections').aggregate(
    [
      {
        $group: {
          _id: '$result',
          Numero_Inspeciones: { $sum: 1 }
        }
      },
      {
        $group: {
          _id: null,
          Total: { $sum: '$Numero_Inspeciones' },
          Resultados: { $push: '$$ROOT' }
        }
      },
      { $unwind: { path: '$Resultados' } },
      {
        $project: {
          _id: 0,
          resultado: '$Resultados._id',
          TotalPorInspeciones:
            '$Resultados.Numero_Inspeciones',
          Total: 1,
          porcentaje: {
            $multiply: [
              {
                $divide: [
                  '$Resultados.Numero_Inspeciones',
                  '$Total'
                ]
              },
              100
            ]
          }
        }
      }
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
  );
