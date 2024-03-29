"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const userOrder_1 = require("../controllers/userOrder");
router.route('/').get(userOrder_1.allOrder);
router.route('/').post(jsonParser, userOrder_1.createOrder).get(userOrder_1.allOrder);
router.route('/:orderId').get(userOrder_1.getOneorder);
router.route('/:orderId').patch(jsonParser, userOrder_1.updateOrder);
module.exports = router;
