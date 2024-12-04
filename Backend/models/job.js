const mongoose=require("mongoose");
const jobSchema= new mongoose.Schema({
    Title:{
type:String,
required:true },

Company:{
    type:String,
required:true
},

Description:{
    type:String,
required:true
},
Location:{
    type:String,
required:true
}
     
})
const Job=mongoose.model("job",jobSchema);
module.exports=Job;