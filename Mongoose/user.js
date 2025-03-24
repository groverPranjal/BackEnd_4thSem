//ek schema ka ek hi model bn sakta hai
const mongoose=require("mongoose");

let userSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true  
    }
})
module.exports=mongoose.model("User",userSchema)

let BlockSchema=new mongoose.Schema({
    title:String,
    content:String,
    author:{
        type:String,
        require:true
    },
    date:{
        type:Date,
       default:Date.now,
    }
})
module.exports=mongoose.model("Blog",BlockSchema);