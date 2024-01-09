const User=require('../models/user')
const Wishlist =require('../models/whishlist')
const { isValidObjectId } = require("mongoose");

export const addToWhishList =async (req: any, res: any) =>{
  let userId = req.params.userId;
  let user = await User.exists({ _id: userId });
  if (!userId || !isValidObjectId(userId) || !user)
  return res.status(400).send({ status: false, message: "Invalid user ID" });
  let productId = req.body.productId;
  if (!productId)
  return res.status(400).send({ status: false, message: "Invalid product" });

  let wishlist=await Wishlist.findOne({ userId: userId })
    console.log(wishlist)
    if(wishlist){
      wishlist.products.push({ productId: productId});
      await wishlist.save();
      return res.status(200).send({ status: true, updatedCart: wishlist });
    }else{
      const newWhishlist = await Wishlist.create({
        userId,
        products: [{ productId: productId }],
      });
  
      return res.status(201).send({ status: true, newWhishlist: newWhishlist });
    }
}