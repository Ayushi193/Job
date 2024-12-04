const mongoose=require("mongoose");
  const dbConnection=async()=>{
   const DB_URI="mongodb+srv://Ayushi19:Adya21@job-portal.k23lb.mongodb.net/"
    try{
await mongoose.connect(DB_URI,{useUnifiedTopology:true})
console.log("Database connected successfully");
    }catch(error){
console.log("error",error.message)
    }
}
module.exports=dbConnection;
