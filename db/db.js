const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://root:root@cluster0.q9ktjoe.mongodb.net/blog?retryWrites=true&w=majority')
.then((res)=>res)
.then((conn)=>{console.log("db connected")})
.catch((e)=>{console.log(e)})