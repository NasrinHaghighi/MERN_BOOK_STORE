import React,{ useEffect, useState} from 'react'

import {BasketbBox,BasketContainer, ShopIcon,ShopItems,DropDownToggle,DropDownMenu, ItemContainer,Title, Trash, Right, Bottom,  Card} from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Images } from "../../helpers/Image";
import {MdFavorite} from 'react-icons/md'
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';
import {closeModald} from '../../features/homeModalSlice'
import axios from 'axios';
import {updateUserBook} from '../../features/bookSlice'

  function Basket({wish,res}:any) {
    const dispatch=useAppDispatch()
    const [show, setShow] = useState(false);
    
    const user=useAppSelector(((state: { user: any; })=> state.user))
    const userId=user.userId
  /**need to get cart book of user by userId */
const fetchUserdata=async()=>{
 try{
const res=await axios.get(`https://mern-book-store-api.vercel.app/api/v1/cart${userId}`)
const productsWithQuantity = res.data.cart.products;
const bookDetailsPromises = productsWithQuantity.map(async (product: any) => {
  try {
    const bookRes = await axios.get(`https://mern-book-store-api.vercel.app/api/v1/books/${product.productId}`);
    const bookDetailsWithQuantity = {
      ...bookRes.data, // Book details
      amount: product.quantity, // Add quantity to book details
    };
    return bookDetailsWithQuantity;
  } catch (error) {
    console.log(`Error fetching book details for ID: ${product.productId}`, error);
    return null;
  }
});

const booksWithQuantity = await Promise.all(bookDetailsPromises);
dispatch(updateUserBook(booksWithQuantity))
 }catch(err){
  console.log(err)
 }
}

useEffect(() => {
  fetchUserdata()
}, [userId])

    
    let userBooks=useAppSelector(state=>state.books.books)
    let userWishBooks=useAppSelector(state=>state.favoriteList
      .favoraitelist
      )
//console.log(userBooks)
 const handelCloseModald=()=>{
      setShow(false)
      dispatch(closeModald()) 
 }   
 
 


     
  return (
    <>
     <BasketbBox>

    <BasketContainer>
    
   <Dropdown
    onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
   >
      <DropDownToggle variant="success" id="dropdown-basic">
      
      <ShopIcon>{wish ? <MdFavorite/> : <FaShoppingCart />}</ShopIcon>
      <ShopItems wish={wish}>{userBooks.length}</ShopItems>
      </DropDownToggle>

      <DropDownMenu show={show} res={res}>
         {wish 
         ? 
        (userWishBooks.map((item)=>{
         return <ItemContainer>
        <Right>
        <Images src={item.imageUrl} width={70} height={80}   alt="book"/>
         </Right>
          <Title> {item.name.length>30 ? item.name.substring(0, 30): item.name}</Title>
         </ItemContainer>
         
      })): (userBooks.map((item)=>{
        return <ItemContainer>
       <Right>
       <Images src={item.imageUrl} width={70} height={80}   alt="book"/>
        </Right>
         <Title> {item?.name.length>30 ? item.name.substring(0, 30): item.name} {wish ? '': <span>({item.amount})</span>}</Title>
        </ItemContainer>
        
     }))}  

        
        <Bottom>
          
      <Card onClick={handelCloseModald}><Link href={wish ? '/wish' :'/card'}>{wish ? 'Show wish list' : 'Show Card'}</Link></Card>
        </Bottom>
      </DropDownMenu> 
    </Dropdown>
  </BasketContainer>
  
  </BasketbBox>
  </>
  )
}

export default Basket



