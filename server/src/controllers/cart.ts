const Cart =require('../models/cart')
const User=require('../models/user')

const { isValidObjectId } = require("mongoose");

export const addTocart =async (req: any, res: any) =>{
  
    let userId = req.params.userId;
    let user = await User.exists({ _id: userId });
    if (!userId || !isValidObjectId(userId) || !user)
    return res.status(400).send({ status: false, message: "Invalid user ID" });

    let productId = req.body.productId;
    if (!productId)
    return res.status(400).send({ status: false, message: "Invalid product" });
   
  let cart=await Cart.findOne({ userId: userId })
  console.log(cart)
  if (cart) {
    const itemIndex = cart.products.findIndex((item:any) => item.productId.toString() === productId);
    if (itemIndex > -1) {
      cart.products[itemIndex].quantity += 1;
    } else {
      cart.products.push({ productId: productId, quantity: 1 });
    }
    await cart.save();
    return res.status(200).send({ status: true, updatedCart: cart });
  } else {
    const newCart = await Cart.create({
      userId,
      products: [{ productId: productId, quantity: 1 }],
    });

    return res.status(201).send({ status: true, newCart: newCart });
  }
    
}

export const removeItem = async (req:any, res:any) => {
  let userId = req.params.userId;
  let user = await User.exists({ _id: userId });
  let productId = req.body.productId;

  if (!userId || !isValidObjectId(userId) || !user)
    return res.status(400).send({ status: false, message: "Invalid user ID" });
//console.log(`userId:${userId}  productId:${JSON.stringify(req.body.productId)}`)
  let cart = await Cart.findOne({ userId: userId });
  //console.log(cart)
 // console.log('remove')
  if (!cart)
    return res
      .status(404)
      .send({ status: false, message: "Cart not found for this user" });

  let itemIndex = cart.products.findIndex((p:any) => p.productId == productId);
  if (itemIndex > -1) {
    cart.products.splice(itemIndex, 1);
    cart = await cart.save();
    return res.status(200).send({ status: true, updatedCart: cart });
  }
  if(!productId){
    /*can i say if req.body is not availeble, it meanse remove all the cart,*/
    await Cart.deleteOne({ userId: userId });
    return res.status(200).send({ status: true, message: "Cart deleted successfully" });
  }
  res
    .status(400)
    .send({ status: false, message: "Item does not exist in cart" });
};


export const getCart=async (req:any, res:any) =>{
  let userId = req.params.userId;
  let user = await User.exists({ _id: userId });

  if (!userId || !isValidObjectId(userId) || !user)
  return res.status(400).send({ status: false, message: "Invalid user ID" });

let cart = await Cart.findOne({ userId: userId });
if (!cart)
  return res
    .status(404)
    .send({ status: false, message: "Cart not found for this user" });

res.status(200).send({ status: true, cart: cart });
}


export const updateAmount=async (req:any, res:any) =>{
  //console.log(req.body)
  let userId = req.params.userId;
  let user = await User.exists({ _id: userId });
  let productId = req.body.data.productId;
  let updatedamount=req.body.data.amount
  if (!userId || !isValidObjectId(userId) || !user)
  return res.status(400).send({ status: false, message: "Invalid user ID" });
console.log(productId, updatedamount)
let cart = await Cart.findOne({ userId: userId });

if (!cart)
return res
  .status(404)
  .send({ status: false, message: "Cart not found for this user" });



  let updatedProductIndex = cart.products.findIndex(
    (item: any) => item.productId == productId
  );

  if (updatedProductIndex !== -1) {

    if (updatedamount > 0) {
      cart.products[updatedProductIndex].quantity = updatedamount;
    } else {
      cart.products[updatedProductIndex].quantity = 1; // Set minimum amount to 1
    }
  }
 
  cart = await cart.save();
  console.log(cart)
  return res.status(200).send({ status: true, updatedCart: cart });
}

export const deleteCart=async (req:any, res:any) =>{
  try {
    const userId = req.params.userId;
    console.log(userId)
  
  }catch(er){
    console.log(er)
  }
}

