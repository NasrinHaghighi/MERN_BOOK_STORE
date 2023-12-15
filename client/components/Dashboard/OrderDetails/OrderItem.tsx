import React, { useEffect } from 'react'
import {OrderItemBox, BookPhoto, Name, ItemInfoBox, NameItem, Span} from './styles'
import { Images } from '../../../helpers/Image';
import axios from 'axios';


function OrderItem({ item }: any) {
  
 //console.log(item)
 const [bookinfo, setBookInfo] = React.useState<any>(null);
  const getBookDetails = async () => {
   const res = await axios.get(`https://mern-book-store-api.vercel.app/api/v1/books/${item.book}`);
   setBookInfo(res.data.book)
  }

  useEffect(() => {
    getBookDetails();
  }, [item])
//console.log(bookinfo)
const finalPrice = bookinfo?.price * item.amount;
  return (
    <>
        <OrderItemBox>
     <BookPhoto>
    <Images
    width={100}
    height={130}
    src={bookinfo?.imageUrl}
    alt="book"
   />

    </BookPhoto>
   
    <ItemInfoBox>
    <NameItem>{bookinfo?.name}</NameItem>
    <div>
    <Name><Span>Amount :</Span> {item?.amount}</Name>
    <Name><Span>price :</Span> {bookinfo?.price}</Name>
    <Name><Span>Total :</Span> {finalPrice}</Name>
    </div>
    </ItemInfoBox>
    </OrderItemBox>  
    </>
  )
}


export default OrderItem