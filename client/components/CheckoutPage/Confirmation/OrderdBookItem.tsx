import React from 'react'
import { bookType } from '../../../types/bookType'
import {Images} from '../../../helpers/Image'
import {BoxBook, ImageDiv,Info,Name, Amount, Price} from '../Confirmation/styles'

interface Book{
    amount:number,
    book:bookType
}
interface Item{
  item:Book
}



function OrderdBookItem({item}:Item) {
 // console.log(item)

    const {book, amount} =item
    const finalprice=book.price-(book.price-book.discont)/100
  return (
    <BoxBook>
        <ImageDiv>
        <Images src={book.imageUrl} width={100} height={130} alt="book" />
        </ImageDiv>
        <Info>
            <Name>{book.name.length<22 ? book.name : `${book.name.substring(0, 22)} ...`}</Name>
            <Amount>{amount} Item</Amount>
            <Price>{finalprice} €</Price>
        </Info>

    </BoxBook>
  )
}

export default OrderdBookItem