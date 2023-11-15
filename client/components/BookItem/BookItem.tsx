import React, {useState}from 'react'
import {BookItemContainer,Tit,Bottom, MovingContent, Auth, Price, Add, Btn, Favoraite} from './styles'
import { bookType } from '../../types/bookType'
import {Images} from '../../helpers/Image'
import Link from 'next/link'
import Star from '../Book/Star/Star'
import { addBook} from '../../features/bookSlice'
import { useAppDispatch ,useAppSelector} from '../../redux/hooks'
import {addToFavoraiteList} from '../../features/favoraiteListSlice'
import PriceBydiscont from './PriceBydiscont/PriceBydiscont'

import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ItemProps{
    item:bookType
}





function BookItem({item}:ItemProps) {
const userId=useAppSelector((state)=>state.user.userId)

const isExternalImage = item.imageUrl.startsWith('http');



 const dispatch=useAppDispatch()

 const addToCardHandel=async(e:any)=>{
    
    e.stopPropagation()
    //dispatch(addBook(item))
    if(!userId){
      
      alert('please do login...')
     }else{
      try{
       let res = await axios.post("http://localhost:4000/api/v1/auth/updateuser", {userId, item })
       //dispatch(addBook(item))
      
       }catch(error){}
     }
    
    
  }

  const addToFavoraite=(e:any)=>{
    e.stopPropagation()
   dispatch(addToFavoraiteList(item))
  }
  return (
    <>
   
    <BookItemContainer>
    
       <Link href={`/books/${item._id}`}>
       {isExternalImage ? (
        <Images src={item.imageUrl} width={220} height={329} alt="book" />
      ) : (
        <Images src={`${item.imageUrl}`} width={220} height={329} alt="book" />
      )}

    {/* {item.imageUrl ? 
           <Images src={`dist/public/${item.imageUrl}`} width={220} height={329}   alt="book"/> : <Images src={Default} width={220} height={329}   alt="book"/>}  */}
           <Bottom>
           <MovingContent>
          <Tit>{item.name.length<22 ? item.name : item.name.substring(0,22)}</Tit>
         <Auth>{item.author}</Auth> 


       <Price>
        {item.discont ?
         <PriceBydiscont price={item.price} discont={item.discont}/> 
         : 
         `${item.price} $`}
         <Star star={item.rating}/>
         </Price>
     
       
       </MovingContent>
      
       </Bottom>
      
       </Link>
       <Btn>
       <Add onClick={(e)=>addToCardHandel(e)}>Add to card</Add>
       <Favoraite onClick={(e)=>addToFavoraite(e)}>Wishlist</Favoraite>
       </Btn>
    </BookItemContainer>
    </>
  )
 
}

export default BookItem