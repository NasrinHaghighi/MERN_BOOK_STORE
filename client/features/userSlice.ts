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
     
 }
const initialState:Props ={
    signinUser:'',userRole:'', userId:'', token:''
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
     
        },
       userLogout:(state)=>{
        state.signinUser = '';
       state.token='';
        state.userRole = '';
        state.userId = '';
     
            },
        
 
    }
})

export const {userLogin, userLogout} =UserSlice.actions
export default UserSlice.reducer