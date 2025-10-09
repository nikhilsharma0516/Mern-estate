const express=require('express');
const mongoose=require('mongoose');
const app=express();
require('dotenv').config({ path: '../.env' });

app.listen(process.env.PORT,()=>{console.log(`server is running at port ${process.env.PORT}`)})

mongoose.connect(process.env.url).then(()=>{
    console.log("connected to db");
})