const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const Connection=require("../src/db/Connection.js");
const ContactRoute=require("./routes/ContactRoute.js");
const app=express();



dotenv.config();


//middlewares
app.use(cors());
app.use(express.json())

//database connection
Connection();

//all contact routes goes here
app.use(ContactRoute);






//listening to server
app.listen(process.env.PORT,()=>{
    console.log("server is working")
})