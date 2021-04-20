const express = require('express');
const mongoose= require('mongoose');
const bodyPrser=require('body-parser')
//config app
const app = express();
require('dotenv').config()
//Middlewares
app.use(bodyPrser.json());
app.use(bodyPrser.urlencoded({extended : true}));  
app.use(express.json())
app.use(express.urlencoded({extended : true}));


//Import routes

const contactRoutes = require('./routes/contacts');









// Routes Middlewars
app.use('/contact', contactRoutes);







//Connection db
url = process.env.db
mongoose.connect(url,{
    useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex:true 
    
})
.then(()=>console.log('mongodb is connected'))
.catch((err)=>console.log(message.error))
















//listen server
const PORT = 5000
app.listen(PORT,()=>console.log(`server started in port${PORT}`))