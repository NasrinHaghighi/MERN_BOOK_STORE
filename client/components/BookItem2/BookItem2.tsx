import React,{useState} from 'react'
import {BookItem2Container, InfoContainer, ShowMoreBtn, Description, Add} from './styles'
import {Tit, Auth, Price} from '../BookItem/styles'
import { bookType } from '../../types/bookType'
import Link from 'next/link'
import {Images} from '../../helpers/Image'
import Star from '../Book/Star/Star'

interface ItemProps{
    item:bookType
}
function BookItem2({item}:ItemProps) {
    const [showMore, setShowMore] = useState(false);

    const handelShowMore=(e:any)=>{
        e.preventDefault();
        setShowMore(!showMore)
     
    }
  return (
    <Link href={`/books/${item._id}`}>

    <BookItem2Container>
         <Images src={item.imageUrl} width={220} height={329}    alt="book"/>
      <InfoContainer>
      <Tit>{item.name.length<30 ? item.name : item.name.substring(0,30)}</Tit>
         <Auth>{item.author}</Auth>  
       
      <Description>
     {item.descriptin.length <100 ?item.descriptin : showMore ?item.descriptin :item.descriptin.substring(0,200)}...
      
      <ShowMoreBtn className="btn" onClick={handelShowMore}>{showMore ? 'Show less' : 'Show more'}</ShowMoreBtn>
      </Description>
      <Price>
        <span>{item.price} €</span>
        <Star star={item.rating}/>
      <Add>Add to card</Add>
      </Price>
       </InfoContainer>
       
    </BookItem2Container>
    </Link>
  )
}

export default BookItem2