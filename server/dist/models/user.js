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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_2 = __importDefault(require("mongoose"));
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserSchema = new mongoose_2.default.Schema({
    name: {
        type: String,
        required: [true, 'Please provide an name'],
        minlength: 3
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        minlength: 3,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide an pass'],
        minlength: 6
    },
    role: {
        type: String,
        default: 'user'
    },
    booksList: [
        {
            _id: {
                required: true,
                type: mongoose_2.default.Schema.Types.ObjectId,
                // ref: 'Book', // Reference to the Book model if you have one
                // required: true, 
            },
            amount: {
                type: Number,
                required: true,
                default: 1, // You can adjust the default as needed
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
                default: Date.now()
            },
            ebook: {
                type: Boolean,
                required: [true, 'ebook must be provided']
            },
            rating: {
                type: String,
                required: [true, 'rating must be provided']
            },
            author: {
                type: String,
                required: [true, 'author must be provided']
            },
            description: {
                type: String,
                required: [true, 'author must be provided']
            }
        },
    ],
});
UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt.genSalt(10);
        this.password = yield bcrypt.hash(this.password, salt);
        next();
    });
});
UserSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id, name: this.name, role: this.role }, 'sssss', { expiresIn: '30d' });
};
UserSchema.methods.comparePassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const isMatch = yield bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    });
};
module.exports = mongoose_2.default.model('User', UserSchema);
