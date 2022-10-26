const router = require('express').Router();
const todolistCtrl = require('../controllers/toDoListCtrl')


router.route("/item")
.get(todolistCtrl.getItem)
.post(todolistCtrl.createItem)


router.route("/item/:id")
.delete(todolistCtrl.deleteItem)
.put(todolistCtrl.updateItem)
module.exports= router;