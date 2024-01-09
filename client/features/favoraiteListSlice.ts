
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Book from "../components/Book/Book";
//import { Books } from "../constants/MOCK_DATA";


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
    favoraitelist:Book[],
    favoraiteAlert:boolean,
    favoraiteMessage:string
}
const initialState:Books={
    favoraitelist:[],
   favoraiteAlert:false,
   favoraiteMessage:' '
}

export const FavoraiteListSlice= createSlice({
    name:'FavoraiteList',
    initialState,
    reducers:{
        addToFavoraiteList:(state, action:PayloadAction<Book>)=>{
            console.log('action' , action.payload)
            console.log('state.favoraitelist' , state.favoraitelist.length)
        if(state.favoraitelist.length>=1){
            const existingItemIndex = state.favoraitelist.findIndex(
                (item) => item._id === action.payload._id);
                if (existingItemIndex !== -1) {
                    state.favoraiteAlert = true;
                    state.favoraiteMessage=`${action.payload.name.length>20 ?action.payload.name.substring(0,20) : action.payload.name} + is aleady exsit`
                  
                
                }else{
                    state.favoraiteAlert=true  
                    state.favoraiteMessage=`${action.payload.name.length>20 ?action.payload.name.substring(0,20) : action.payload.name} + added to wishlist`
                    state.favoraitelist.push({...action.payload})
                }
        }else{
            state.favoraiteAlert=true  
            state.favoraiteMessage=`${action.payload.name.length>20 ?action.payload.name.substring(0,20) : action.payload.name} + added to wishlist`
            state.favoraitelist.push({...action.payload})
        }   
       
        

        },
        backtofalseFavoraiteAlert:(state)=>{
            state.favoraiteAlert=false
   
                 },
  
    },
  
})

export const {addToFavoraiteList, backtofalseFavoraiteAlert} =FavoraiteListSlice.actions
export default FavoraiteListSlice.reducer



// if(tempo){
//     let tempcard=state.favoraitelist.map((b)=>{
//         if(b._id === action.payload._id){
//             state.favoraiteAlert=true
//            state.favoraiteMessage=`${b.name.length>20 ?b.name.substring(0,20): b.name} + is aleady exist in your wishlist`
         
//           return {...b}
//         }else{
           
//             return {...b}
//         }
//       })
//  state.favoraitelist=tempcard
// }
// else{
//     state.favoraiteAlert=true
   
//     state.favoraiteMessage=`${action.payload.name.length>20 ?action.payload.name.substring(0,20) : action.payload.name} + added to wishlist`
   
//     state.favoraitelist.push({...action.payload})
// }