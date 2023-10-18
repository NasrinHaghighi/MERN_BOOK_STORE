const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()




import {getAllBooks, getSingleBook,editBook, deleteBook } from '../controllers/books'


router.route('/').get(getAllBooks)
router.route('/:id').get(getSingleBook)
router.route('/:id').patch(jsonParser,editBook)
router.delete('/:id', deleteBook);
module.exports = router ;