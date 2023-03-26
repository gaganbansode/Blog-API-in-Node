const mongoose =require("mongoose")
const Schema = mongoose.Schema;

const blog=new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    cat:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    // user:{
    //     type: String,
    //     required: true,
    // },
    
    
},{ timestamps: true })

module.exports = mongoose.model("Blog", blog);
