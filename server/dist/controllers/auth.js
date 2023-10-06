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
exports.login = exports.register = void 0;
const User = require('../models/user');
//const {StatusCodes} =require('http-status-codes')
//const {BadRequestError} = require('../errors')
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.create(Object.assign({}, req.body));
    // console.log(user)
    const token = user.createJWT();
    res.json({ user: {
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
    const user = yield User.findOne({ email });
    console.log(user);
    if (!user) {
        res.json('no user register before...');
    }
    //check password//
    const isPasswordCorrect = yield user.comperPassword(password);
    if (!isPasswordCorrect) {
        res.json('no password register before...');
    }
    const token = user.createJWT();
    res.json({ user: {
            role: user.role,
            name: user.name
        },
        token });
});
exports.login = login;
// {user:{name:user.name},
