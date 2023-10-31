import React,{useState} from 'react'
import {BookItem2Container, InfoContainer, ShowMoreBtn, Description, } from './styles'
import {Tit, Auth, Price, Add,Favoraite} from '../BookItem/styles'
import { bookType } from '../../types/bookType'
import Link from 'next/link'
import {Images} from '../../helpers/Image'
import Star from '../Book/Star/Star'
import { addBook} from '../../features/bookSlice'
import { useAppDispatch } from '../../redux/hooks'
import {addToFavoraiteList} from '../../features/favoraiteListSlice'
import PriceBydiscont from '../BookItem/PriceBydiscont/PriceBydiscont'






interface ItemProps{
    item:bookType
}
function BookItem2({item}:ItemProps) {
  console.log(item)
    const [showMore, setShowMore] = useState(false);

    const dispatch=useAppDispatch()
    const handelShowMore=(e:any)=>{
        e.preventDefault();
        setShowMore(!showMore)
     
    }
    const addToCardHandel=(e:any)=>{
       e.stopPropagation()
      dispatch(addBook(item))
  
    }
    const addToFavoraite=(e:any)=>{
      e.stopPropagation()
     dispatch(addToFavoraiteList(item))
    }
  return (
  

    <BookItem2Container>
      <Link href={`/books/${item._id}`}>
         <Images src={item.imageUrl} width={220} height={329}    alt="book"/>
         </Link>
      <InfoContainer>
      
      <Tit>{item.name.length<30 ? item.name : item.name.substring(0,30)}</Tit>
         <Auth>{item.author}</Auth>  
       
       <Description>
     {item.description?.length<200 ?item.description : showMore ?item.description :item.description.substring(0,200)}...
      
      <ShowMoreBtn className="btn" onClick={handelShowMore}>{showMore ? 'Show less' : 'Show more'}</ShowMoreBtn>
      </Description> 
      
      <Price>
    
        <span> {item.discont ?
         <PriceBydiscont price={item.price} discont={item.discont}/> 
         : 
         `${item.price} $`}</span>
        <Star star={item.rating}/>
        <Add onClick={(e)=>addToCardHandel(e)}>Add to card</Add>
       <Favoraite onClick={(e)=>addToFavoraite(e)}>Wishlist</Favoraite>
      </Price>
       </InfoContainer>
       
    </BookItem2Container>
    
  )
}

export default BookItem2