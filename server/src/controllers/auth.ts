const User = require('../models/user')
//const {StatusCodes} =require('http-status-codes')
//const {BadRequestError} = require('../errors')
const jwt=require('jsonwebtoken')
const maxAge= 3 *24* 60*60



export const register =async (req: any,res: any)=>{
   const {email, name, password} =req.body
   const emailAlreadyExists =await User.findOne({email})
   if(emailAlreadyExists){
     res.send('user already exist...')
   }
   //first registed user as admin
   const isFistAcount = (await User.countDocuments({})) === 0;
   const role =isFistAcount ? 'admin' :'user'
   const user= await User.create({name, email, password, role})
const tokenUser= {name:user.name, userId:user._id, role:user.role }
   const token= jwt.sign(tokenUser, 'jwtsecret', { expiresIn: '1d' })
   res.cookie('token', token , {httpOnly :true , maxAge: maxAge *1000, })
   res.status(200).json(  {user:tokenUser,})
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
 //console.log('Entered Password:', password, typeof(password));
 //console.log('Stored Password:', user.password, typeof(user.password));
 //check password//
 const isPasswordCorrect =await user.comparePassword(password)
 //console.log('isPasswordCorrect:', isPasswordCorrect);
 if(!isPasswordCorrect){
   return res.status(401).json({ error: 'Invalid credentials......' });
 }

console.log(user)

const tokenUser= {name:user.name, userId:user._id, role:user.role }
   const token= jwt.sign(tokenUser, 'jwtsecret', { expiresIn: '1d' })
   res.cookie('token', token , {httpOnly :true , maxAge: maxAge *1000, })
   res.status(200).json(  {user:tokenUser,token })
}
export const logout =async (req: any,res: any)=>{
  res.send('logout user')
}
export const updateUserByBook =async (req: any, res: any) =>{


   const {userId:id , item}=req.body
   let user = await User.findOne({ _id: id });
  
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
