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
exports.allOrder = exports.createOrder = void 0;
const userOrder = require('../models/userOrder');
const Book = require('../models/books');
const User = require('../models/user');
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, booksWithQuantity, userInfo } = req.body;
    console.log(userId);
    const newOrder = new userOrder({
        userId: userId,
        userInfo: userInfo
    });
    const savedOrder = yield newOrder.save();
    // Respond with the created order details
    res.status(201).json({ order: savedOrder });
});
exports.createOrder = createOrder;
const allOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield userOrder.find();
        res.status(200).json({ order });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.allOrder = allOrder;
