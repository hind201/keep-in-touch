const mongoose= require('mongoose');
//date
const d = new Date();
let month = d.getMonth() + 1;
if (month < 10) month = `0${month}`;
const dt = `${d.getFullYear()}-${month}-${d.getDate()}`;

const contactSchema = new mongoose.Schema({
    prenom:{
        type:String,
        required:true
    },
    nom:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    telephone:{
        type:String,
        required:true, 
        unique:true
    },
    message:{
        type:String,
        required:true, 
    },
    date: {
        type: String,
        default: dt,
      },
    
})

 module.exports = mongoose.model('Contact',contactSchema);


