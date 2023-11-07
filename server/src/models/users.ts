"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UsersSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided']
    },
    email: {
        type: String,
        required: [true, 'product name must be provided']
    },
    password: {
        type: String,
        required: [true, 'product name must be provided']
    },
    role: {
        type: String,
        required: [true, 'product name must be provided']
    },
    
});
module.exports = mongoose_1["default"].model('Users', UsersSchema);
