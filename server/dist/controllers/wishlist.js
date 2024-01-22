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
exports.removeFromWishlist = exports.getWishlistOfuser = exports.addToWishList = void 0;
const User = require('../models/user');
const Wishlist = require('../models/wishlist');
const { isValidObjectId } = require("mongoose");
const addToWishList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.userId;
    let user = yield User.exists({ _id: userId });
    if (!userId || !isValidObjectId(userId) || !user)
        return res.status(400).send({ status: false, message: "Invalid user ID" });
    let productId = req.body.productId;
    if (!productId)
        return res.status(400).send({ status: false, message: "Invalid product" });
    let wishlist = yield Wishlist.findOne({ userId: userId });
    //console.log(wishlist)
    if (wishlist) {
        const itemIndex = wishlist.products.findIndex((item) => item.productId.toString() === productId);
        //console.log(itemIndex)
        if (itemIndex > -1) {
            yield wishlist.save();
            return res.status(201).send({ status: true, newWhishlist: wishlist });
        }
        else {
            wishlist.products.push({ productId: productId });
            yield wishlist.save();
            return res.status(200).send({ status: true, updatedCart: wishlist });
        }
    }
    else {
        const newWhishlist = yield Wishlist.create({
            userId,
            products: [{ productId: productId }],
        });
        return res.status(201).send({ status: true, newWhishlist: newWhishlist });
    }
});
exports.addToWishList = addToWishList;
const getWishlistOfuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.userId;
    let user = yield User.exists({ _id: userId });
    if (!userId || !isValidObjectId(userId) || !user)
        return res.status(400).send({ status: false, message: "Invalid user ID" });
    try {
        const wishlist = yield Wishlist.findOne({ userId: userId });
        if (!wishlist) {
            return res.status(404).send({ status: false, message: "Wishlist not found for the user" });
        }
        //console.log(wishlist.products)
        return res.status(200).send({ status: true, wishlist: wishlist.products });
    }
    catch (error) {
        return res.status(500).send({ status: false, message: "Internal server error" });
    }
});
exports.getWishlistOfuser = getWishlistOfuser;
/*remove wish list*/
const removeFromWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.userId;
    let user = yield User.exists({ _id: userId });
    let productId = req.body.productId;
    if (!userId || !isValidObjectId(userId) || !user)
        return res.status(400).send({ status: false, message: "Invalid user ID" });
    let wishlist = yield Wishlist.findOne({ userId: userId });
    if (!wishlist)
        return res
            .status(404)
            .send({ status: false, message: "Cart not found for this user" });
    let itemIndex = wishlist.products.findIndex((p) => p.productId == productId);
    if (itemIndex > -1) {
        wishlist.products.splice(itemIndex, 1);
        wishlist = yield wishlist.save();
        return res.status(200).send({ status: true, updatedwishlist: wishlist });
    }
    if (!productId) {
        /*can i say if req.body is not availeble, it meanse remove all the cart,*/
        yield Wishlist.deleteOne({ userId: userId });
        return res.status(200).send({ status: true, message: "Cart deleted successfully" });
    }
    res
        .status(400)
        .send({ status: false, message: "Item does not exist in cart" });
});
exports.removeFromWishlist = removeFromWishlist;
