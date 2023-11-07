"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const orders_1 = require("../controllers/orders");
router.route('/').get(orders_1.getAllOrders);
router.route('/:id').get(orders_1.getSingleOrder);
router.route('/:id').patch(jsonParser, orders_1.updateOrder);
router.route('/').post(jsonParser, orders_1.createOrder).get(orders_1.createOrder);
module.exports = router;
