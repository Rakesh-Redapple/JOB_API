const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    name:{type:String,
    required:[true,'please provide name'],
minlength:3,
maxlength:20
},
email:{type:String,
required:[true,'please provide email'],
match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
unique:true
},
password:{type:String,
    required:[true,'please provide password'],
minlength:8
}

})
//xZXx


module.exports= mongoose.model('User',userSchema);