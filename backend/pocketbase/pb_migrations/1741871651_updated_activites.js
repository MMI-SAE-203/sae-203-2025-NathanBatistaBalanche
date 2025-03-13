/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1784034272")

  // remove field
  collection.fields.removeById("relation704038707")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1784034272")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3611752355",
    "hidden": false,
    "id": "relation704038707",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "animateurs",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
