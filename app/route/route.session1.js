const express = require('express');
const route = express.Router();
const controller_session = require('../controller/controller.session1')
route.get('/list',controller_session.list)
route.post('/create',controller_session.create)
route.post('/findone',controller_session.findOne)
route.post('/remove',controller_session.remove)
module.exports = route