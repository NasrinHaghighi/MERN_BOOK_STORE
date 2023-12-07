import React from 'react'
import CardItem from './CardItem/CardItem'
import CardItemRes from './CardItem/CardItemRes'
import {Container,Titles, Total, Top, Tit, Value,Bottom, BackToShop, Checkout, Container2} from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import EmptyCard from './Emptycard/EmptyCard'
import Link from 'next/link'
import { bookType } from '../../types/bookType'
import axios from 'axios'

function Card() {
  const dispatch=useAppDispatch()
  const user=useAppSelector(((state: { user: any; })=> state.user))
 const userId=user.userId
 const signinUser=user.signinUser
 //console.log(userId)
  const books=useAppSelector(state=>state.books.books)
  console.log(books)
  const totalPrice=books.reduce((ac, cu)=>{
    const final=cu.price-(cu.price-cu.discont)/100
    return ac+ (final  * cu.amount)
  },0)
  //console.log(totalPrice)


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
        return <CardItem item={item as bookType} index={index}/>
      }): <EmptyCard />}
      

    </Container>
    <Container2>
    {books.length>0 ? books.map((item, index)=>{
        return <CardItemRes item={item as bookType} index={index}/>
      }): <EmptyCard />}
    </Container2>
   
   
  
    <Total>
    <Top>
        <Tit>Total price :</Tit>
        <Value>{totalPrice.toFixed(2)}€</Value>
        <br/>
        </Top>
  
        <Bottom>
            <BackToShop ><Link href='/books'>Back to shop</Link></BackToShop>
            <Checkout>
              {user?.token ? 
              <div> <Link href='/checkout' >Checkout</Link></div>
             :
              <Link href='/login'>login</Link>
              }
              </Checkout>

        </Bottom>
    </Total>
    </>
  )
}

export default Card



// const createOrder= async()=>{
//   books.map(async (item)=>{
//     try {
//       const response = await axios.post('http://localhost:4000/api/v1/orders', {
//         signinUser:signinUser,
//         userId: userId,
//         orderedBook:item
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json'
//         }}
//       );
  
//       if (response.status === 200) {
//        // console.log(response)
//       } else {
//         // Handle an error response from the server
//       }
//     } catch (error) {
//       // Handle network or other errors
//     }
//   })

// }
