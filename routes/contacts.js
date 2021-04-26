const express = require('express');
const router = express.Router();
const{envoye,getcontactInfo,single,sendMail,searshcontact }=require('../controllers/contactController');

router.post('/user',envoye);
router.get('/info',getcontactInfo)
router.post('/searsh/:id',single)
router.post('/filtre',searshcontact)
router.post('/email/:id',sendMail)

















module.exports = router
