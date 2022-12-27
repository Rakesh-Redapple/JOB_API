const User=require('../models/User');
const jwt= require('jsonwebtoken');
const authenticationMiddleware= async(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(400).json({msg:'token not found'});
    }

    const token=authHeader.split(' ')[1];
    try{
        const decoded=jwt.verify(token,process.env.JWTKEY);
        //console.log(decoded);
        const {userId,name}=decoded;
        req.user={userId,name};
        next();
              }catch(err){
                 return res.status(500).json({Error:err.message})
              }
}


module.exports=authenticationMiddleware;
