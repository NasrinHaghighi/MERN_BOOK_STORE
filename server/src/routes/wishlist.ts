const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()

import {addToWishList,getWishlistOfuser} from '../controllers/wishlist'






router.route('/:userId').post(jsonParser,addToWishList)

router.route('/:userId').get(jsonParser, getWishlistOfuser )


module.exports = router ;