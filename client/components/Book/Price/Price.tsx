import React from 'react'
import {PriceConatiner, Top,Tit,Value , Middel, Text, Bottom, AddToCard,AddFavoraite} from './styles'
import {TbTruckDelivery} from 'react-icons/tb'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { bookType } from '../../../types/bookType';
import {addBook} from '../../../features/bookSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

interface Book{
    bookItem:bookType
}


function Price({bookItem}:Book) {
const dispatch=useAppDispatch()
const userId=useAppSelector((state)=>state.user.userId)


    const addToCardHandel=async(e:any)=>{
        e.stopPropagation()
        if(!userId){
        toast.error('Please login to add item to cart')
        }else{
         dispatch(addBook(bookItem))
         
         try{
             let res = await axios.post(`https://mern-book-store-api.vercel.app/api/v1/cart/${userId}`, { productId: bookItem._id })
               
             console.log(res)
           }catch(error){}
        }
        
             
    }
  return (
    <PriceConatiner>
        <Top>
        <Tit>Price :</Tit>
        <Value> {bookItem.price} €</Value></Top>
        <Middel>
            <Text><TbTruckDelivery />  Free delivery worldwide</Text>
            <Text><AiOutlineCheckCircle /> Price includes VAT/import taxes for EU delivery</Text>
            <Text> <AiOutlineCheckCircle /> Available. Expected delivery in 11-16 business days.</Text>
        </Middel>
        <Bottom>
            <AddToCard onClick={(e)=>addToCardHandel(e)}>
                <span>Add to card</span>
               </AddToCard>
            <AddFavoraite>Add to wishlist</AddFavoraite>

        </Bottom>
    </PriceConatiner>
  )
}

export default Price