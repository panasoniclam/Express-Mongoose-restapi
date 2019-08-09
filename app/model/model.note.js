const mongoose = require('mongoose')
const Schema = mongoose.Schema ;
console.log("model")
const noteSchema = new Schema({
     title:{type:Schema.Types.String,unique:true,required:true},
     contend:{type:Schema.Types.String,required:true}
})
const note = mongoose.model('note',noteSchema)
module.exports = note