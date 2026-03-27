const express = require('express');
 
const app = express();


app.get("/main",(req,res)=>{
    res.send("All is ok ");
})



app.listen(8080,(req,res)=>{
    console.log("sever is listening to port 8080");
});