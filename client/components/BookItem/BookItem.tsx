import React, {useEffect, useState}from 'react'
import {BookItemContainer,Tit,Bottom, MovingContent, Auth, Price, Add, Btn, Favoraite} from './styles'
import { bookType } from '../../types/bookType'
import {Images} from '../../helpers/Image'
import Link from 'next/link'
import Star from '../Book/Star/Star'
import { addBook} from '../../features/bookSlice'
import { useAppDispatch ,useAppSelector} from '../../redux/hooks'
import {addToFavoraiteList} from '../../features/favoraiteListSlice'
import PriceBydiscont from './PriceBydiscont/PriceBydiscont'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
//import AddCardAlert from '../Books/Alerts/AddCardAlert'
import useFetchAddToCard from '../../hooks/useFetchAddToCard'

interface ItemProps{
    item:bookType
}





function BookItem({item}:ItemProps) {
  //console.log(item)
const userId=useAppSelector((state)=>state.user.userId)

const dispatch=useAppDispatch()

const {addToCardHandel} =useFetchAddToCard({item})

  const addToFavoraite=async(e:any)=>{
    e.stopPropagation()
    if(!userId){
    toast.error('Please login to add item to wishlist')
    }else{
    dispatch(addToFavoraiteList(item))
     try{
         let res = await axios.post(`http://localhost:4000/api/v1/wishlist/${userId}`, { productId: item._id })
           
        // console.log(res)
       }catch(error){}
    }
  }
useEffect(() => {
 
}, [item])


  return (
    <>
   
    <BookItemContainer>
    
       <Link href={`/books/${item._id}`} passHref>
       
        <Images src={item.imageUrl} width={220} height={329} alt="book" />
      

   
           <Bottom>
           <MovingContent>
          <Tit>{item.name.length<19 ? item.name : item.name.substring(0,19)}</Tit>
         <Auth>{item.author}</Auth> 


       <Price>
        {item.discont ?
         <PriceBydiscont price={item.price} discont={item.discont}/> 
         : 
         `${item.price} €`}
         <Star star={item.rating}/>
         </Price>
     
       
       </MovingContent>
      
       </Bottom>
      
       </Link>
       <Btn>
       <Add onClick={() => addToCardHandel(item)}>Add to card</Add>
       <Favoraite onClick={(e)=>addToFavoraite(e)}>Wishlist</Favoraite>
       </Btn>
    </BookItemContainer>
    </>
  )
 
}

export default BookItem


//  const addToCardHandel=async(e:any)=>{
//      e.stopPropagation()
//    if(!userId){
//    toast.error('Please login to add item to cart')
//    }else{
   
//     dispatch(addBook(item))
   
//     try{
//         let res = await axios.post(`http://localhost:4000/api/v1/cart/${userId}`, { productId: item._id })
          
//         console.log(res)
//       }catch(error){}
//    }
   
        
//   }



