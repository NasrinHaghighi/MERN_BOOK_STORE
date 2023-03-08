import React from 'react'
import CardItem from './CardItem/CardItem'
import {Container,Titles, Total, Top, Tit, Value,Bottom, BackToShop, Checkout} from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import EmptyCard from './Emptycard/EmptyCard'
import Link from 'next/link'

function Card() {
  const dispatch=useAppDispatch()
  const books=useAppSelector(state=>state.books.books)
  const totalPrice=books.reduce((ac, cu)=>{
    return ac+ (cu.price * cu.amount)
  },0)
  console.log(totalPrice)
  return (
    <>
    <Container>
      <Titles>
      <span></span> 
       <span></span> 
        <span>Product</span>
        <span>Price</span>
        <span>Amount</span>
        <span>Price</span>
      </Titles>
      {books.length>0 ? books.map((item, index)=>{
        return <CardItem item={item} index={index}/>
      }): <EmptyCard />}
      <div></div>

    </Container>
    <Total>
    <Top>
        <Tit>Total price :</Tit>
        <Value>{totalPrice}€</Value></Top>
        <Bottom>
            <BackToShop ><Link href='/books'>Back to shop</Link></BackToShop>
            <Checkout>Checkout</Checkout>

        </Bottom>
    </Total>
    </>
  )
}

export default Card