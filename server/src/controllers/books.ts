import { type } from "os"
import { features } from "process"

const Books =require('../models/books')


export const getAllBooks =async (req: any, res: any) =>{

    const {ebook, publisher, name, sort, fields, numericFilters, category, language,format, role} =req.query
    const queryObject :any={}
    if(ebook){
        queryObject.ebook= ebook === 'true' ? true :false
    }
    if(category){
        queryObject.category= category
    }
    if(language){
        queryObject.language= language
    }
  
    if(publisher){
        queryObject.publisher = publisher
    }
    if(name){
        queryObject.name = { $regex: name, $options: '<options>' }
    }
    if(format){
        queryObject.format = format;
    }
    if(role){
        queryObject.role = role;
    }
    if(numericFilters){
        const operatorMap: any = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
          };
          const regEx = /\b(<|>|>=|=|<|<=)\b/g;
          let filters = numericFilters.replace(regEx, (match: string | number) => `-${operatorMap[match]}-` );
          const options = ['price', 'rating'];
          filters = filters.split(',').forEach((item: { split: (arg0: string) => [any, any, any] }) => {
            const [field, operator, value] = item.split('-');
            if (options.includes(field)) {
              queryObject[field] = { [operator]: Number(value) };
            }
          });
    }
    let result= Books.find(queryObject)
    if(sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
    else{
        result=result.sort('createdAt')
    }
    if(fields){
        const feildList = fields.split(',').join(' ')
        result = result.select(feildList)
    }
    const page=Number(req.query.page) || 1
    const limit=Number(req.query.limit) || 20
    const skip= (page-1) * limit

     result=result.skip(skip).limit(limit)
    let books= await result
    res.status(200).json({books, nbHits:books.length})
}
export const getSingleBook =async (req: any, res: any) =>{
    try{
        const {id:bookId}=req.params
        const book =await Books.findOne({_id:bookId})
       
        if(!book){
            return res.status(404).json({msg:`no book by id:${bookId}`})
        }
        res.status(200).json({book})
    }catch(error){
        res.status(500).json({msg : error})
    }
}
/***edit book */
export const editBook = async (req: any, res: any) => {
    try {
      const { id: productId } = req.params;
      const stock = req.body;
      const discont=req.body
//console.log(stock, discont)
      let updateData;
 
if(stock ){
    updateData = stock;
}
if(discont){
    updateData = discont;
    }

    
     
      const book = await Books.findOneAndUpdate({ _id: productId }, updateData ,{ new: true });
    // console.log(book)
      if (!book) {
        return res.status(404).json({ msg: `No order found with ID: ${productId}` });
      }
  
      res.status(200).json({ book });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };
/***delete book *********************/
  export const deleteBook = async (req: any, res: any) => {
    try {
        const { id: bookId } = req.params;

        const book = await Books.findOneAndDelete({ _id: bookId });

        if (!book) {
            return res.status(404).json({ msg: `No book found with ID: ${bookId}` });
        }

        res.status(200).json({ msg: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const createBook =async (req:any , res:any) =>{
    console.log(req.body)
    const newBook = await Books.create(req.body.newbook);
    res.status(201).json({ book: newBook });
}




