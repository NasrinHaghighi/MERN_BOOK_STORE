const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()

import {addToWishList,getWishlistOfuser, removeFromWishlist} from '../controllers/wishlist'






router.route('/:userId').post(jsonParser,addToWishList)

router.route('/:userId').get(jsonParser, getWishlistOfuser )
router.route('/:userId').delete(jsonParser, removeFromWishlist )

module.exports = router ;