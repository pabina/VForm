const Contact = require("../models/Contact.js");
const Joi = require("joi");

 class ContactController {
  async INDEX(req, res) {
    try{
        const GetAll=await Contact.find({});
        res.json({ error: false, Message: " Fetch successfully", data: GetAll });
           }catch(e){
               res.json({
                   error: true,
                   message: e.message
                }) 
           }
  }

  
  
 
  
//for create


async CREATE(req, res) {
    //validating request
    const Validateschema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      phone: Joi.string().required(),
      address: Joi.string().required(),
      gender: Joi.string().required(),
      nationality: Joi.string().allow(""),
      qualification: Joi.string().allow(""),
      dob: Joi.string().required(),
      preferedmodofcontact: Joi.string().allow(""),
    });
    let { error } = Validateschema.validate(req.body);
    if (error) {
      return res
        .status(200)
        .json({ error: false, message: error.message });
    }
    try {
      await new Contact(req.body).save();
      res.status(200).json({ error: false, Message: " Successfully Created" });
    } catch (e) {
      res.json({
        error: true,
        message: e.message.toString()
 });
    }
  }






//for update

  async UPDATE(req, res) {
    const Validateschema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      phone: Joi.string().required(),
      address: Joi.string().required(),
      gender: Joi.string().required(),
      nationality: Joi.string().allow(""),
      qualification: Joi.string().allow(""),
      dob: Joi.string().required(),
      preferedmodofcontact: Joi.string().allow(""),
     });
     let { error } = Validateschema.validate(req.body);
        if (error) {
           return res
              .status(200)
              .json({ error: false, message: error.details[0].message });
    }
    try {
        await Contact.findByIdAndUpdate(req.params.id, req.body);
        
    
        res
           .status(200)
           .json({ error: false, Message: "update successfully" });
        
        
    } catch (e) {
        res.json({
            error: true,
            message: e.message.toString().includes('duplicate') ? 'User Already Exist' : e.message.split(':')[0] // check if duplicate message exist
         })  
    }

  }



  async EDIT(req, res) {
    try{
        const GetOne=await Contact.findById(req.params.id);
        res.json({ error: false, Message: " Fetch successfully", data: GetOne });
            }catch(e){
                res.json({
                    error: true,
                    message: e.message.toString().includes('duplicate') ? 'User Already Exist' : e.message.split(':')[0]}) // check if duplicate message exist
            }
  }

  async DELETE(req, res) {
    let id=req.params.id;
    try {
        await Contact.findByIdAndDelete(id);
         res
            .status(200)
            .json({ error: false, Message: "Delete successfully" });
      } catch (e) {
         res.json({
            error: true,
            message: e.message
         })
  
      }

  }
}

module.exports=ContactController
