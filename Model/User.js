const mongoose = require('mongoose');
const {Schema} = require('mongoose')

const UserSchema = new Schema({
    userName:
    {
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
      
        unique: true,
    },
    password:{
        type: String,
        require: true,
      
     
    },
    profilePicture:
    {
        type: String,
    }


})
module.exports = mongoose.model('user', UserSchema );