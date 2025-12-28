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
        res.cookie("access_token", token, {httpOnly:true,secure:false,sameSite:"lax"}).status(200).json(others);
    }
    catch(error){
        next(errorHandler(500,error.message));
    }
}
const google=async(req,res,next)=>{
    try{
        const user= await User.findOne({email:req.body.email});
        if(user){
            console.log("Existing user logged in via Google OAuth:", user);
            const access_token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
            const { password: pwd, ...others } = user._doc;
            res.cookie("access_token", access_token, {httpOnly:true}).status(200).json(others);
        }
        else{
            const generatedPassword= Math.random().toString(36).slice(-8) +Math.random().toString(36).slice(-8);
            const hashedPassword= await bcrypt.hashSync(generatedPassword,10); 
            const newUser= new User({
                userName:req.body.name.split(" ").join("").toLowerCase()+Math.random().toString(36).slice(-5),
                email:req.body.email,
                password:hashedPassword,
                avatar:req.body.photoUrl
            });
            await newUser.save();
            console.log("New user created via Google OAuth:", newUser);
            const access_token = jwt.sign({id:newUser._id}, process.env.JWT_SECRET);
            const { password: pwd, ...others } = newUser._doc;
            res.cookie("access_token", access_token, {httpOnly:true}).status(200).json(others);

        }
    }
    catch(error){
        next(errorHandler(500,error.message));
    }

}
module.exports={signup, signin, google}
