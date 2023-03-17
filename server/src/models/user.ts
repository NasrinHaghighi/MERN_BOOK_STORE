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
})
UserSchema.pre('save',async function(next) {

        const salt =await bcrypt.genSalt(10)
        this.password=await bcrypt.hash(this.password,salt)
next()
})
UserSchema.methods.createJWT= function (){
return  jwt.sign({ userId:this._id,name:this.name  }, 'shhhhh', {expiresIn:'30d'});
}

UserSchema.methods.comperPassword =async function(candidatePassword:any){
    const isMatch= await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

module.exports =mongoose.model('User', UserSchema)