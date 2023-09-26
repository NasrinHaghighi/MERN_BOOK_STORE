"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const books_1 = require("../controllers/books");
router.route('/').get(books_1.getAllBooks);
router.route('/:id').get(books_1.getSingleBook);
module.exports = router;
