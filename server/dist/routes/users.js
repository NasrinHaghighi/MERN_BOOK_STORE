"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const users_1 = require("../controllers/users");
router.route('/').get(users_1.getAllusers);
//router.route('/:id').patch(jsonParser,createUserCard)
module.exports = router;
