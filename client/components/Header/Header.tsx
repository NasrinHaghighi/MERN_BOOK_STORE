import React ,{useState}from 'react'
import {Wapper,HeaderWrapper, Logo, Nav, NavItem, Wrapper,Wrapper2, Lens, DropdownS,DropDownToggle, DropDownMenu, Input, HeaderRes,MenuIcon} from './styles'
import { Images } from "../../helpers/Image";
import Link from "next/link";
import { RxHome } from "react-icons/rx";
import { FaNewspaper } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";

import Basket from '../Basket/Basket';
import ShopDropdown from './ShopDropdown/ShopDropdown';
import {searchTerm} from '../../features/searchSlice'
import { Fade as Hamburger } from 'hamburger-react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'


import Modal from 'react-bootstrap/Modal';
import NavbarModal from './NavbarModal/NavbarModal';
import SearchInput from './SearchInput/SearchInput';
import UserIsloged from '../Ahuth/UserIsLoged/UserIsloged';



function Header() {
      const user=useAppSelector(((state: { user: any; })=> state.user))
   
      const [isOpen, setOpen] = useState(false)
      const [modalshow, setModalShow] = useState(false);
 
     const handleClose = () => setModalShow(false);
     const handleShow = () => setModalShow(true);



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
        {/* conditional render for login /logout  */}
{user.token ?
   <NavItem className='logout'>
   <UserIsloged />
           
     </NavItem>


: 
        <NavItem className='loginBtn'>
 <Link href='/login'><FaUser/><span>Signin {' '}/ {' '}Login</span> </Link> 
              
        </NavItem>
     }
        </Nav>
        </Wrapper>
        <Wrapper2>
            {/* *****************SEARCH***** */}
            <SearchInput />
            {/* *****************SEARCH***** */}
      <Basket res={false}/> 
       <Basket wish={true} res={false}/>   
        </Wrapper2>

    </HeaderWrapper>
    <HeaderRes>
    <Logo>logo</Logo>
    <MenuIcon  onClick={handleShow}>
      <Hamburger color="#ffa500" toggled={isOpen} toggle={setOpen} />
      </MenuIcon>
      <Modal show={modalshow} onHide={handleClose}>
        <NavbarModal />
      </Modal>
    </HeaderRes>
    </Wapper>
  )
}

export default Header
