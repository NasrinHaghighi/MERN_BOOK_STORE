import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props{
   searchTerm:string
 }

const initialState:Props={
    searchTerm:''
}

export const SearchFilter= createSlice({
    name:'Search',
    initialState,
    reducers:{
        searchTerm:(state, action:PayloadAction<any>)=>{
           
         state.searchTerm=action.payload
        },
 
    }
})

export const {searchTerm} =SearchFilter.actions
export default SearchFilter.reducer