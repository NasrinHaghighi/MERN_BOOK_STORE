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
exports.getSingleBook = exports.getAllBooks = void 0;
const Books = require('../models/books');
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ebook, publisher, name, sort, fields, numericFilters, category, language, format } = req.query;
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
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-');
            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) };
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
    const limit = Number(req.query.limit) || 20;
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
            return res.status(404).json({ msg: `no task by id:${bookId}` });
        }
        res.status(200).json({ book });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.getSingleBook = getSingleBook;