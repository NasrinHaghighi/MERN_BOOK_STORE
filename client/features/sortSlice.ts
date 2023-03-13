import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props{
   sort:string
 }

const initialState:Props={
    sort:''
}

export const sortFilter= createSlice({
    name:'Sort',
    initialState,
    reducers:{
        sortby:(state, action:PayloadAction<any>)=>{
          state.sort=action.payload
        },
        resetSortby:(state)=>{
          state.sort=''
        },
 
    }
})

export const {sortby, resetSortby} =sortFilter.actions
export default sortFilter.reducer