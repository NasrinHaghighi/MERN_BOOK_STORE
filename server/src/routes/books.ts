const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()




import {getAllBooks, getSingleBook,editBook, deleteBook, createBook } from '../controllers/books'
import { uploadbookImage } from '../controllers/uploadBook';

router.route('/').get(getAllBooks)
router.route('/:id').get(getSingleBook)
router.route('/:id').patch(jsonParser,editBook)
router.delete('/:id', deleteBook);

router.route('/').post(jsonParser, createBook).get(getAllBooks)
router.route('/uploads').post(uploadbookImage)

module.exports = router ;