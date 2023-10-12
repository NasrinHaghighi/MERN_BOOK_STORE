import mongoose from "mongoose";



const OredrsSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'product name must be provided']
    },
    price:{
        type:Number,
        required:[true, 'product price name must be provided']
    },
    
    imageUrl:{
        type:String,
        required:[true, 'photo must be provided']
    },
   
    createdAt:{
        type:Date,
        default:Date.now()
    }
    ,
    status:{
        type:String,
        required:[true, 'product name must be provided']
    },
   
  
})

module.exports =mongoose.model('Orders', OredrsSchema)