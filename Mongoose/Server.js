// Mongoose: ODM: Object document mapper
//schema and model
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const path=require('path');
const port=3000;
mongoose.connect('mongodb://127.0.0.1.27017/G14')
.then(()=> console.log('Connected!'));


app.listen(port,()=>{console.log(`Server running on port ${port}`)});