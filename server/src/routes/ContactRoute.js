const express=require("express");
const ContactController=require("../controllers/Contact.js");
const CRoute=express.Router();



const CController=new ContactController();
//routes of contact
CRoute.get("/contact",CController.INDEX)
CRoute.post("/contact",CController.CREATE)
CRoute.patch("/contact/:id",CController.UPDATE)
CRoute.get("/contact/:id",CController.EDIT)
CRoute.delete("/contact/:id",CController.DELETE)


module.exports=CRoute