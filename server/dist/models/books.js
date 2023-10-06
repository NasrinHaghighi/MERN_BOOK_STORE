"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_2 = __importDefault(require("mongoose"));
const BooksSchema = new mongoose_2.default.Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided']
    },
    price: {
        type: Number,
        required: [true, 'product price name must be provided']
    },
    ebook: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    author: {
        type: String,
        required: [true, 'auther name must be provided']
    },
    descriptin: {
        type: String,
        required: [true, 'auther name must be provided']
    },
    format: {
        type: String,
        default: false
        // enum: {
        //     values:['paperback', 'hardback'],
        //     message: '{VALUE} is not supported',
        //   },
    },
    category: {
        type: String,
        required: [true, 'category must be provided']
    },
    imageUrl: {
        type: String,
        required: [true, 'photo must be provided']
    },
    language: {
        type: String,
        required: [true, 'photo must be provided']
    },
    publisher: {
        type: String,
        default: false
        //enum:['Seven Seas Entertainment, LLC', ' Dark Horse Comics,U.S.', 'Viz Media, Subs. of Shogakukan Inc']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        default: 'read'
    }
});
module.exports = mongoose_2.default.model('Books', BooksSchema);
