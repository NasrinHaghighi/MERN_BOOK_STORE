
const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()

import {addTocart, removeItem, getCart, updateAmount } from '../controllers/cart'






router.route('/:userId').post(jsonParser,addTocart)

router.route('/:userId').delete(jsonParser, removeItem )
router.route('/:userId').patch(jsonParser,updateAmount)

router.route('/:userId').get( getCart )

module.exports = router ;