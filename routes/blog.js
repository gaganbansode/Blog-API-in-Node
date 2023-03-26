const express = require('express');
const blog=new express();
const {add,get,edit,delete_} =require('../controller/blogController')
const upload =require('../middleware/upload')

blog.post('/blog',upload.single('image'),add);
blog.get('/blog',get);
blog.put('/blog/:id',upload.single('image'),edit);
blog.delete('/blog/:id',delete_);



module.exports=blog;