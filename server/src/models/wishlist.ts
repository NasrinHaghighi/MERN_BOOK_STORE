
import mongoose from "mongoose";
//const mongoose =require ('mongoose')

const wishitemSchema =new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books",
      },

})
const wishSchema =new mongoose.Schema({
    products: [wishitemSchema],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    __v: { type: Number, select: false },
})

module.exports =mongoose.model('Wishlist', wishSchema)