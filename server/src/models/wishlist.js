"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
//const mongoose =require ('mongoose')
var wishitemSchema = new mongoose_1.default.Schema({
    productId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Books",
    },
});
var whishSchema = new mongoose_1.default.Schema({
    products: [wishitemSchema],
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    __v: { type: Number, select: false },
});
module.exports = mongoose_1.default.model('Wishlist', whishSchema);
