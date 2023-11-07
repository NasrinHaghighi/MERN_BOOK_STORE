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
exports.createUserCard = exports.getAllusers = void 0;
const Users = require('../models/users');
const getAllusers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield Users.find();
        //console.log(users)
        // Return the list of users as JSON
        res.json({ users });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getAllusers = getAllusers;
const createUserCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('create card for user...');
});
exports.createUserCard = createUserCard;
