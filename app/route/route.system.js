const express = require('express');
const route = express.Router();
const system_controller = require('./../controller/controller.system')
route.get('/system',system_controller.findAll)
route.post('/system',system_controller.create)
route.get('/system/:systemId',system_controller.findOne)
route.delete('/system/:systemId',system_controller.remove)
route.patch('/system/:systemId',system_controller.edit)
module.exports = route