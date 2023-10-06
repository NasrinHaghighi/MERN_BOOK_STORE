"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const users_1 = require("../controllers/users");
router.route('/').get(users_1.getAllusers);
module.exports = router;
