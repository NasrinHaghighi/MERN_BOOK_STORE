import mongoose from "mongoose";
const bcrypt =require('bcryptjs')
const jwt=require('jsonwebtoken')


const UserSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide an name'],
        minlength:3
    },
    email:{
        type:String,
        required:[true, 'Please provide an email'],
        minlength:3,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Please provide an pass'],
        minlength:6
    },
    role: {
        type: String,
        default: 'user' 
    },
    booksList: [
        {
          _id: {
           
            required: true,
           type: mongoose.Schema.Types.ObjectId,
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
        },
        ebook:{
            type:Boolean,
            required:[true, 'ebook must be provided']
        } , 
         rating:{
            type:String,
            required:[true, 'rating must be provided'] 
        },
        author: {
            type:String,
            required:[true, 'author must be provided'] 
        },
        description:{
            type:String,
            required:[true, 'author must be provided'] 
        }
       
   
          
        },
      ],
   
})
UserSchema.pre('save',async function(next) {

        const salt =await bcrypt.genSalt(10)
        this.password=await bcrypt.hash(this.password,salt)
next()
})
UserSchema.methods.createJWT= function (){
return  jwt.sign({ userId:this._id,name:this.name ,role:this.role }, 'sssss', {expiresIn:'30d'});
}

UserSchema.methods.comparePassword =async function(candidatePassword:any){
    const isMatch= await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

module.exports =mongoose.model('User', UserSchema)