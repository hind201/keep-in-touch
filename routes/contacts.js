const express = require('express');
const router = express.Router();
const{envoye,getcontactInfo,sendMail }=require('../controllers/contactController');

router.post('/user',envoye);
router.get('/info',getcontactInfo)
router.post('/email',sendMail)













module.exports = router
