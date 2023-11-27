import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState={
   address:{
    gender:'',
    fullName:'',
    address:'',
    city:'',
    country:'',
    phone:'',
    postalcode:'',
    shipMethod:'',
    state:''
   }
}

export const UserAddressInfoSlice= createSlice({
    name:'UserAddress',
    initialState,
    reducers:{
        updateUserAddress:(state, action:PayloadAction<any>)=>{
           state.address=action.payload
        },
       
    
 
    }
})

export const {updateUserAddress} =UserAddressInfoSlice.actions
export default UserAddressInfoSlice.reducer