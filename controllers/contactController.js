
const Contact = require('../models/contact')
const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');
require('dotenv').config()

exports.envoye= (req,res)=>{
    const { prenom,nom,email,telephone,message}=req.body;
    const contact = new Contact({
        prenom,nom,email,telephone,message
});
//save db
contact.save((err,contact)=>{
    if(err){
        return res.status(400).send(err)
    }
    res.send(contact)
})


    
}
exports.getcontactInfo = async (req, res) => {
    try {
        const contact = await Contact.find()

        res.json(contact)
    }catch (err) {
        return res.status(500).json({msg: err.message})
    }
} 
exports.searshcontact= async(req,res)=>{
  const {email}=req.body;
  const {date}=req.body;
  
  try{
    if(email && date){
      const result= await Contact.find({email,date});
      if(result) return res.status(200).json(result);
     }else if (email && !date){
      const result= await Contact.find({email}); 
      if(result) return res.status(200).json(result);
      }else if (!email && date){
      const result = await Contact.find({date});
        if(result) return res.status(200).json(result)
      }

    }catch(error){
      return res.status(500).json(error)
    }
};
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:process.env.MAIL_USERNAME,
      pass:process.env.MAIL_PASSWORD
    }
  });


exports.sendMail = async (req, res) => {
   const { id } = req.params;
  const {message } = req.body;

    const contact = await Contact.findOne({ _id:id});
     if (contact) {
      const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to:contact.email,
        subject: 'Mail',
        text: message,
       };
       transporter.sendMail(mailOptions, function(error, info){
          if (error) {
              console.log(error);
               } else {
               console.log('Email sent: ' + info.response);
                 }
           });
       res.send('email sent')
                    
     }
  
};

exports.single= async (req, res) => {
  const { id } = req.params;
  try {
    const currentContact = await Contact.findOne({ _id: id });
    if (currentContact) return res.status(200).json(currentContact);
  } catch (error) {
    return res.status(500).json(error);
  }
 };



