const User=require('../models/user')
const jwt=require('jsonwebtoken')


const auth=async (req: { headers: { autheorization: any } ,user:any},res: any,next: any)=>{
    const authHeader =req.headers.autheorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.send('authenticatin invalid')
    }
    const token=authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        //attach the user to the job routes
       
        req.user ={userId:payload.userId,name:payload.name}
        next()
      } catch (error) {
        
      }
}