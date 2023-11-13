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
exports.getOneUser = exports.updateUserByBook = exports.login = exports.register = void 0;
const User = require('../models/user');
//const {StatusCodes} =require('http-status-codes')
//const {BadRequestError} = require('../errors')
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.create(Object.assign({}, req.body));
    console.log(user);
    const token = user.createJWT({ role: user.role });
    return res.json({ user: {
            role: user.role,
            name: user.name
        },
        token });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.json('eamil and pass provided');
    }
    let user = yield User.findOne({ email: email });
    if (!user) {
        res.json('no user register before...');
    }
    //check password//
    const isPasswordCorrect = yield user.comparePassword(password);
    console.log(isPasswordCorrect);
    if (!isPasswordCorrect) {
        return res.status(401).json({ error: 'Invalid credentials......' });
    }
    console.log(user);
    const token = user.createJWT({ role: user.role });
    res.status(200).json({ token, user: {
            name: user.name,
            role: user.role,
            id: user._id,
            books: user.booksList
        } });
});
exports.login = login;
const updateUserByBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId: id, item } = req.body;
    let user = yield User.findOne({ _id: id });
    // Check if the item is already in the booksList
    if (!user.booksList.includes(item)) {
        // If not, add it to the booksList
        user.booksList.push(item);
        // Save the updated user
        user = yield user.save();
    }
    res.status(200).json({ user });
});
exports.updateUserByBook = updateUserByBook;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let user = yield User.findOne({ _id: id });
    res.status(200).json({ user });
});
exports.getOneUser = getOneUser;
