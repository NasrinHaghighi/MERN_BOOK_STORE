"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_2 = __importDefault(require("mongoose"));
const OredrsSchema = new mongoose_2.default.Schema({
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
        default: Date.now()
    },
    status: {
        type: String,
        required: [true, 'product name must be provided']
    },
    username: {
        type: String,
        required: [true, 'product name must be provided']
    }
});
module.exports = mongoose_2.default.model('Orders', OredrsSchema);
