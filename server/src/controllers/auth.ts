const User = require('../models/user')
//const {StatusCodes} =require('http-status-codes')
//const {BadRequestError} = require('../errors')


export const register =async (req: any,res: any)=>{
   const user= await User.create({...req.body})
  // console.log(user)
   const token= user.createJWT({ role: user.role })
       res.json({user:{
      role:user.role,
      name:user.name
   }, 
      token})
}
export const login =async (req: any,res: any)=>{
 const {email, password} =req.body

 if(!email || !password ){
    res.json('eamil and pass provided')
 }
 const user =await User.findOne({email})
 console.log(user)
 if(!user){
    res.json('no user register before...')
 }
 //check password//
 const isPasswordCorrect =await user.comperPassword(password)
 if( !isPasswordCorrect){
    res.json('no password register before...')
 }
 const token= user.createJWT({ role: user.role })
 res.json({user:{
role:user.role,
name:user.name
}, 
token})
}


// {user:{name:user.name},