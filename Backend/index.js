const express=require("express");
const app=express();
const router=require("./routes/router.js")
const bodyParser=require("body-parser")
const cors=require("cors")
const dbConnection=require("./database/db.js")
app.use("/",router)
app.use(cors({
    origin: 'http://localhost:5173', // or use '*' to allow all origins
  }));
  
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));

dbConnection();
app.listen(8080,()=>{
    console.log("Server is listening to the port 8080");
})
