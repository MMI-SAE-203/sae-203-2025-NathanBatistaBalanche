/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1784034272")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date1820856663",
    "max": "",
    "min": "",
    "name": "dateheure",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1784034272")

  // remove field
  collection.fields.removeById("date1820856663")

  return app.save(collection)
})
