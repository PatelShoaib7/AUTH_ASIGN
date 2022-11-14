 const {Router} = require('express')
 const TaskModel = require('../model1/Task')
 const taskRouter = Router();


 taskRouter.get("/:userId/tasks", async(req, res)=>{
    const userId= req.params.userId;
    const task = await TaskModel.find({userId})
    res.send(task)
 } )
 

 
 taskRouter.post("/:userId/tasks", async(req, res)=>{
    //console.log(req.body) 
    const userId =req.params.userId;
    //console.log(userId)
    const payload ={ 
        ...req.body, 
        userId, 
        token:456789  
    } 
    const task = await TaskModel(payload)
    //console.log(payload)
       task.save((err, sucess)=>{
            if(err){
                 return res.status(500).send("ooops error in saving task")
             }
             res.status(201).send(`${sucess}        task added sucessFully`)
            //const taskId= sucess._id;
            //return res.status(201).send({message:"task saved to respective userId" ,taskId })
            //or
      }) 
 } )
//  taskRouter.delete("/:userId/tasks/taskId", async(req, res)=>{
//     //console.log(req.body) 
//     const deleteTaskId =req.params.sucess._id;
//     console.log(deleteTaskId)
  
//     // const task = await TaskModel.deleteOne({deleteTaskId})
//     // //console.log(payload)
//     //    task.save((err, sucess)=>{
//     //         if(err){
//     //              return res.status(500).send("ooops error in saving task")
//     //          }
//     //          res.status(201).send(` delete sucess  task added sucessFully`)
//     //         //const taskId= sucess._id;
//     //         //return res.status(201).send({message:"task saved to respective userId" ,taskId })
//     //         //or
//     //   }) 

//  } )
 module.exports=taskRouter

 
 