"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var OredrsSchema = new mongoose_1["default"].Schema({
    signinUser: {
        type: String,
        required: [true, 'user id is requaer...']
    },
    userId: {
        type: String,
        required: [true, 'user id is requaer...']
    },
    status: {
        type: String,
        required: [true, 'status...']
    },
    orderedBook: {
        _id: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true,
            "default": 1
        },
        name: {
            type: String,
            required: [true, 'product name must be provided']
        },
        price: {
            type: Number,
            required: [true, 'product price name must be provided']
        },
        imageUrl: {
            type: String,
            required: [true, 'photo must be provided']
        },
        createdAt: {
            type: Date,
            "default": Date.now()
        }
    }
});
module.exports = mongoose_1["default"].model('Orders', OredrsSchema);
