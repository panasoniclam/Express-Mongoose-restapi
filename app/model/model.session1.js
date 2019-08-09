const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const session1Schema = new Schema({
  username:{
      type:String,
      required:true,
      unique:true,
  },
  password:{
      type:String,
      required:true,
      unique:true
  }
})

const session1 = mongoose.model('session1',session1Schema)
module.exports = session1