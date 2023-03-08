
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Book from "../components/Book/Book";
import { Books } from "../constants/MOCK_DATA";


interface Book{
    _id:string,
    imageUrl:string,
    name:string,
    author:string,
    price:number,
    descriptin:string,
    format:string,
    rating:number,
    amount:number

}
interface Books{
    books:Book[]
}
const initialState:Books={
    books:[]
}

export const BookSlice= createSlice({
    name:'Books',
    initialState,
    reducers:{
        addBook:(state, action:PayloadAction<Book>)=>{
            
            let tempo=state.books.find((b)=>b._id === action.payload._id)
        if(tempo){
            let tempcard=state.books.map((b)=>{
                if(b._id === action.payload._id){
                  
                     return {...b, amount:Number(b.amount)+1}
                }else{
                    return {...b}
                }
               
         })
         state.books=tempcard
        }
        else{
            state.books.push({...action.payload, amount:1})
        }
        console.log(action.payload.amount)

        },
         addNewAmount:(state, action:PayloadAction<any>)=>{
            state.books.forEach(function(item, i) { if (item._id == action.payload._id) state.books[i] =action.payload; });

              },
              deletItem:(state, action:PayloadAction<any>)=>{
               const tempCard= state.books.filter((item)=>{
                return item._id !== action.payload._id
               })
               state.books=tempCard
     
                   },
    },
  
})

export const {addBook, addNewAmount, deletItem} =BookSlice.actions
export default BookSlice.reducer