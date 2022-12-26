const express=require('express');
const {register}=require('../controller/auth')
const router=express.Router();
const{createJob,getJob,updateJob,deleteJob,getAllJob}= require('../controller/job');


router.route('/').post(createJob).get(getAllJob);
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob);



module.exports=router;

