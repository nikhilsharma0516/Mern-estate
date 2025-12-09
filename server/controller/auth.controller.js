const User = require("../model/user.model");
const bcrypt=require("bcryptjs");
const { errorHandler } = require("../utils/error");
require('dotenv').config({ path: '../.env' });
const jwt=require("jsonwebtoken");
const signup= async (req,res,next)=>{
    const {userName,email,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=new User({userName,email,password:hashedPassword});
    try{
        await newUser.save();
        res.status(201).send("signup route working");
    }catch(error){
        // next(error);
        next(errorHandler(500,error.message));
    }
    
}

const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try{
        const validuser = await User.findOne({ email });
        if (!validuser) {
            return next(errorHandler(404, "User not found"));
        }
        const isPasswordCorrect = await bcrypt.compare(password, validuser.password);
        if(!isPasswordCorrect){
            return next(errorHandler(400,"Invalid credentials"));
        }
        const token = jwt.sign({id:validuser._id}, process.env.JWT_SECRET);
        const { password: pwd, ...others } = validuser._doc;
        console.log("Signin successful:", others);  
        res.cookie("token", token, {httpOnly:true,secure:false,sameSite:"lax"}).status(200).json(others);
    }
    catch(error){
        next(errorHandler(500,error.message));
    }
}
module.exports={signup, signin}
