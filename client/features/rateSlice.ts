import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props{
   rate:number
 }

const initialState:Props={
    rate:2
}

export const RateFilter= createSlice({
    name:'Rate',
    initialState,
    reducers:{
        selectedRate:(state, action:PayloadAction<any>)=>{
           
         state.rate=action.payload
        },
        resetRate:(state)=>{
           
            state.rate=2
           },
    
 
    }
})

export const {selectedRate, resetRate} =RateFilter.actions
export default RateFilter.reducer