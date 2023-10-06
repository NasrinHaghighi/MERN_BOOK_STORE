import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props{
    signinUser:string,
    token:string,userRole:string
 }
const initialState:Props ={
    signinUser:'', token:'', userRole:''
}

export const UserSlice= createSlice({
    name:'User',
    initialState,
    reducers:{
        userLogin:(state, action:PayloadAction<Props>)=>{
        state.signinUser=action.payload.signinUser
        state.token=action.payload.token
        state.userRole=action.payload.userRole
        },
       userLogout:(state)=>{
        state.signinUser = '';
        state.token = '';
        state.token = '';
            },
        
 
    }
})

export const {userLogin, userLogout} =UserSlice.actions
export default UserSlice.reducer