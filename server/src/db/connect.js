"use strict";
exports.__esModule = true;
exports.connectDB = void 0;
var mongoose = require('mongoose');
var connectionString = 'mongodb+srv://nasrin60:Wk1mCxwi0jjvFfsc@expressnode.phhwydj.mongodb.net/book-api?retryWrites=true&w=majority';
var connectDB = function (url) {
    return mongoose.connect(connectionString);
};
exports.connectDB = connectDB;
//mongoose.connect(connectionString)
module.exports = exports.connectDB;
///Wk1mCxwi0jjvFfsc
