import React from 'react'
import {Container, BasketBox} from './styles'
import {NavItem} from '../styles'
import Link from "next/link";
import { RxHome } from "react-icons/rx";
import { FaNewspaper } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import Basket from '../../Basket/Basket';
function NavbarModal() {
  return (
    <Container>
       
        <NavItem>
              <RxHome /><Link href='/'><span>Home</span></Link> 
        </NavItem>
        <br/>
        <NavItem>
             <Link href='/books'>
            Shop
              </Link> 
        </NavItem>
        <br/>
        <NavItem>
              <FaNewspaper/><span>About us</span> 
        </NavItem>
        <br/>
        <NavItem className='loginBtn'><Link href='/signin'>
              <FaUser/><span>Signin {' '}/ {' '}Login</span> </Link>
        </NavItem>
        <br/>
        <br/>
        <BasketBox wish={true}>
        <Basket  res={true}/> 
        <br/>
        <br/><Basket wish={true} res={true}/>
        </BasketBox>
    </Container>
  )
}

export default NavbarModal