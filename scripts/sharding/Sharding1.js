sh.enableSharding("Pràctica1");
sh.shardCollection("Pràctica1.restaurants", {"address line 2": "hashed"});
sh.shardCollection("Pràctica1.inspections", {"restaurant_id": "hashed"});

