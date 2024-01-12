import React from 'react'
import {Container, Price, DiscontBag, PriceBox,Name, Btn,Remove} from './styles'
import { bookType } from '../../../types/bookType';
import {Images} from '../../../helpers/Image'
import { FaTrashAlt } from "react-icons/fa";
import Link from 'next/link'
import useFetchAddToCard from '../../../hooks/useFetchAddToCard'

interface Props{
    item:bookType,
    index:number
}

function WishlistItem({item, index}:Props) {
    const {addToCardHandel} =useFetchAddToCard({item})
    const final= item.price - (item.price * item.discont) / 100;
  return (
   
    <Container className={index %2 ? 'odd' : 'even'}>
         
        <span>
        <Images src={item.imageUrl} width={100} height={120} alt="book" /> 
        </span> 
        <Link href={`/books/${item._id}`} passHref>
       <Name>{item.name.length<35 ? item.name : item.name.substring(0,35)}</Name>    </Link>
       <PriceBox>
       
        <Price>{final} €</Price>
        {item.discont ?  <DiscontBag>{item.discont } %</DiscontBag> : ''}

        </PriceBox>
        <Btn onClick={() => addToCardHandel(item)}>Add to card</Btn>
        <Remove><FaTrashAlt /></Remove>
   
    </Container>
 
  )
}

export default WishlistItem