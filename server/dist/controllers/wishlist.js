"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToWhishList = void 0;
const User = require('../models/user');
const Wishlist = require('../models/whishlist');
const { isValidObjectId } = require("mongoose");
const addToWhishList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.userId;
    let user = yield User.exists({ _id: userId });
    if (!userId || !isValidObjectId(userId) || !user)
        return res.status(400).send({ status: false, message: "Invalid user ID" });
    let productId = req.body.productId;
    if (!productId)
        return res.status(400).send({ status: false, message: "Invalid product" });
    let wishlist = yield Wishlist.findOne({ userId: userId });
    console.log(wishlist);
    if (wishlist) {
        wishlist.products.push({ productId: productId });
        yield wishlist.save();
        return res.status(200).send({ status: true, updatedCart: wishlist });
    }
    else {
        const newWhishlist = yield Wishlist.create({
            userId,
            products: [{ productId: productId }],
        });
        return res.status(201).send({ status: true, newWhishlist: newWhishlist });
    }
});
exports.addToWhishList = addToWhishList;
