import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props{
    limitNumber:number | undefined
 }
const initialState:Props ={
    limitNumber:10
}

export const limitNumberSlice= createSlice({
    name:'LimitNumber',
    initialState,
    reducers:{
        limitNumberBy:(state, action:PayloadAction<number>)=>{
            console.log(action.payload)
         state.limitNumber=action.payload
        },
 
    }
})

export const {limitNumberBy} =limitNumberSlice.actions
export default limitNumberSlice.reducer