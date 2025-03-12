/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3611752355")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1784034272",
    "hidden": false,
    "id": "relation2498102128",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "animations",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3611752355")

  // remove field
  collection.fields.removeById("relation2498102128")

  return app.save(collection)
})
