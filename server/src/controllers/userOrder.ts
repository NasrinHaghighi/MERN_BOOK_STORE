const userOrder =require('../models/userOrder')
const Book =require('../models/books')
const User =require('../models/user')

export const createOrder = async (req: any, res: any) => {
const {userId, booksWithQuantity, userInfo} =req.body
console.log(userId)
const newOrder = new userOrder({
    userId: userId,
   
    userInfo: userInfo

  });
  const savedOrder = await newOrder.save();

  // Respond with the created order details
  res.status(201).json({ order: savedOrder });
}

export const allOrder=async (req: any, res: any) => {

    try{
      
        const order =await userOrder.find()
       
        
        res.status(200).json({order})
    }catch(error){
        res.status(500).json({msg : error})
    }
}
