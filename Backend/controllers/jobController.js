const Job=require("../models/job.js")

 const saveJobData=async(req,res)=>{
try{
const newJob=new Job(req.body)
await newJob.save()
console.log("new job saved successfully")
}catch(error){
console.log("some error occured","error.message")
}
}
module.exports=saveJobData;
