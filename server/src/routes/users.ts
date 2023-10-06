const express=require('express')
const router = express.Router();

import {getAllusers} from '../controllers/users'


router.route('/').get(getAllusers)


module.exports = router ;