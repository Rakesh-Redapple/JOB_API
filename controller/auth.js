const User=require('../models/User');
const {StatusCodes}=require('http-status-codes');
const bcrypt= require('bcryptjs');



const registration= async(req,res)=>{
    try{
const {name,email,password}=req.body;
const salt= await bcrypt.genSalt(10);
const hashPassword=await bcrypt.hash(password,salt);
const tempUser={name,email,password:hashPassword}
if(!name || !email || !password){
    return res.status(400).json({Status:"false",message:'please insert name email and password'});
}
        const user= await User.create({...tempUser})
        res.status(StatusCodes.CREATED).json({user});
    }catch(error){
       return res.status(StatusCodes.BAD_REQUEST).json({Error:error.message});
    }
   
}

const login= async(req,res)=>{
    res.status(200).json({mag:'user login done'});
}




module.exports={registration,login}