const mongoose=require("mongoose");

const Connection= async()=>{

    try{
        mongoose.set('strictQuery', false);
         mongoose.connect(process.env.DBURL,{useunifiedTopology:true,useNewurlparser:true})
        console.log("database connected successfully");
    }catch(error){
     console.log(error);
    }
   }
   
   module.exports=Connection