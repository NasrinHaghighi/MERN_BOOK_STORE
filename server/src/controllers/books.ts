import { type } from "os"
import { features } from "process"

const Books =require('../models/books')


export const getAllBooks =async (req: any, res: any) =>{

    const {ebook, publisher, name, sort, fields, numericFilters, category, language,format} =req.query
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
    if(publisher){
        queryObject.publisher = publisher
    }
    if(name){
        queryObject.name = { $regex: name, $options: '<options>' }
    }
    if(format){
        queryObject.format = format;
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




