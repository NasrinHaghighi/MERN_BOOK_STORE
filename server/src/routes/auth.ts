 
 
 const express=require('express')
var bodyParser =require('body-parser')

const router =express.Router()
var jsonParser=bodyParser.json()

const {login, register} =require('../controllers/auth')

router.post('/register',jsonParser,register)
router.post('/login',jsonParser,login)

module.exports=router