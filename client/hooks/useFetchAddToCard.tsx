import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { addBook} from '../features/bookSlice'
import { useAppDispatch ,useAppSelector} from '../redux/hooks'
import { ToastContainer, toast } from 'react-toastify';
import { bookType } from '../types/bookType';


interface Props{
  item:bookType
}

function useFetchAddToCard({item}:Props) {
  const userId=useAppSelector((state)=>state.user.userId)
const dispatch=useAppDispatch()




  const addToCardHandel=async(e:any)=>{
    //e.stopPropagation()
  if(!userId){
  toast.error('Please login to add item to cart')
  }else{
  
   dispatch(addBook(item))
  
   try{
       let res = await axios.post(`http://localhost:4000/api/v1/cart/${userId}`, { productId: item._id })
         
       console.log(res)
     }catch(error){}
  }
  
       
 }
  return (
    {addToCardHandel}
  )
}

export default useFetchAddToCard