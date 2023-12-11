import React ,{useEffect, useState} from 'react'
import {BoxConatiner,Container, ImageDiv,  AlertBox, SeeCardBtn, Page, BookDetail, BookTitle,BookFormat, BookAuthor,Description } from './styles'
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCardAlert from '../Books/Alerts/AddCardAlert';
import RelatedBook from './RelatedBook/RelatedBook';

function Book() {
    const router = useRouter()
   const bookid=router.query.bookid
  const [bookItem, setBookItem] =useState<bookType>()


 const bookcategory = (bookItem?.category)

   useEffect(()=>{
    axios
    .get(`https://mern-book-store-api.vercel.app/api/v1/books/${bookid}`)
    .then(response =>setBookItem(response.data.book));
   },[bookid])
   //console.log(bookItem)


  return (
    <>
    <ToastContainer draggable={false} autoClose={5000}/> 
    <BoxConatiner>
<AddCardAlert />
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
<Description>{bookItem.description}</Description>

      </BookDetail>
     <Price bookItem={bookItem}/>
    
    </Container>}
    
    {/* <BookAllInfo /> TAB TO SHOW INFO   */}
  
    <hr/>
     <RelatedBook bookcategory={bookcategory} item={bookItem}/> 
     
    </BoxConatiner>
    </>
  )
}

export default Book

