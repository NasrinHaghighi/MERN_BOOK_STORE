const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()

import {addToWhishList} from '../controllers/wishlist'






router.route('/:userId').post(jsonParser,addToWhishList)

//router.route('/:userId').delete(jsonParser, removeItem )


module.exports = router ;