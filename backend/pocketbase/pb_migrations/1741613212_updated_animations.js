/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1784034272")

  // update collection data
  unmarshal({
    "name": "activites"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1784034272")

  // update collection data
  unmarshal({
    "name": "animations"
  }, collection)

  return app.save(collection)
})
