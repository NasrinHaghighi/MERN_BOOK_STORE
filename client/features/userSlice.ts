import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookType } from "../types/bookType";


interface Book{
    _id:string,
    imageUrl:string,
    name:string,
    author:string,
    price:number,
    description:string,
    format:string,
    rating:number
    amount:number, 
    stock?:string,
    discont?:number
}
interface Props{
    signinUser:string,
    token:string,
    userRole:string,
     userId:string,
     userbookList:Book[] | null; 
 }
const initialState:Props ={
    signinUser:'', token:'', userRole:'', userId:'', userbookList:[] 
}

export const UserSlice= createSlice({
    name:'User',
    initialState,
    reducers:{
        userLogin:(state, action:PayloadAction<Props>)=>{
        state.signinUser=action.payload.signinUser
        state.token=action.payload.token
        state.userRole=action.payload.userRole
        state.userId=action.payload.userId
      
        state.userbookList =action.payload.userbookList
        },
       userLogout:(state)=>{
        state.signinUser = '';
        state.token = '';
        state.userRole = '';
        state.userId = '';
        state.userbookList=[]
            },
        
 
    }
})

export const {userLogin, userLogout} =UserSlice.actions
export default UserSlice.reducer