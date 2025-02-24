const express = require("express");
const path = require("path"); // Import path module
const app = express();
const port = 4511;

app.use(express.urlencoded({extended:true}));

app.get("/addUser", (req, res) => {
    res.sendFile(path.join(__dirname, "rp.html")); // Correct usage of __dirname
});
let userData=[];
app.post("/addUser",(req,res)=>{
    let {username,useremail,userpassword}= req.body;
        console.log(username ,useremail ,userpassword) ;
        let newUser={
            name:username,
            email:useremail,
            password:userpassword
        }
        userData.push(newUser);
        res.send(userData)

})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
