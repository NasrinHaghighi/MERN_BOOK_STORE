import mongoose from "mongoose";


const UserInfoSchema=new mongoose.Schema({ 
    fullName: {
        type: String,
        required: true
      },
      gender: {
        type: String
      },
      isPresent: {
        type: Boolean,
        default: false
      },
      phone: {
        type: String
      },
      postalcode: {
        type: String
      },
      sender: {
        type: String
      },
      senderMessage: {
        type: String
      },
      shipMethod: {
        type: String
      },
      address: {
        type: String
      },
      city: {
        type: String
      },
      state: {
        type: String
      },
      country: {
        type: String
      }
})
const BookWithQuantitySchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  amount: Number,
});

  const UserOrderSchema = new mongoose.Schema({
  
    userInfo:UserInfoSchema,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
     status: {
      type: String,
      enum: ['processing', 'shipped', 'canceled', 'completed'],
      default: 'processing', // Set the default status to 'processing'
    },
    booksWithQuantity: [BookWithQuantitySchema],
  });
  
  module.exports = mongoose.model('UserOrder', UserOrderSchema);