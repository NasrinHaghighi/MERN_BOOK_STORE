import express,{Application, Request, Response} from 'express'
require("dotenv").config();
const bodyParser=require('body-parser')

require('./db/connect')
//async error
require('express-async-errors')
const app:Application =express()
var cors = require('cors');
app.use(cors({
  origin:["https://mern-book-store-client-five.vercel.app/"], 
  methods:["POST", "GET"],
  credential:true
}));
const authenticateUser =require ('./middleware/authentication')
const connectDB =require('./db/connect')
const booksRouter=require('./routes/books')
const authRouter =require('./routes/auth')
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

 app.get('/',  (req:Request, res:Response)=>{
 res.json('helo0000000000000000000o')
 })

app.use('/api/v1/books', booksRouter)
app.use('/api/v1/auth', authRouter)
app.use(notFoundMiddleware)
app.use(errorMiddleware)

app.use(express.static('./public'))
app.use('/images', express.static('images'));
app.use(bodyParser.json())

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