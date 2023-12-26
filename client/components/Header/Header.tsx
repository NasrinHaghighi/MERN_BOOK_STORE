import React ,{useState}from 'react'
import {Wapper,HeaderWrapper, Logo, Nav, NavItem, Wrapper,Wrapper2,  HeaderRes,MenuIcon, NavItemDash, LoginBtn} from './styles'
import { Images } from "../../helpers/Image";
import Link from "next/link";
import { RxHome } from "react-icons/rx";
import { FaNewspaper } from "react-icons/fa";

import {MdOutlineSpaceDashboard} from  'react-icons/md'

import "bootstrap/dist/css/bootstrap.min.css";

import Basket from '../Basket/Basket';
import ShopDropdown from './ShopDropdown/ShopDropdown';
import {searchTerm} from '../../features/searchSlice'
//import { Fade as Hamburger } from 'hamburger-react'
//import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import logo  from '../../public/images/logo.jpg'
import {HiOutlineViewList } from 'react-icons/hi'
import NavbarModal from './NavbarModal/NavbarModal';
import SearchInput from './SearchInput/SearchInput';

import LoginDropdown from './LoginDropdown/LoginDropdown';
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {homeModalStatusRedux} from '../../features/homeModalSlice'
import {closeModald} from '../../features/homeModalSlice'
function Header() {
  const dispatch=useAppDispatch()
  const homeModalStatus =useAppSelector(state=>state.homeModalState.homeModalStatus)

 const [isOpen, setOpen] = useState(homeModalStatus)
console.log(`isOpen +${isOpen} +homeModalStatus +${homeModalStatus}`)


 const handelModal=()=>{
 dispatch(homeModalStatusRedux())

 }
    //   const [modalshow, setModalShow] = useState(false);
 
    //  const handleClose = () => setModalShow(false);
    //  const handleShow = () => setModalShow(true);

  return (
      <Wapper>
  
    <HeaderWrapper>
        <Wrapper>
        <Logo>
        <Images src={logo} width={150} height={100}   alt="book"/>  
        </Logo>
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

     
        </Nav>
        </Wrapper>
        <Wrapper2>
            {/* *****************SEARCH***** */}
            <SearchInput />
            {/* *****************SEARCH***** */}
      <Basket res={false}/> 
       <Basket wish={true} res={false}/> 
         <LoginBtn><LoginDropdown /></LoginBtn>
        </Wrapper2>

    </HeaderWrapper>
    <HeaderRes>
    <Logo>
      <Link href='/'>
     <Images src={logo} width={150} height={100}   alt="book"/>  </Link>
    </Logo>
     <MenuIcon  onClick={handelModal}>
     <HiOutlineViewList />
      </MenuIcon>  
 
        <NavbarModal/>
     
    </HeaderRes>
    </Wapper>
  )
}

export default Header
