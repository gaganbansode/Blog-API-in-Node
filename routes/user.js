const express = require('express');
const user=new express();
const {add,login} =require('../controller/userController')
const upload =require('../middleware/upload')

user.post('/registration',upload.single('image'),add);
user.post('/login',login);




module.exports=user;