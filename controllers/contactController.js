
const Contact = require('../models/contact')
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
        const contact = await Contact.find(req.contact)

        res.json(contact)
    }catch (err) {
        return res.status(500).json({msg: err.message})
    }
} 

exports.sendMail =async (req,res)=>{

      
       

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user:process.env.MAIL_USERNAME,
                  pass:process.env.MAIL_PASSWORD
                }
              });

              const mailOptions = {
                from: process.env.MAIL_USERNAME,
                to: process.env.MAIL_USERNAME,
                subject: 'Nodemailer Project',
                text: 'hello from Nodemailer Project'
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
   


//https://myaccount.google.com/lesssecureapps