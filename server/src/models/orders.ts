import mongoose from "mongoose";



const OredrsSchema =new mongoose.Schema({
    signinUser:{
        type:String,
        required:[true, 'user id is requaer...']
    },
    userId:{
        type:String,
        required:[true, 'user id is requaer...']
    },
    status:{
        type:String,
        required:[true, 'status...']
    },
    orderedBook: 
        {
          _id: {
            type: String,
            required: true,
            // type: mongoose.Schema.Types.ObjectId,
            // ref: 'Book', // Reference to the Book model if you have one
            // required: true, 
          },
          amount: {
            type: Number,
            required: true,
            default: 1, // You can adjust the default as needed
          },
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
        
   
          
        },
     
  
})

module.exports =mongoose.model('Orders', OredrsSchema)