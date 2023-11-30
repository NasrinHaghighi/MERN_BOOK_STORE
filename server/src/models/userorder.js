"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserInfoSchema = new mongoose_1["default"].Schema({
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    isPresent: {
        type: Boolean,
        "default": false
    },
    phone: {
        type: String
    },
    postalcode: {
        type: String
    },
    sender: {
        type: String
    },
    senderMessage: {
        type: String
    },
    shipMethod: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    }
});
// const userItemSchema = new mongoose.Schema({
//     productId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Books",
//     },
//     quantity: {
//       type: Number,
//       default: 1,
//     },
//   });
var userOrderSchema = new mongoose_1["default"].Schema({
    userInfo: [UserInfoSchema],
    userId: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        "enum": ['processing', 'shipped', 'canceled', 'completed'],
        "default": 'processing'
    }
});
module.exports = mongoose_1["default"].model('UserOrder', userOrderSchema);
