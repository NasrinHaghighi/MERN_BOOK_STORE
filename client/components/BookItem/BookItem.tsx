import React, {useState}from 'react'
import {BookItemContainer,Tit,Bottom, MovingContent, Auth, Price, Add, Btn, Favoraite} from './styles'
import { bookType } from '../../types/bookType'
import {Images} from '../../helpers/Image'
import Link from 'next/link'
import Star from '../Book/Star/Star'
import { addBook} from '../../features/bookSlice'
import { useAppDispatch } from '../../redux/hooks'


interface ItemProps{
    item:bookType
}
function BookItem({item}:ItemProps) {


 const dispatch=useAppDispatch()

 const addToCardHandel=(e:any)=>{
    
    e.stopPropagation()
    dispatch(addBook(item))

  }
  const addToFavoraite=(e:any)=>{
    e.stopPropagation()
    console.log('add to fffff')
  }
  return (
    <BookItemContainer>
       <Link href={`/books/${item._id}`}>
           <Images src={item.imageUrl} width={220} height={329}   alt="book"/>
           <Bottom>
           <MovingContent>
          <Tit>{item.name.length<22 ? item.name : item.name.substring(0,22)}</Tit>
         <Auth>{item.author}</Auth> 


       <Price>${item.price} <Star star={item.rating}/></Price>
     
       
       </MovingContent>
      
       </Bottom>
      
       </Link>
       <Btn>
       <Add onClick={(e)=>addToCardHandel(e)}>ADD TO CARD</Add>
       <Favoraite onClick={(e)=>addToFavoraite(e)}>ggg</Favoraite>
       </Btn>
    </BookItemContainer>
  )
}

export default BookItem