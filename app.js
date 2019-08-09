//import defendences
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//contend
const app = express()
//set upmorgan
app.use(logger('dev'));
//set ip bodyparser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//connect db
mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser:true
    },
    ()=>console.log(`connect to db ${process.env.DATABASE_URL} sucess`)
)
//rout
const note_route = require('./app/route/route.note');
const system_route = require('./app/route/route.system');
const session1_route = require('./app/route/route.session1')
app.use('/note',note_route);
app.use('/system',system_route)
app.use('/session1',session1_route)
app.use((req,res,next)=>{
    const err = new Error('not found');
    res.status = 404 ;
    next(err)
})
app.use((req,res,next)=>{
    const err = app.get('env')  === 'development' ? err : {}
    const status = err.status || 500;
    res.status(status).json({
        error:err.message
    })
})
//export module

module.exports = app