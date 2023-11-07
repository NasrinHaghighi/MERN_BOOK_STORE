"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_2 = __importDefault(require("mongoose"));
const OredrsSchema = new mongoose_2.default.Schema({
    signinUser: {
        type: String,
        required: [true, 'user id is requaer...']
    },
    userId: {
        type: String,
        required: [true, 'user id is requaer...']
    },
    status: {
        type: String,
        required: [true, 'status...']
    },
    orderedBook: {
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
        name: {
            type: String,
            required: [true, 'product name must be provided']
        },
        price: {
            type: Number,
            required: [true, 'product price name must be provided']
        },
        imageUrl: {
            type: String,
            required: [true, 'photo must be provided']
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    },
});
module.exports = mongoose_2.default.model('Orders', OredrsSchema);
