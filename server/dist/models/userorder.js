"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_2 = __importDefault(require("mongoose"));
const UserInfoSchema = new mongoose_2.default.Schema({
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
});
const BookWithQuantitySchema = new mongoose_2.default.Schema({
    timestamp: {
        type: Date,
        default: Date.now,
    },
    book: { type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Book' },
    amount: Number,
});
const UserOrderSchema = new mongoose_2.default.Schema({
    userInfo: UserInfoSchema,
    userId: {
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: "User",
    },
    status: {
        type: String,
        enum: ['processing', 'shipped', 'canceled', 'completed'],
        default: 'processing', // Set the default status to 'processing'
    },
    booksWithQuantity: [BookWithQuantitySchema],
});
module.exports = mongoose_2.default.model('UserOrder', UserOrderSchema);
