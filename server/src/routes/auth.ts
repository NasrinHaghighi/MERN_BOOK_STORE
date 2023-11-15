 
 
 const express=require('express')
var bodyParser =require('body-parser')

const router =express.Router()
var jsonParser=bodyParser.json()

const {login, register, updateUserByBook,getOneUser, logout} =require('../controllers/auth')

router.post('/register',jsonParser,register)
router.post('/login',jsonParser,login)
router.get('/logout',logout)
router.post('/updateuser',jsonParser,updateUserByBook)
router.route('/:id').get(getOneUser)
module.exports=router