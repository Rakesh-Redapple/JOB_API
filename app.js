const express= require("express");
const mongoose=require("mongoose");
const app=express();
const dotenv=require("dotenv");
const auth=require("./routes/auth");
const jobs=require('./routes/jobs');
dotenv.config({path:"./.env"});
let port=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes

app.use('/api/v1',auth);
app.use('./api/v1',jobs);

// DB
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI,()=>{
    console.log("DB Connected!!!");
});
app.all("*",(req,res,next)=>{
    res.status(404).json({status:"fail",message:`page not found ${req.originalUrl}`});
})
//dadsdsf

const start=async()=>{
    try{

        app.listen(port,()=>{
            console.log(`Server is up on port:${port}`);
        })
    }catch(err){
        console.log(err);
    }
}

start();


