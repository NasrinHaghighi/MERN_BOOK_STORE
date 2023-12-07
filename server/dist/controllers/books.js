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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = exports.deleteBook = exports.editBook = exports.getSingleBook = exports.getAllBooks = void 0;
const Books = require('../models/books');
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ebook, publisher, name, sort, fields, numericFilters, category, language, format, role } = req.query;
    const queryObject = {};
    if (ebook) {
        queryObject.ebook = ebook === 'true' ? true : false;
    }
    if (category) {
        queryObject.category = category;
    }
    if (language) {
        queryObject.language = language;
    }
    if (publisher) {
        queryObject.publisher = publisher;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: '<options>' };
    }
    if (format) {
        queryObject.format = format;
    }
    if (role) {
        queryObject.role = role;
    }
    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        };
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);
        /**/
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-');
            console.log(field, operator, value);
            if (options.includes(field)) {
                if (operator === '$eq') {
                    queryObject[field] = { [operator]: Number(value) };
                }
                else if (operator === '$gt' || operator === '$gte' || operator === '$lt' || operator === '$lte') {
                    if (!queryObject[field]) {
                        queryObject[field] = {};
                    }
                    queryObject[field][operator] = Number(value);
                }
            }
        });
    }
    let result = Books.find(queryObject);
    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    }
    else {
        result = result.sort('createdAt');
    }
    if (fields) {
        const feildList = fields.split(',').join(' ');
        result = result.select(feildList);
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 40;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);
    let books = yield result;
    res.status(200).json({ books, nbHits: books.length });
});
exports.getAllBooks = getAllBooks;
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: bookId } = req.params;
        const book = yield Books.findOne({ _id: bookId });
        if (!book) {
            return res.status(404).json({ msg: `no book by id:${bookId}` });
        }
        res.status(200).json({ book });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.getSingleBook = getSingleBook;
/***edit book */
const editBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: productId } = req.params;
        const stock = req.body;
        const discont = req.body;
        //console.log(stock, discont)
        let updateData;
        if (stock) {
            updateData = stock;
        }
        if (discont) {
            updateData = discont;
        }
        const book = yield Books.findOneAndUpdate({ _id: productId }, updateData, { new: true });
        // console.log(book)
        if (!book) {
            return res.status(404).json({ msg: `No order found with ID: ${productId}` });
        }
        res.status(200).json({ book });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.editBook = editBook;
/***delete book *********************/
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: bookId } = req.params;
        const book = yield Books.findOneAndDelete({ _id: bookId });
        if (!book) {
            return res.status(404).json({ msg: `No book found with ID: ${bookId}` });
        }
        res.status(200).json({ msg: "Book deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.deleteBook = deleteBook;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req.body)
    const newBook = yield Books.create(req.body.newbook);
    res.status(201).json({ book: newBook });
});
exports.createBook = createBook;
