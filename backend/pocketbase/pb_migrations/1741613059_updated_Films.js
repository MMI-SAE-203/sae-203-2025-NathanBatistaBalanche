/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // update collection data
  unmarshal({
    "name": "films"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // update collection data
  unmarshal({
    "name": "Films"
  }, collection)

  return app.save(collection)
})
