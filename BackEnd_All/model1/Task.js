const mongoose = require("mongoose")
const taskSchema = mongoose.Schema(
    {
        title:{type:String , required:true},
        status:{type:Boolean  , required:true, default:false},
        userId:{type:String , required:true}
    })
 
const TaskModel = mongoose.model("tasks" ,taskSchema)
module.exports= TaskModel