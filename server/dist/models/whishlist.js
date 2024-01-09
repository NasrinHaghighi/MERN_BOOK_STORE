"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_2 = __importDefault(require("mongoose"));
//const mongoose =require ('mongoose')
const wishitemSchema = new mongoose_2.default.Schema({
    productId: {
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: "Books",
    },
});
const whishSchema = new mongoose_2.default.Schema({
    products: [wishitemSchema],
    userId: {
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: "User",
    },
    __v: { type: Number, select: false },
});
module.exports = mongoose_2.default.model('Whishlist', whishSchema);
