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
require('./db/connect');
//async error
require('express-async-errors');
const app = (0, express_1.default)();
var cors = require('cors');
app.use(cors({}));
const authenticateUser = require('./middleware/authentication');
const connectDB = require('./db/connect');
const booksRouter = require('./routes/books');
const authRouter = require('./routes/auth');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
app.get('/', (req, res) => {
    res.json('helo0000000000000000000o');
});
app.use('/api/v1/books', booksRouter);
app.use('/api/v1/auth', authRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);
app.use(express_1.default.static('./public'));
app.use('/images', express_1.default.static('images'));
app.use(bodyParser.json());
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
