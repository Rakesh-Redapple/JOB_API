const mongoose= require('mongoose');
const JobsSchema= new mongoose.Schema({
    company:{
        type:String,
        required:[true,'please insert company name'],
        maxlength:30
    },
    position:{
        type:String,
        required:[true,'please provide position'],
        maxlength:100
    },
    status:{
        type:String,
        enum:['interview','decline','pending'],
        default:'pending'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'please provide user']
    }

},{timestamps:true});



module.exports=mongoose.model('job',JobsSchema);