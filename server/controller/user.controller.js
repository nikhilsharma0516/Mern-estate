let getAllUser=(req,res)=>{
    res.send(`<h1>get all user</h1>`)    
}
let createUser=(req,res)=>{
    res.send("create user")    
}
module.exports={getAllUser,createUser}