const express=require("express");
const router=express.Router();
const saveJobData=require("../controllers/jobController.js")
router.post("/save",saveJobData);
module.exports=router;