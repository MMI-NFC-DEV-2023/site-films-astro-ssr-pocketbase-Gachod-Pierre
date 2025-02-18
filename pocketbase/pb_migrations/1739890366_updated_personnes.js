/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date2168798551",
    "max": "",
    "min": "",
    "name": "dateDeces",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date2665248609",
    "max": "",
    "min": "",
    "name": "dateNaissance",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // remove field
  collection.fields.removeById("date2168798551")

  // remove field
  collection.fields.removeById("date2665248609")

  // remove field
  collection.fields.removeById("select3130199401")

  return app.save(collection)
})
