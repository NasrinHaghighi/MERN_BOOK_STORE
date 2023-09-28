import React,{useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import {BasketbBox,BasketContainer, ShopIcon,ShopItems,DropDownToggle,DropDownMenu, DropDownItem, ItemContainer,Title, Trash, Right, Bottom,  Card, EmptyCard} from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Images } from "../../helpers/Image";
import { FaTrashAlt } from "react-icons/fa";
import Link from 'next/link';
import WelcomMsg from './WelcomMsg/WelcomMsg';

function Basket({wish,res}:any) {


    const dispatch=useAppDispatch()
    const [show, setShow] = useState(false);
    const books=useAppSelector(state=>state.books.books)
    const wishBooks=useAppSelector(state=>state.favoriteList.favoraitelist)

//console.log(wishBooks)
  return (
    <>
    <BasketbBox>

    <BasketContainer>
    
   <Dropdown
    onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
   >
      <DropDownToggle variant="success" id="dropdown-basic">
      
      <ShopIcon><FaShoppingCart /></ShopIcon>
      <ShopItems wish={wish}>{wish ? wishBooks.length :books.length}</ShopItems>
      </DropDownToggle>

      <DropDownMenu show={show} res={res}>
         {wish 
         ? 
        (wishBooks.map((item)=>{
         return <ItemContainer>
        <Right>
        <Images src={item.imageUrl} width={70} height={80}   alt="book"/>
         </Right>
          <Title> {item.name} <span>({item.amount})</span></Title>
         </ItemContainer>
         
      })): (books.map((item)=>{
        return <ItemContainer>
       <Right>
       <Images src={item.imageUrl} width={70} height={80}   alt="book"/>
        </Right>
         <Title> {item.name} <span>({item.amount})</span></Title>
        </ItemContainer>
        
     }))}  
{/* 
        {!wish &&books.length<1 ? <EmptyCard></EmptyCard> :
        books.map((item)=>{
         return <ItemContainer>
      
        <Right>
        <Images src={item.imageUrl} width={70} height={80}   alt="book"/>
         </Right>
          <Title> {item.name} <span>({item.amount})</span></Title>
         </ItemContainer>
         
      })}  */}
        
        <Bottom>
          
      <Card><Link href='/card'>{wish ? 'Show wish list' : 'Show Card'}</Link></Card>
        </Bottom>
      </DropDownMenu>
    </Dropdown>
  </BasketContainer>
  
  </BasketbBox>
  </>
  )
}

export default Basket