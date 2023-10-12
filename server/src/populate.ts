require('dotenv').config()

const connectDB =require('./db/connect')
const Books =require ('./models/books')
const jsonBooks =require('./data/books.json')

const Orders=require('./models/orders')
const jsonOrders=require('./data/order.json')

const connectionString='mongodb+srv://nasrin60:Wk1mCxwi0jjvFfsc@expressnode.phhwydj.mongodb.net/book-api?retryWrites=true&w=majority'


const start =async () =>{
    try{
        console.log('suuucse....')
        await connectDB(connectionString)
        await Books.deleteMany()
        await Books.create(jsonBooks)


         await Orders.deleteMany()
        await Orders.create(jsonOrders)
       
        process.exit(0)
        console.log('suuucse....')
    }catch (error){
console.log(error)
process.exit(1)
    }
}

start()