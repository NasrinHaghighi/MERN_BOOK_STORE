const User = require('../models/user')
//const {StatusCodes} =require('http-status-codes')
//const {BadRequestError} = require('../errors')


export const register =async (req: any,res: any)=>{
   const user= await User.create({...req.body})
 console.log(user)
   const token= user.createJWT({ role: user.role })
   return    res.json({user:{
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


let user = await User.findOne({ email: email });

 if(!user){
    res.json('no user register before...')
 }

 //check password//
 const isPasswordCorrect =await user.comparePassword(password)
 console.log(isPasswordCorrect)
 if(!isPasswordCorrect){
   return res.status(401).json({ error: 'Invalid credentials......' });
 }

console.log(user)

 const token= user.createJWT({ role: user.role })
   res.status(200).json({token,  user:{
      name:user.name,
      role:user.role,
      id:user._id,
      books:user.booksList

   } });
}

export const updateUserByBook =async (req: any, res: any) =>{

   const {userId:id , item}=req.body
   let user = await User.findOne({ _id: id });
  // Check if the item is already in the booksList
  if (!user.booksList.includes(item)) {
   // If not, add it to the booksList
   user.booksList.push(item);

   // Save the updated user
   user = await user.save();
}

 
   res.status(200).json({ user });
  }
  export const getOneUser =async (req: any, res: any) =>{
  const {id}=req.params
  let user = await User.findOne({ _id: id });
  res.status(200).json({ user });
  }
