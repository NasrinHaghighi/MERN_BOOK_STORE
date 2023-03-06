import React from 'react'
import {BookItemContainer,Tit,Bottom, MovingContent, Auth, Price, Add} from './styles'
import { bookType } from '../../types/bookType'
import {Images} from '../../helpers/Image'
import Link from 'next/link'

interface ItemProps{
    item:bookType
}
function BookItem({item}:ItemProps) {
  return (
    <BookItemContainer>
       <Link href={`/books/${item._id}`}>
           <Images src={item.imageUrl} width={220} height={329}   alt="book"/>
           <Bottom>
           <MovingContent>
          <Tit>{item.name.length<30 ? item.name : item.name.substring(0,30)}</Tit>
         <Auth>{item.author}</Auth>  
       <Price>${item.price}</Price>
     
       
       </MovingContent>
       <Add>ADD TO CARD</Add>
       </Bottom>
      
       </Link>
       
    </BookItemContainer>
  )
}

export default BookItem