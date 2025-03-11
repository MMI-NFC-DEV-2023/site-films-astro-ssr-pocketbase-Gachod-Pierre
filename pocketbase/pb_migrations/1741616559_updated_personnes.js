/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select408443112",
    "maxSelect": 3,
    "name": "Nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "US",
      "FR",
      "UK"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select408443112",
    "maxSelect": 1,
    "name": "Nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "US",
      "FR",
      "UK"
    ]
  }))

  return app.save(collection)
})
