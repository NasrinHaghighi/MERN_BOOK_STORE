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
exports.updateOrder = exports.getOneorder = exports.allOrder = exports.createOrder = void 0;
const UserOrder = require('../models/userorder');
const Book = require('../models/books');
const User = require('../models/user');
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, booksWithQuantity, userInfo } = req.body;
    console.log(userInfo);
    const newOrder = new UserOrder({
        userId,
        userInfo,
        timestamp: Date.now(),
        booksWithQuantity: booksWithQuantity,
    });
    console.log('newOrder', newOrder);
    const savedOrder = yield newOrder.save();
    // Respond with the created order details
    res.status(201).json({ order: savedOrder });
});
exports.createOrder = createOrder;
/**************************************** */
const allOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield UserOrder.find();
        res.status(200).json({ order });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.allOrder = allOrder;
const getOneorder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req.params)
    try {
        const { orderId } = req.params;
        const order = yield UserOrder.findOne({ _id: orderId });
        if (!order) {
            return res.status(404).json({ msg: `no book by id:${orderId}` });
        }
        res.status(200).json({ order });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.getOneorder = getOneorder;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const status = req.body;
        //  console.log(status)
        const order = yield UserOrder.findOneAndUpdate({ _id: orderId }, status, { new: true });
        console.log(order);
        if (!order) {
            return res.status(404).json({ msg: `No order found with ID: ${orderId}` });
        }
        res.status(200).json({ order });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.updateOrder = updateOrder;
