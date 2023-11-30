const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()
import {createOrder , allOrder, getOneorder,updateOrder} from '../controllers/userOrder'


router.route('/').get(allOrder)
router.route('/').post(jsonParser, createOrder).get(allOrder)
router.route('/:orderId').get(getOneorder)
router.route('/:orderId').patch(jsonParser,updateOrder)
module.exports = router ;