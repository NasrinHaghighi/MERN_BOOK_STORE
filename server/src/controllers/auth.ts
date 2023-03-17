const User = require('../models/user')
//const {StatusCodes} =require('http-status-codes')
//const {BadRequestError} = require('../errors')


export const register =async (req: any,res: any)=>{
   
    const user= await User.create({...req.body})
   const token= user.createJWT()
    res.json({user:{name:user.name}, token})
}
export const login =async (req: any,res: any)=>{
 const {email, password} =req.body
 if(!email || !password){
    res.json('eamil and pass provided')
 }
 const user =await User.findOne({email})
 if(!user){
    res.json('no user register before...')
 }
 //check password//
 const isPasswordCorrect =await user.comperPassword(password)
 if( !isPasswordCorrect){
    res.json('no password register before...')
 }
 const token= user.createJWT()
 res.json({user:{name:user.name}, token})
}


