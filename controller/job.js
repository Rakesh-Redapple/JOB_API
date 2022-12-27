const JobModel=require('../models/Jobs');
const {StatusCodes}=require('http-status-codes');
const createJob= async(req,res)=>{
    try{
        req.body.createdBy=req.user.userId
        const job= await JobModel.create(req.body);
        res.status(StatusCodes.CREATED).json({job});
    }catch(error){
        console.log(error.message);
    }
   
}
const getJob= async(req,res)=>{
    
    try{
        const id=req.params.id;
        const job= await JobModel.find({_id:id}).sort('createdAt').select('-__v');
        res.status(StatusCodes.OK).json({job});

    }catch(error){
        console.log(error.message);
    }
   
}

const updateJob= async(req,res)=>{
    try{
        const id=req.params.id;
        const job= await JobModel.findOneAndUpdate({_id:id},{$set:{status:'updated'}});
        res.status(StatusCodes.OK).json({job});

    }catch(error){
        console.log(error.message);
    }
}
const deleteJob= async(req,res)=>{
    try{
        const id=req.params.id;
        const job= await JobModel.deleteOne({_id:id});
        res.status(StatusCodes.MOVED_PERMANENTLY).json({job});

    }catch(error){
        console.log(error.message);
    }
}
const getAllJob= async(req,res)=>{
    try{
        const jobs= await JobModel.find({createdBy:req.user.userId}).sort('createdAt').select('-__v');
        res.status(StatusCodes.OK).json({jobs});

    }catch(error){
        console.log(error.message);
    }
   
}



module.exports={createJob,getJob,updateJob,deleteJob,getAllJob}