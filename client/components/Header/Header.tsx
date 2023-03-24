import React ,{useState,useEffect}from 'react'
import {Wapper,HeaderWrapper, Logo, Nav, NavItem, Wrapper,Wrapper2, Lens, DropdownS,DropDownToggle, DropDownMenu, Input} from './styles'
import { Images } from "../../helpers/Image";
import Link from "next/link";
import { RxHome } from "react-icons/rx";
import { FaNewspaper } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useRouter } from "next/router";
import { useAppDispatch } from '../../redux/hooks'

import Basket from '../Basket/Basket';
import ShopDropdown from './ShopDropdown/ShopDropdown';
import {searchTerm} from '../../features/searchSlice'
import { useMemo } from 'react';
import { debounce } from 'lodash';
import WelcomMsg from '../Basket/WelcomMsg/WelcomMsg';




function Header() {
  
      const dispatch=useAppDispatch()
      const [show, setShow] = useState(false);

      


      const searchHandel= (e:any)=>{
      dispatch(searchTerm(e.target.value))    
     }



  return (
      <Wapper>
    <HeaderWrapper>
        <Wrapper>
        <Logo>logo</Logo>
        <Nav>
        <NavItem>
              <RxHome /><Link href='/'><span>Home</span></Link> 
        </NavItem>
        <NavItem>
             <Link href='/books'>
            <ShopDropdown />
              </Link> 
        </NavItem>
        <NavItem>
              <FaNewspaper/><span>About us</span> 
        </NavItem>
        {/* optional render navitem for sigin and signout */}
       {/* {localstorageUser && <NavItem className='loginBtn' onClick={signoutHandel}>  <FaUser/><span>Signout</span> </NavItem>} */}
       <NavItem className='loginBtn'><Link href='/signin'>
<FaUser/><span>Signin {' '}/ {' '}Login</span> </Link>
</NavItem> 
        
       
        </Nav>
        </Wrapper>
        <Wrapper2>
            {/* *****************SEARCH***** */}
            <WelcomMsg />
        <Lens >
        <DropdownS      onMouseOver={() => setShow(true)}    onMouseLeave={() => setShow(false)} >
        <DropDownToggle className="main-style" id="dropdown-basic">
         <BsSearch />
        </DropDownToggle>

      <DropDownMenu show={show}>
        <Dropdown.Item >
            <Input onChange={searchHandel} ></Input>
        </Dropdown.Item>
       
      </DropDownMenu>
    </DropdownS>
        </Lens>
       
           {/* *****************SEARCH***** */}
      <Basket /> 
       
        </Wrapper2>

    </HeaderWrapper>
    </Wapper>
  )
}

export default Header