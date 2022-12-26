const createJob= async(req,res)=>{
    res.status(201).json({msg:'job created done'});
}
const getJob= async(req,res)=>{
    res.status(200).json({msg:'job got succesfully'});
}
const updateJob= async(req,res)=>{
    res.status(200).json({msg:'job updated'});
}
const deleteJob= async(req,res)=>{
    res.status(204).json({msg:'job deleted '});
}
const getAllJob= async(req,res)=>{
    res.status(200).json({msg:'all job got successfully'});
}



module.exports={createJob,getJob,updateJob,deleteJob,getAllJob}