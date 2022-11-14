const express = require('express');
const connection = require('./db');
const cors = require('cors')
const authRouter = require('./routes/auth.router')
const taskRouter=require("./routes/task.router");


const app =express();
app.use(cors())
app.use(express.json())
app.use("/auth", authRouter)
app.use("/user",taskRouter)

 
  
app.listen(1111,async()=>
{ 
    try{
              await connection
              console.log("connected to server sucessfully")
    }catch{
              console.log("oops something went wrong")
    }
              console.log("Port 1111 is running successfully")
 
}) 