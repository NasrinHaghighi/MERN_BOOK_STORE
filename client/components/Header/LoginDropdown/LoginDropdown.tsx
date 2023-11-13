import React,{useState} from 'react'
import { FaUser } from "react-icons/fa";
import {LoginBox, DropDownToggle, DropDownItem, DropDownMenu} from './styles'
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { userLogout } from '../../../features/userSlice';

import jwt from 'jsonwebtoken';


function LoginDropdown({modal}:any) {


  const dispatch=useAppDispatch()
  const [show, setShow] = useState(false);
  const user=useAppSelector(((state: { user: any; })=> state.user))
  const token=user.token
  const decodedToken = jwt.decode(token);

  const logoutedUser=()=>{
    dispatch(userLogout())
    localStorage.removeItem('name')
    localStorage.removeItem('token')
    localStorage.removeItem('books')
    localStorage.removeItem('id')
    localStorage.removeItem('role')
   }




  return (
  <LoginBox>
 <Dropdown
    onMouseOver={()=>setShow(true)}
    onMouseLeave={() => setShow(false)}
   >

        <DropDownToggle variant="success" id="dropdown-basic">
    <FaUser />
      </DropDownToggle> 

{!user.token ? 
      <DropDownMenu show={show} modal={modal}>
        <DropDownItem href="/login" onClick={() => setShow(false)}>Login</DropDownItem>
      </DropDownMenu>
:    
<DropDownMenu show={show} modal='modal'>
<DropDownItem >Hi, <span>{user.signinUser}</span></DropDownItem>

{/* dashboard link is just user by admin role */}
{typeof decodedToken === 'object' && decodedToken?.role === 'admin' && 
<DropDownItem href='/dashboard' color='color'>Dashboard</DropDownItem>}


<DropDownItem onClick={logoutedUser}>Logout</DropDownItem>
</DropDownMenu> }

   </Dropdown>


  </LoginBox>
  )
}

export default LoginDropdown

    