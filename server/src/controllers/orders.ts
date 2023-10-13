

const Orders =require('../models/orders')

export const getAllOrders =async (req: any, res: any) =>{
    try {
    
        const orders = await Orders.find();
    //console.log(users)
        // Return the list of users as JSON
        res.json({ orders });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}


export const getSingleOrder =async (req: any, res: any) =>{
    try{
        const {id:orderId}=req.params
        const order =await Orders.findOne({_id:orderId})
       
        if(!order){
            return res.status(404).json({msg:`no order by id:${orderId}`})
        }
        res.status(200).json({order})
    }catch(error){
        res.status(500).json({msg : error})
    }
}