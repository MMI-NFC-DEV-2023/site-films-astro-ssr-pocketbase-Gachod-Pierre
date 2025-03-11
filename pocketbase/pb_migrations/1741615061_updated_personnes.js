/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 3,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "acteur",
      "scenariste",
      "realisateur"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 1,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "acteur",
      "scenariste",
      "realisateur"
    ]
  }))

  return app.save(collection)
})
