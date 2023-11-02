

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props{
    dashboardSideStatus:boolean
 }
const initialState:Props ={
    dashboardSideStatus:false
}

export const CategorySlice= createSlice({
    name:'dashboardSideStatus',
    initialState,
    reducers:{
        dashboardSideStatus:(state)=>{
          state.dashboardSideStatus = !state.dashboardSideStatus
          //console.log(state.dashboardSideStatus)
        },
        closeDashboardSide:(state)=>{
            state.dashboardSideStatus=false
        }
     
   
 
    }
})

export const {dashboardSideStatus, closeDashboardSide} =CategorySlice.actions
export default CategorySlice.reducer