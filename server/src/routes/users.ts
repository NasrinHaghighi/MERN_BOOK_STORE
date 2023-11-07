const express=require('express')
const router = express.Router();
var bodyParser =require('body-parser')
var jsonParser=bodyParser.json()


import {getAllusers, createUserCard} from '../controllers/users'


router.route('/').get(getAllusers)
router.route('/:id').patch(jsonParser,createUserCard)

module.exports = router ;