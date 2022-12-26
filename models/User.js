const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt =require('jsonwebtoken');

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
//mongoose middleware set for password incryption

userSchema.pre('save',async function(next){
    const salt= await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
})

// Mongoose instence  methods creation
userSchema.methods.createJwt= function(){
    return jwt.sign({userId:this._id,name:this.name},process.env.JWTKEY,{expiresIn:'2d'});
}

module.exports= mongoose.model('User',userSchema);