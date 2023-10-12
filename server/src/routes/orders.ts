const express=require('express')
const router = express.Router();

import {getAllOrders, getSingleOrder } from '../controllers/orders'


router.route('/').get(getAllOrders)
router.route('/:id').get(getSingleOrder)

module.exports = router ;