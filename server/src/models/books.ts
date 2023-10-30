import mongoose from "mongoose";



const BooksSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'product name must be provided']
    },
    price:{
        type:Number,
        required:[true, 'product price name must be provided']
    },
    ebook:{
        type:Boolean,
        default:false
    },
   
    rating:{
        type:Number,
        default:4.5
    },
    author:{
        type:String,
        required:[true, 'auther name must be provided']
    },
    description:{
        type:String,
        required:[true, 'auther name must be provided']
    },
    format:{
        type:String,
        default:false
        // enum: {
        //     values:['paperback', 'hardback'],
        //     message: '{VALUE} is not supported',
        //   },
         
    },
    category:{
        type:String,
        required:[true, 'category must be provided']
    },
    imageUrl:{
        type:String,
        default:''
        //required:[true, 'imageUrl must be provided']
    },
    language:{
        type:String,
        required:[true, 'language must be provided']
    },
    publisher:{
        type:String,
       default:false
        
      //enum:['Seven Seas Entertainment, LLC', ' Dark Horse Comics,U.S.', 'Viz Media, Subs. of Shogakukan Inc']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
    ,
    stock:{
        type:String,
        default:'In In Stock'
    },
    discont:{
        type:Number,
        default:0
    }
  
})

module.exports =mongoose.model('Books', BooksSchema)