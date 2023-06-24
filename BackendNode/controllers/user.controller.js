const bcrypt = require('bcrypt')
const userModel = require("../models/user.model")
// const generatePassword = require('../utils/generatePassward')
require('dotenv').config()
const jwt = require("jsonwebtoken")

//to view all users data
const AllUsers = async (req,res) => {
    try{
    const admin = await userModel.find()
    res.send(admin)
    }
    catch(err){
        res.status(400).json({err: err.message})
        console.log(err)
    }
}



const getUsersbyID = async (req,res) => {
    try{
     const admin = await userModel.findById(req.params.id)
     res.send(admin)
    }
    catch(err){
        res.status(400).json({err: err.message})
        console.log(err)
    }
}

const signUP = async (req,res) => {
    const payload = req.body;
    try{
      const admin = await userModel.find({email: payload.email});
      if(admin.length) {
        return res.status(401).json({err: 'User already exist !'})
      }
     bcrypt.hash(payload['password'], 5, async(err,hash) => {
        if(err) return res.json({err: err.message})
        payload['password'] = hash
        let newAdmin = new userModel(payload)
        await newAdmin.save()

        res.status(200).json({msg: "User has been created"})
     })
    }
    catch(err){
        res.status(400).json({err: err.message})
        console.log(err)
    }
    
}

//Login
const login = async(req,res) =>{
    const {email,password} = req.body
    try {
        const user = await userModel.findOne({email})
        if(!user) return res.status(400).send({"msg":"register First"})
        bcrypt.compare(password, user.password, async(err, result) =>{
            if(err) return res.status(400).send("Wrong Password")
           if(result){
            const accessToken = jwt.sign({UserId:`${user._id}`,role:user.role}, process.env.TOKENKEY,{expiresIn:"7d"})
            // const refreshToken = jwt.sign({UserId:`${user._id}`,role:user.role},process.env.REFRESHTOKENKEY,{expiresIn:"28d"})

            

            res.status(200).send({"msg":"login Success",accessToken,user})
           }else{
            return res.status(400).send({"msg":"Wrong Password"})
           }
        });
        
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
}




module.exports = {AllUsers, getUsersbyID, signUP, login}

