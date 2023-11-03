import React ,{useState} from 'react'
import {Container, BasketBox} from './styles'
import {NavItem} from '../styles'
import Link from "next/link";
import { RxHome } from "react-icons/rx";
import { FaNewspaper } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import Basket from '../../Basket/Basket';
import LoginDropdown from '../LoginDropdown/LoginDropdown';
import Modal from 'react-bootstrap/Modal';
import {closeModald} from '../../../features/homeModalSlice'




function NavbarModal() { 
      const dispatch=useAppDispatch()
      const homeModalStatus =useAppSelector(state=>state.homeModalState.homeModalStatus)
      const [show, setShow] = useState(homeModalStatus);
     
 const handelCloseModald=()=>{
      setShow(false)
      dispatch(closeModald()) 
 }     
      
  

return (
      <Modal show={homeModalStatus} 
      onHide={handelCloseModald}
      //className={homeModalStatus ? 'show' : 'notShow'}
      >
    <Container>
       <NavItem onClick={handelCloseModald}>
              <RxHome /><Link href='/'><span>Home</span></Link> 
        </NavItem>
        <br/>
        <NavItem onClick={handelCloseModald}>
             <Link href='/books'>
            Shop
              </Link> 
        </NavItem>
        <br/>
        <NavItem onClick={handelCloseModald}>
        <Link href='/books'>
        <FaNewspaper/><span>About us</span> 
              </Link> 
             
        </NavItem>
        <br/>
        <NavItem > 
            <LoginDropdown modal='modal'/>
        </NavItem>
     
        <br/>
        <br/>
        <BasketBox wish={true}>
        <Basket  res={true}/> 
        <br/>
        <br/><Basket wish={true} res={true}/>
        </BasketBox>
    </Container>
    </Modal>
  )
}

export default NavbarModal