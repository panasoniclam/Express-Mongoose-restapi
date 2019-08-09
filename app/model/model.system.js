const mongoose= require('mongoose');
const Schema = mongoose.Schema ;
const systemSchema = new Schema({
    username:{type:Schema.Types.String,unique:true,required:true},
    password:{type:Schema.Types.String,unique:true,required:true},
    email:String
})
const system = mongoose.model('system',systemSchema)
module.exports = system