const express=require('express')
const router = express.Router();

import {getAllBooks, getSingleBook } from '../controllers/books'


router.route('/').get(getAllBooks)
router.route('/:id').get(getSingleBook)

module.exports = router ;