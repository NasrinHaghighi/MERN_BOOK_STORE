const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()
import {getAllOrders, getSingleOrder, updateOrder } from '../controllers/orders'


router.route('/').get(getAllOrders)
router.route('/:id').get(getSingleOrder)
router.route('/:id').patch(jsonParser,updateOrder)


module.exports = router ;