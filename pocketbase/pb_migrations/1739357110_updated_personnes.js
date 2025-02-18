/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 4,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "réalisateur",
      "acteur",
      "scénariste",
      "producteur"
    ]
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select2663700287",
    "maxSelect": 3,
    "name": "nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "US",
      "UK"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // remove field
  collection.fields.removeById("select3130199401")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select2663700287",
    "maxSelect": 1,
    "name": "nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "US",
      "UK"
    ]
  }))

  return app.save(collection)
})
