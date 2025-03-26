// Mongoose: ODM: Object document mapper
//schema and model
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const path=require('path');
const port=3000;


const User=requie("./model/user")
 
//add new user
app.post("/users",async(req,res)=>{
    let {name,email,password}=req.body;
    let newUser=new UserActivation({
        name:name,
        email:email,
        password:password,
    });
    await newUser.save()
    read.send("User added");
})


//read all users
app.get("/users",async(req,res)=>{
   let allusers=await User.find();
   res.send(allusers);
})

// read one user
app.get("/users/:id",async(req,res)=>{
    let {id}=req.params;
    let oneUser= await User.findById(id);
    res.send(oneUser); 
})

mongoose.connect('mongodb://127.0.0.1.27017/G14')
   .then(()=> console.log('Connected!'));


app.listen(port,()=>{console.log(`Server running on port ${port}`)});