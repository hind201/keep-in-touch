const mongoose= require('mongoose');

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
    }
    
},{timestamps:true})

 module.exports = mongoose.model('Contact',contactSchema);


