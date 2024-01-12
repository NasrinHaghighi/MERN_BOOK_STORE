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
/*remove wish list*/
export const removeFromWishlist =async(req: any, res: any) =>{
  let userId = req.params.userId;
  let user = await User.exists({ _id: userId });
  let productId = req.body.productId;

if (!userId || !isValidObjectId(userId) || !user)
    return res.status(400).send({ status: false, message: "Invalid user ID" });
    let wishlist = await Wishlist.findOne({ userId: userId });
    if (!wishlist)
        return res
          .status(404)
         .send({ status: false, message: "Cart not found for this user" });
   let itemIndex = wishlist.products.findIndex((p:any) => p.productId == productId);     
   if (itemIndex > -1) {
    wishlist.products.splice(itemIndex, 1);
    wishlist = await wishlist.save();
    return res.status(200).send({ status: true, updatedwishlist: wishlist });
  }
  if(!productId){
    /*can i say if req.body is not availeble, it meanse remove all the cart,*/
    await Wishlist.deleteOne({ userId: userId });
    return res.status(200).send({ status: true, message: "Cart deleted successfully" });
  }
  res
    .status(400)
    .send({ status: false, message: "Item does not exist in cart" });
}


// //console.log(`userId:${userId}  productId:${JSON.stringify(req.body.productId)}`)
//   let wishlist = await Wishlist.findOne({ userId: userId });
//   console.log(wishlist)
//  console.log('remove')
//   if (!wishlist)
//     return res
//       .status(404)
//       .send({ status: false, message: "Cart not found for this user" });

//   let itemIndex = wishlist.products.findIndex((p:any) => p.productId == productId);
//   if (itemIndex > -1) {
//     wishlist.products.splice(itemIndex, 1);
//     wishlist = await wishlist.save();
//     return res.status(200).send({ status: true, updatedCart: wishlist });
//   }
//   if(!productId){
//     /*can i say if req.body is not availeble, it meanse remove all the cart,*/
//     await Wishlist.deleteOne({ userId: userId });
//     return res.status(200).send({ status: true, message: "Cart deleted successfully" });
//   }
//   res
//     .status(400)
//     .send({ status: false, message: "Item does not exist in cart" });