import React,{useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import {BasketbBox,BasketContainer, ShopIcon,ShopItems,DropDownToggle,DropDownMenu, DropDownItem, ItemContainer,Title, Trash, Right, Bottom,  Card} from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Images } from "../../helpers/Image";
import { FaTrashAlt } from "react-icons/fa";
import Link from 'next/link';
import WelcomMsg from './WelcomMsg/WelcomMsg';

function Basket() {
    const dispatch=useAppDispatch()
      const [show, setShow] = useState(false);
  const books=useAppSelector(state=>state.books.books)
  //


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
      <ShopItems>{books.length}</ShopItems>
      </DropDownToggle>

      <DropDownMenu show={show}>
       {books.map((item)=>{
         
        //console.log(tit)
        return <ItemContainer>
      
        <Right>
        <Images src={item.imageUrl} width={70} height={80}   alt="book"/>
         </Right>
          <Title> {item.name} <span>({item.amount})</span></Title>
         </ItemContainer>
         
      })} 
        
        <Bottom>
          
      <Card><Link href='/card'>Show Card</Link></Card>
        </Bottom>
      </DropDownMenu>
    </Dropdown>
  </BasketContainer>
  
  </BasketbBox>
  </>
  )
}

export default Basket