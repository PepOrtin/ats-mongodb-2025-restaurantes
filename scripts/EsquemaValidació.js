// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Pràctica1");

db.createCollection("inspections", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [ "restaurant_id", "sector", "date", "result", "certificate_number"],
            properties: {
                restaurant_id: { 
                    bsonType: "string",
                    description: "Identificador del restaurante" 
                },
                sector: {
                    bsonType: "string",
                    description: "Sector de la inspección"
                },
                date: {
                    bsonType: "string",
                    description: "Fecha de la inspección"
                },
                result: {
                    bsonType: "string",
                    description: "Resultado de la inspección",
                    enum: [ "Fail", "Pass", "Warning Issued", "Violation Issued", "No Violation Issued"]
                },
                certificate_number: {
                    bsonType: "int",
                    description: "Numero de certificación"
                },
                address: {
                    bsonType: "object",
                    description: "Dirección del restaurante",
                    required: ['city', 'street'],
                    properties: {
                        city: { 
                            bsonType: "string",
                            description: "Ciudad del restaurante"
                        },
                        zip: { 
                            bsonType: "string",
                            description: "Codigo postal del restaurante"
                        },
                        street: { 
                            bsonType: "string",
                            description: "Calle del restaurante"
                        },
                        number: { 
                            bsonType: "string",
                            description: "Número de la calle del restaurante"
                        }
                    }
                }
                   
            }
        }
    }
})

db.createCollection("restaurants", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [ "URL", "address", "address line 2", "name", "outcode", "postcode", "rating", "type_of_food"],
            properties: {
                URL: { 
                    bsonType: "string",
                    description: "Link de la web del restaurante" },
                address: {
                    bsonType: "string",
                    description: "Dirección del restaurante"
                },
                address_line_2: { //Possible union con address: addres, address_line_2
                    bsonType: "string",
                    description: "Ciudad del restaurante"
                },
                name: {
                    bsonType: "string",
                    description: "Nombre del restaurante"
                },
                outcode: { //En UK el codigo postal esta formado por el outcode + incode, por lo tanto, podemos fusionar los 2 campos para hacer el postalcode
                    bsonType: "string",
                    description: "Primera parte del código postal"
                },
                postcode: {
                    bsonType: "int",
                    description: "Codigo postal"
                },
                rating: {
                    bsonType: "int",
                    minimum: 0,
                    maximum: 10,
                    description: "Puntuación del restaurante"
                },
                type_of_food: {
                    bsonType: "string",
                    description: "Tipo de comida del restaurante"
                }
            }
        }
    }
})