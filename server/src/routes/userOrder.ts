const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()
import {createOrder , allOrder} from '../controllers/userOrder'


router.route('/').get(allOrder)
router.route('/').post(jsonParser, createOrder).get(allOrder)

module.exports = router ;