const mongoose = require("mongoose")

const contact = new mongoose.Schema({
   fname:{
    type:String,
    required : true
   },
   lname:{
    type:String,
    required : true
   },
   email:{
    type:String,
    required : true
   },
   subject:{
    type:String,
    required : true
   },
   message:{
    type:String,
    required : true
   },
})

const data = mongoose.model('messages',contact)

module.exports=data

