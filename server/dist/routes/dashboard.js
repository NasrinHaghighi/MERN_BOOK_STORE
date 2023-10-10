"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const dashboard_1 = require("../controllers/dashboard");
router.route('/').get(dashboard_1.dashboard);
module.exports = router;
