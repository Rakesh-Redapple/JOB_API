const express= require('express');
const { builtinModules } = require('module');

const router=express.Router();
const {login,registration}=require('../controller/auth');


router.post('/registration',registration);
router.post('/login',login);


module.exports=router;
