"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const orders_1 = require("../controllers/orders");
router.route('/').get(orders_1.getAllOrders);
router.route('/:id').get(orders_1.getSingleOrder);
module.exports = router;
