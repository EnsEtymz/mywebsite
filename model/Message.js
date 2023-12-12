const mongoose = require('mongoose');


const MessageSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    message:{type:String},
})

module.exports = mongoose.model('Message',MessageSchema)