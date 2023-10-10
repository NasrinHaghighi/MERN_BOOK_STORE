const express=require('express')
const router = express.Router();

import {dashboard} from '../controllers/dashboard'


router.route('/').get(dashboard)


module.exports = router ;