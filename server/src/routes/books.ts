const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()




import {getAllBooks, getSingleBook,editBook } from '../controllers/books'


router.route('/').get(getAllBooks)
router.route('/:id').get(getSingleBook)
router.route('/:id').patch(jsonParser,editBook)

module.exports = router ;