
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Book from "../components/Book/Book";
import { Books } from "../constants/MOCK_DATA";
import { startCase } from "lodash";


interface Book{
    _id:string,
    imageUrl:string,
    name:string,
    author:string,
    price:number,
    description:string,
    format:string,
    rating:number,
    amount:number

}
interface Books{
    books:Book[] ,
    alert:boolean,
    message:string
}


const initialState:Books= {
   books: [],
   alert:false,
   message:' '
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
                    state.alert=true
                 
                    state.message=`${b.name.length>20 ?b.name.substring(0,20): b.name} + is aleady exist in your to your card`
                 
                  return {...b, amount:Number(b.amount)+1}
                }else{
                   
                    return {...b}
                }
               
         })
         state.books=tempcard
        }
        else{
            state.alert=true
           
            state.message=`${action.payload.name.length>20 ?action.payload.name.substring(0,20) : action.payload.name} + added to your card`
           
            state.books.push({...action.payload, amount:1})
        }
        //console.log(action.payload.amount)

        },
         addNewAmount:(state, action:PayloadAction<any>)=>{
            state.books.forEach(function(item, i) { if (item._id == action.payload._id) state.books[i] =action.payload; });
          
         
 },
              deletItem:(state, action:PayloadAction<any>)=>{
               const tempCard= state.books.filter((item)=>{
                return item._id !== action.payload._id
               })
               state.books=tempCard
               localStorage.setItem('CardBooks', JSON.stringify(state.books.map((item)=>item)))         
                   },
                backtofalseAlert:(state)=>{
                state.alert=false
          
         },
        removeAllitem:(state)=>{
            state.books=[]
        },
        updateUserBook:(state,action:PayloadAction<any>) =>{
            //console.log(action.payload)
           
         const temp= action.payload.map((item:any)=>{
            state.books = action.payload.map((item: any) => ({
                ...item.book,
                amount: item.amount
              }));
          })
       
        }
           

    },

   
})

export const {addBook, addNewAmount, deletItem, backtofalseAlert, removeAllitem, updateUserBook} =BookSlice.actions
export default BookSlice.reducer




