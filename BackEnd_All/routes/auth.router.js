const express = require('express');
const {Router, json}= require("express");
const UserModel = require('../model1/User');
const authRouter = Router();
authRouter.post("/signup", async(req, res)=>{
     console.log(req.body)
     const result = await UserModel(req.body)
     result.save((error, saved)=>
     { 
        if(error){ 
            //backend saving erroe 
            //this will show the error using 500 code
           res.status(500).send({message:'Oops Somethine went wrong While saving Data'})
        }
        return  res.status(201).send({message:"Sing Up Suceeful" , token:12345})
     }); 
     //res.send("Sign Up Sucessful") 
})
 authRouter.get("/signup", async(req, res)=>{
    const data = await UserModel.find({},{_id:0,__v:0})
     res.send(data)
 })
authRouter.post("/login", async(req, res)=>{
    // console.log(req.body)
    // const {email , password}=req.body;
    // console.log(email,password);
    const CheckUser= await UserModel.find(req.body)
   if(CheckUser.length >=1){
    let {name , _id}= CheckUser[0];
   const payload ={  _id, name,  token:12345   }
    res.send(payload)
   }else{
       res.send("Wrong Credentials")
   }
     //res.send("Login SucessFul")
})

module.exports=authRouter
