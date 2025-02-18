/*Middleware- middleware is a function which runs b/w request and response. it has access to request and response object

at application level--it will be written in app.use
if we run a middle ware at application level then it will run on every request
middleware run in order it is called
*/
const express=require("express");
const app=express();
app.use(n1);

app.get("/",(req,res)=>{
     console.log("Running req on path //");
     res.send("Home");
})
app.use(n2);
app.get('/about',(req,res)=>{
    console.log("Hii from about");
    res.send("About is a page");
})
function n1(req,res,next){
    console.log("Running mw 1.......");
    next();
}
function n2(req,res,next){
    console.log("Running MW2......");
    next();
}
app.listen(3555,()=>{
    console.log("Server started");
})