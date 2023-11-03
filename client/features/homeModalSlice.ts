

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props{
    homeModalStatus:boolean
 }
const initialState:Props ={
    homeModalStatus:false
}

export const homeModalSlice= createSlice({
    name:'homeModalStatus',
    initialState,
    reducers:{
        homeModalStatusRedux:(state)=>{
          state.homeModalStatus = !state.homeModalStatus
          //console.log(state.dashboardSideStatus)
        },
        closeModald:(state)=>{
            state.homeModalStatus=false
        }
     
   
 
    }
})

export const {homeModalStatusRedux, closeModald} =homeModalSlice.actions
export default homeModalSlice.reducer