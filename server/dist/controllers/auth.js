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
exports.getOneUser = exports.updateUserByBook = exports.logout = exports.login = exports.register = void 0;
const User = require('../models/user');
//const {StatusCodes} =require('http-status-codes')
//const {BadRequestError} = require('../errors')
const jwt = require('jsonwebtoken');
const maxAge = 3 * 24 * 60 * 60;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = req.body;
    const emailAlreadyExists = yield User.findOne({ email });
    if (emailAlreadyExists) {
        res.send('user already exist...');
    }
    //first registed user as admin
    const isFistAcount = (yield User.countDocuments({})) === 0;
    const role = isFistAcount ? 'admin' : 'user';
    const user = yield User.create({ name, email, password, role });
    const tokenUser = { name: user.name, userId: user._id, role: user.role };
    const token = jwt.sign(tokenUser, 'jwtsecret', { expiresIn: '1d' });
    res.cookie('token', token, { httpOnly: true, maxAge: maxAge * 1000, });
    res.status(200).json({ user: tokenUser, });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        res.json('eamil and pass provided');
    }
    let user = yield User.findOne({ email: email });
    if (!user) {
        res.json('no user register before...');
    }
    console.log('Entered Password:', password, typeof (password));
    console.log('Stored Password:', user.password, typeof (user.password));
    //check password//
    const isPasswordCorrect = yield user.comparePassword(password);
    console.log('isPasswordCorrect:', isPasswordCorrect);
    if (!isPasswordCorrect) {
        return res.status(401).json({ error: 'Invalid credentials......' });
    }
    console.log(user);
    const tokenUser = { name: user.name, userId: user._id, role: user.role };
    const token = jwt.sign(tokenUser, 'jwtsecret', { expiresIn: '1d' });
    res.cookie('token', token, { httpOnly: true, maxAge: maxAge * 1000, });
    res.status(200).json({ user: tokenUser, token });
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('logout user');
});
exports.logout = logout;
const updateUserByBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId: id, item } = req.body;
    let user = yield User.findOne({ _id: id });
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
