const User=require('../models/user')
const Wishlist =require('../models/wishlist')
const { isValidObjectId } = require("mongoose");

export const addToWishList =async (req: any, res: any) =>{
  let userId = req.params.userId;
  let user = await User.exists({ _id: userId });
  if (!userId || !isValidObjectId(userId) || !user)
  return res.status(400).send({ status: false, message: "Invalid user ID" });
  let productId = req.body.productId;
  if (!productId)
  return res.status(400).send({ status: false, message: "Invalid product" });

  let wishlist=await Wishlist.findOne({ userId: userId })
   //console.log(wishlist)
    if(wishlist){
      const itemIndex = wishlist.products.findIndex((item:any) => item.productId.toString() === productId);
      //console.log(itemIndex)
      if(itemIndex>-1){
        await wishlist.save();
        return res.status(201).send({ status: true, newWhishlist: wishlist });
      }else{
        wishlist.products.push({ productId: productId});
        await wishlist.save();
        return res.status(200).send({ status: true, updatedCart: wishlist })
      }
  
    }else{
      const newWhishlist = await Wishlist.create({
        userId,
        products: [{ productId: productId }],
      });
  
      return res.status(201).send({ status: true, newWhishlist: newWhishlist });
    }
}

export const getWishlistOfuser =async(req: any, res: any) =>{
  let userId = req.params.userId;
  let user = await User.exists({ _id: userId });
  if (!userId || !isValidObjectId(userId) || !user)
  return res.status(400).send({ status: false, message: "Invalid user ID" });
  try {
    const wishlist = await Wishlist.findOne({ userId: userId })
    if (!wishlist) {
      return res.status(404).send({ status: false, message: "Wishlist not found for the user" });
    }
//console.log(wishlist.products)
    return res.status(200).send({ status: true, wishlist: wishlist.products });
  } catch (error) {
    return res.status(500).send({ status: false, message: "Internal server error" });
  }
}