const express=require("express");
const app=express();

app.get("/profile",(req,res)=>{
    //find in db
    const {username,age,address} =req.query;
    res.send("profile page of "+" "+username+" "+age+" "+address);
})
app.listen(5600,()=>{
    console.log("Server started");
})
let userData=[
    {
        id:1,
        name:"Pranjal",
        address:"Dabwali"
    },
    {
        id:2,
        name:"Prachi",
        address:"Bathinda"
    },
    {
        id:3,
        name:"Mehak",
        address:"Dabwali"
    },
]
app.get("/allusers",(req,res)=>{
res.send(userData);
})
app.get("/getuserbyId",(req,res)=>{
    let {id}=req.query;
    for(let i=0;i<userData.length;i++){
        if(userData[i].id==id){
            return res.send(userData[i]);
        }
    }
    res.send("User Not Found");

})

