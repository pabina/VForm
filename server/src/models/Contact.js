const mongoose=require("mongoose");

const ContactModel=mongoose.Schema(
    {
      name:{
      type:String,
      required:true,
      },

      email: {
        type: String,
        required: true,
        unique: true,
      },

      phone:{
       type:String,
       minlength: 6,
       required:true
      },
      address:{
        type: String,
      },
    
      gender: {
        type: String,
        required: true,
       
      },
      qualification:{
        type:String
      },

      nationality: {
       type:String
      },
      
      dob: {
        type: String,
      },

      preferedmodofcontact:{
        type:String
      }
    
        },
);

const Contact=mongoose.model("Contact",ContactModel);
module.exports=Contact;