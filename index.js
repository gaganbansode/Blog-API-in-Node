const express = require('express');
const blog = require('./routes/blog');
const user = require('./routes/user');
const app=express();
require('./db/db')

app.use(express.urlencoded({
    extended:true
  }))
app.use(express.json());
app.use(blog);
app.use(user);
app.listen(5000,()=>{
    console.log("connected");
});


