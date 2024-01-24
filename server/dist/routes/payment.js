"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const payment_1 = require("../controllers/payment");
router.route('/').get(payment_1.stripe);
// router.route('/:id').get(getSingleOrder)
// router.route('/:id').patch(jsonParser,updateOrder)
// router.route('/').post(jsonParser, createOrder).get(createOrder)
module.exports = router;
