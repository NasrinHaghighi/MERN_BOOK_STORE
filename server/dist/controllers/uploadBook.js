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
exports.uploadbookImage = exports.uploadbookImageLocal = void 0;
const Books = require('../models/books');
const path = require('path');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const uploadbookImageLocal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookImage = req.files.imageUrl;
    console.log(bookImage);
    const imagePath = path.join(__dirname, '../public/uploads/' + `${bookImage.name}`);
    try {
        yield bookImage.mv(imagePath);
        console.log('File moved successfully.');
    }
    catch (err) {
        console.error('Error moving file:', err);
    }
    console.log("I am going to send this pic:");
    // Store it inside of your ImageURL filed
    return res.json({ imageUrl: { src: `/uploads/${bookImage.name}` } });
});
exports.uploadbookImageLocal = uploadbookImageLocal;
const uploadbookImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cloudinary.uploader.upload(req.files.imageUrl.tempFilePath, {
        use_filename: true, folder: 'book'
    });
    return res.json({ imageUrl: { src: result.secure_url } });
});
exports.uploadbookImage = uploadbookImage;
