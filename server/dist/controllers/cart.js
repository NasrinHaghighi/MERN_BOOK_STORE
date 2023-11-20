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
exports.updateAmount = exports.getCart = exports.removeItem = exports.addTocart = void 0;
const Cart = require('../models/cart');
const User = require('../models/user');
const { isValidObjectId } = require("mongoose");
const addTocart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.userId;
    let user = yield User.exists({ _id: userId });
    if (!userId || !isValidObjectId(userId) || !user)
        return res.status(400).send({ status: false, message: "Invalid user ID" });
    let productId = req.body.productId;
    if (!productId)
        return res.status(400).send({ status: false, message: "Invalid product" });
    let cart = yield Cart.findOne({ userId: userId });
    console.log(cart);
    if (cart) {
        const itemIndex = cart.products.findIndex((item) => item.productId.toString() === productId);
        if (itemIndex > -1) {
            cart.products[itemIndex].quantity += 1;
        }
        else {
            cart.products.push({ productId: productId, quantity: 1 });
        }
        yield cart.save();
        return res.status(200).send({ status: true, updatedCart: cart });
    }
    else {
        const newCart = yield Cart.create({
            userId,
            products: [{ productId: productId, quantity: 1 }],
        });
        return res.status(201).send({ status: true, newCart: newCart });
    }
});
exports.addTocart = addTocart;
const removeItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.userId;
    let user = yield User.exists({ _id: userId });
    let productId = req.body.productId;
    if (!userId || !isValidObjectId(userId) || !user)
        return res.status(400).send({ status: false, message: "Invalid user ID" });
    console.log(`userId:${userId}  productId:${JSON.stringify(req.body.productId)}`);
    let cart = yield Cart.findOne({ userId: userId });
    //console.log(cart)
    console.log('remove');
    if (!cart)
        return res
            .status(404)
            .send({ status: false, message: "Cart not found for this user" });
    let itemIndex = cart.products.findIndex((p) => p.productId == productId);
    if (itemIndex > -1) {
        cart.products.splice(itemIndex, 1);
        cart = yield cart.save();
        return res.status(200).send({ status: true, updatedCart: cart });
    }
    res
        .status(400)
        .send({ status: false, message: "Item does not exist in cart" });
});
exports.removeItem = removeItem;
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.userId;
    let user = yield User.exists({ _id: userId });
    if (!userId || !isValidObjectId(userId) || !user)
        return res.status(400).send({ status: false, message: "Invalid user ID" });
    let cart = yield Cart.findOne({ userId: userId });
    if (!cart)
        return res
            .status(404)
            .send({ status: false, message: "Cart not found for this user" });
    res.status(200).send({ status: true, cart: cart });
});
exports.getCart = getCart;
const updateAmount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req.body)
    let userId = req.params.userId;
    let user = yield User.exists({ _id: userId });
    let productId = req.body.data.productId;
    let updatedamount = req.body.data.amount;
    if (!userId || !isValidObjectId(userId) || !user)
        return res.status(400).send({ status: false, message: "Invalid user ID" });
    console.log(productId, updatedamount);
    let cart = yield Cart.findOne({ userId: userId });
    if (!cart)
        return res
            .status(404)
            .send({ status: false, message: "Cart not found for this user" });
    let updatedProductIndex = cart.products.findIndex((item) => item.productId == productId);
    if (updatedProductIndex !== -1) {
        if (updatedamount > 0) {
            cart.products[updatedProductIndex].quantity = updatedamount;
        }
        else {
            cart.products[updatedProductIndex].quantity = 1; // Set minimum amount to 1
        }
    }
    cart = yield cart.save();
    console.log(cart);
    return res.status(200).send({ status: true, updatedCart: cart });
});
exports.updateAmount = updateAmount;
