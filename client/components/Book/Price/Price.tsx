import React from 'react'
import {PriceConatiner, Top,Tit,Value , Middel, Text, Bottom, AddToCard,AddFavoraite} from './styles'
import {TbTruckDelivery} from 'react-icons/tb'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { bookType } from '../../../types/bookType';
import {addBook} from '../../../features/bookSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import Link from 'next/link';
interface Book{
    bookItem:bookType
}


function Price({bookItem}:Book) {
const dispatch=useAppDispatch()

    const addTocardhandel=(item:any)=>{
        dispatch(addBook(item))
    }
  return (
    <PriceConatiner>
        <Top>
        <Tit>Price :</Tit>
        <Value> {bookItem.price} €</Value></Top>
        <Middel>
            <Text><TbTruckDelivery />  Free delivery worldwide</Text>
            <Text><AiOutlineCheckCircle /> Price includes VAT/import taxes for EU delivery</Text>
            <Text> <AiOutlineCheckCircle /> Available. Expected delivery in 11-16 business days.</Text>
        </Middel>
        <Bottom>
            <AddToCard onClick={()=>addTocardhandel(bookItem)}><Link href='/card'><span>Add to card</span></Link></AddToCard>
            <AddFavoraite>Add to wishlist</AddFavoraite>

        </Bottom>
    </PriceConatiner>
  )
}

export default Price