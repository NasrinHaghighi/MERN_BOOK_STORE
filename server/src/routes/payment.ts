const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()
import { stripe } from '../controllers/payment'



router.route('/').get(stripe)
// router.route('/:id').get(getSingleOrder)
// router.route('/:id').patch(jsonParser,updateOrder)
// router.route('/').post(jsonParser, createOrder).get(createOrder)

module.exports = router ;