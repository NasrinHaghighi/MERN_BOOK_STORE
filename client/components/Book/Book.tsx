 import React ,{useEffect, useState} from 'react'
import {BoxConatiner,Container, ImageDiv,  AlertBox, SeeCardBtn, Page, BookDetail, BookTitle,BookFormat, BookAuthor,Description, } from './styles'
import { useRouter } from 'next/router'
import { fetchitem } from '../../utiles';
import { Images } from '../../helpers/Image'
import BookInfo from './BookInfo';
import BookAllInfo from './BookAllInfo/BookAllInfo';
import Link from 'next/link'
import axios from "axios";
import { bookType } from '../../types/bookType';
import Star from './Star/Star'
import Share from './Share/Share';
import Price from './Price/Price'

function Book() {
    const router = useRouter()
   const bookid=router.query.bookid
  const [bookItem, setBookItem] =useState<bookType>()

   useEffect(()=>{
    axios
    .get(`http://localhost:4000/api/v1/books/${bookid}`)
    .then(response =>setBookItem(response.data.book));
   },[])
   //console.log(bookItem)


  return (
    <BoxConatiner>
   
    {/* <AlertBox className={showAlert ? 'show' : ''}>
    
      <div>Book " <span>{item?.volumeInfo.title} </span>" added to yor card</div>
      <SeeCardBtn><Link href='/card'>View card</Link></SeeCardBtn>
     </AlertBox>  */}
     {bookItem &&
    <Container>
    
       <ImageDiv>
       <ul>
         <Page className='page1'></Page>
         <Page className='page2'></Page>
         <Page className='page3'></Page>
         <Page className='cover' bg={bookItem.imageUrl}></Page>
        </ul>
      </ImageDiv> 
      <BookDetail>
<BookTitle>{bookItem.name}</BookTitle>
<Star star={bookItem.rating}/>
<BookFormat>{bookItem.format}</BookFormat>
<BookAuthor>{bookItem.author}</BookAuthor>
<Share />
<Description>{bookItem.descriptin}</Description>

      </BookDetail>
     <Price bookItem={bookItem}/>
    
    </Container>}
    
    {/* <BookAllInfo item={item}/>  */}
    </BoxConatiner>
  )
}

export default Book


{/* <Images
width={450}
height={580}
src={bookItem.imageUrl}

alt="products"
/>  */}
