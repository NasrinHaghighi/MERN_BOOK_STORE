import React from 'react'
import {OrderItemBox, BookPhoto, Name, ItemInfoBox, NameItem, Span} from './styles'
import { Images } from '../../../helpers/Image';


function OrderItem({ item }: any) {
  const final=item.bookInfo.book.price *(item.quantity)
    return (
        <>
        <OrderItemBox>
         <BookPhoto>
        <Images
        width={100}
        height={130}
        src={item.bookInfo.book.imageUrl}
        alt="book"
       />

        </BookPhoto> 
       
        <ItemInfoBox>
        <NameItem>{item.bookInfo.book.name}</NameItem>
        <div>
        <Name><Span>Amount :</Span> {item.quantity}</Name>
        <Name><Span>price :</Span> {item.bookInfo.book.price}</Name>
        <Name><Span>Total :</Span> {final}</Name>
        </div>
        </ItemInfoBox>
        </OrderItemBox>
        </>
    )
}

export default OrderItem