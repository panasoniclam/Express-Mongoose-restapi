const express = require('express');
const route = express.Router()


const note_controller = require('./../controller/controller.note')
route.get('/note',note_controller.findAll)
route.post('/note',note_controller.create)
route.get('/note/:noteId',note_controller.findById)
route.delete('/note/:noteId',note_controller.remove)
route.patch('/note/:noteId',note_controller.edit)
module.exports = route