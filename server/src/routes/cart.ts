
const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()

import {addTocart, removeItem } from '../controllers/cart'






router.route('/:userId').post(jsonParser,addTocart)

router.route('/:userId').delete(jsonParser, removeItem )

module.exports = router ;