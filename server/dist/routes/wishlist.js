"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const wishlist_1 = require("../controllers/wishlist");
router.route('/:userId').post(jsonParser, wishlist_1.addToWishList);
router.route('/:userId').get(jsonParser, wishlist_1.getWishlistOfuser);
module.exports = router;
