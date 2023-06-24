const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }, 
    email: {
        type: String,
        require: true
    },
    track:{
        type: String,
        
    },
    level:{
        type: Number
    },
    password: {
        type:String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    role:String,
    verify:Boolean
    
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel;