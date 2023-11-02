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
exports.updateOrder = exports.getSingleOrder = exports.getAllOrders = void 0;
const Orders = require('../models/orders');
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield Orders.find();
        //console.log(users)
        // Return the list of users as JSON
        res.json({ orders });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getAllOrders = getAllOrders;
const getSingleOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: orderId } = req.params;
        const order = yield Orders.findOne({ _id: orderId });
        if (!order) {
            return res.status(404).json({ msg: `no order by id:${orderId}` });
        }
        res.status(200).json({ order });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.getSingleOrder = getSingleOrder;
/***udate order */
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: orderId } = req.params;
        const status = req.body;
        console.log(status);
        const order = yield Orders.findOneAndUpdate({ _id: orderId }, status, { new: true });
        //console.log(order)
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