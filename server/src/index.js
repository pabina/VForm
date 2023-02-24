const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const Connection=require("../src/db/Connection.js");
const app=express();



dotenv.config();


//middlewares
app.use(cors());
app.use(express.json())

//database connection
Connection();






//listening to server
app.listen(process.env.PORT,()=>{
    console.log("server is working")
})