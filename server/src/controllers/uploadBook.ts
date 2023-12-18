const Books =require('../models/books')
const path =require('path')
const fs = require('fs');
const cloudinary =require('cloudinary').v2



export const uploadbookImageLocal =async (req:any , res:any) =>{
   const bookImage =req.files.imageUrl
   console.log(bookImage);
   const imagePath =path.join(__dirname, '../public/uploads/'+ `${bookImage.name}`)


   try {
    await bookImage.mv(imagePath);
    console.log('File moved successfully.');
  } catch (err) {
    console.error('Error moving file:', err);
  }
  console.log("I am going to send this pic:");
 

  // Store it inside of your ImageURL filed

    return res.json({imageUrl:{src:`/uploads/${bookImage.name}`}})
}

export const uploadbookImage =async (req:any , res:any) =>{
const result =await cloudinary.uploader.upload(req.files.imageUrl.tempFilePath, {
  use_filename:true, folder:'book'
})
return res.json({imageUrl:{src:result.secure_url}})
}