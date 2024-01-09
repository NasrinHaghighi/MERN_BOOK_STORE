"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dionw7l06',
    api_key: '454275819935523',
    api_secret: 'JgLyP_FxKHrpvdcLGbs6IAC84t4',
});
require('./db/connect');
//async error
require('express-async-errors');
const path = require('path');
const app = (0, express_1.default)();
var cors = require('cors');
app.use(cors(
//   {
//   origin:["https://book-store-app-henna.vercel.app", "https://res.cloudinary.com"], 
//   methods:["POST", "GET",  "DELETE", "PATCH"],
//   credential:true
// }
));
const authenticateUser = require('./middleware/authentication');
const connectDB = require('./db/connect');
const booksRouter = require('./routes/books');
const authRouter = require('./routes/auth');
const cartRouter = require('./routes/cart');
const usersRouter = require('./routes/users');
const userOrderRouter = require('./routes/userOrder');
const dashboardRouter = require('./routes/dashboard');
const orderRouter = require('./routes/orders');
const whishRouter = require('./routes/whishlist');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const { authPageMiddelwear } = require('./middleware/authPage');
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(cookieParser());
app.get('/api/v1', (req, res) => {
    console.log(req.cookies);
    res.json('helo0000000000000000000o');
});
app.use(fileUpload({ useTempFiles: true }));
app.use('/api/v1/books', booksRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/userOrder', userOrderRouter);
app.use('/api/v1/cart', cartRouter);
app.use('/api/v1/whishlist', whishRouter);
//app.use('/api/v1/dashboard', authPageMiddelwear('admin'),dashboardRouter)
app.use(notFoundMiddleware);
app.use(errorMiddleware);
//app.use(express.static('dist/public'))
app.use('/uploads', express_1.default.static(path.join(__dirname, 'dist/public/uploads')));
//app.use('/images', express.static('images'));
const port = process.env.PORT || 4000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // connectDB
        yield connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening port ${port}...`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
