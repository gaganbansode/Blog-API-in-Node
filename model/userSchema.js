const mongoose =require("mongoose")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const user=new Schema({
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
    
},{ timestamps: true })

user.pre('save', async function(next)
{
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        console.log("Running Find Middleware");
    }
    next();
})

user.methods.generateJWTToken = function(){
     return  jwttoken = jwt.sign({email:this.email}, "qwertyuiopasdfghjklzxcvbnmasdfgh")
  }

module.exports = mongoose.model("User", user);