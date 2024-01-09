"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const wishlist_1 = require("../controllers/wishlist");
router.route('/:userId').post(jsonParser, wishlist_1.addToWhishList);
//router.route('/:userId').delete(jsonParser, removeItem )
module.exports = router;
