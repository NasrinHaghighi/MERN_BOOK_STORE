

import express,{Application, Request, Response} from 'express'
require("dotenv").config();
const bodyParser=require('body-parser')
const fileUpload =require('express-fileupload')
const cloudinary =require('cloudinary').v2
cloudinary.config({
  cloud_name:'dionw7l06',
  api_key:'454275819935523',
  api_secret:'JgLyP_FxKHrpvdcLGbs6IAC84t4',
})
require('./db/connect')
//async error
require('express-async-errors')
const path =require('path')
const app:Application =express()

var cors = require('cors');
 app.use(cors(
  //{
//   origin:["https://mern-book-store-client-five.vercel.app"], 
//   methods:["POST", "GET"],
//   credential:true
// }
));


const authenticateUser =require ('./middleware/authentication')
const connectDB =require('./db/connect')
const booksRouter=require('./routes/books')
const authRouter =require('./routes/auth')
const usersRouter =require('./routes/users')
const dashboardRouter =require('./routes/dashboard')
const orderRouter =require('./routes/orders')
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const {authPageMiddelwear} =require('./middleware/authPage')
const cookieParser =require('cookie-parser')
app.use(bodyParser.json())
app.use(cookieParser())
 app.get('/api/v1',  (req:Request, res:Response)=>{
  console.log(req.cookies)
 res.json('helo0000000000000000000o')
 })
 
 app.use(fileUpload({useTempFiles:true}))
app.use('/api/v1/books', booksRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/orders', orderRouter)

//app.use('/api/v1/dashboard', authPageMiddelwear('admin'),dashboardRouter)
app.use(notFoundMiddleware)
app.use(errorMiddleware)

//app.use(express.static('dist/public'))
app.use('/uploads', express.static(path.join(__dirname, 'dist/public/uploads')));
//app.use('/images', express.static('images'));


const port = process.env.PORT || 4000;
const start = async () => {
  try {
    // connectDB
   await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();