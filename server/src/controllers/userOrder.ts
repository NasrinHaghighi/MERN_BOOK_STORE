const UserOrder =require('../models/userOrder')
const Book =require('../models/books')
const User =require('../models/user')

export const createOrder = async (req: any, res: any) => {
const {userId, booksWithQuantity, userInfo} =req.body
//console.log(userId)
const newOrder = new UserOrder({
    userId: userId,
   
    userInfo: userInfo

  });
  const savedOrder = await newOrder.save();

  // Respond with the created order details
  res.status(201).json({ order: savedOrder });
}

export const allOrder=async (req: any, res: any) => {

    try{
      
        const order =await UserOrder.find()
       
        
        res.status(200).json({order})
    }catch(error){
        res.status(500).json({msg : error})
    }
}


export const getOneorder =async (req: any, res: any) => {
    console.log(req.params)

    try{
        const {orderId}=req.params
        const order =await UserOrder.findOne({_id:orderId})
      
        if(!order){
            return res.status(404).json({msg:`no book by id:${orderId}`})
        }
        res.status(200).json({order})
    }catch(error){
        res.status(500).json({msg : error})
    }
}

export const updateOrder =async (req: any, res: any) => {
    try {
    const {  orderId } = req.params;
    const status = req.body;
    console.log(status)
    const order = await UserOrder.findOneAndUpdate({ _id: orderId },  status, { new: true });
    console.log(order)
    if (!order) {
        return res.status(404).json({ msg: `No order found with ID: ${orderId}` });
      }
  
      res.status(200).json({ order });
} catch (error) {
    res.status(500).json({ msg: error });
  }
}