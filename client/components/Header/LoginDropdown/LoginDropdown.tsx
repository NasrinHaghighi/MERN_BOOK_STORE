import React,{useState} from 'react'
import { FaUser } from "react-icons/fa";
import {LoginBox, DropDownToggle, DropDownItem, DropDownMenu} from './styles'
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { userLogout } from '../../../features/userSlice';

import jwt from 'jsonwebtoken';

function LoginDropdown() {


  const dispatch=useAppDispatch()
  const [show, setShow] = useState(false);
  const user=useAppSelector(((state: { user: any; })=> state.user))
  const token=user.token
  const decodedToken = jwt.decode(token);

  const logoutedUser=()=>{
    dispatch(userLogout())
    localStorage.removeItem('name')
    localStorage.removeItem('token')
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
      <DropDownMenu show={show}>
        <DropDownItem href="/login">Login</DropDownItem>
      </DropDownMenu>
:    
<DropDownMenu show={show}>
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

        {/* conditional render for dashboard ...  */}
        {/* {user.token && user.userRole === 'admin' &&
         <NavItemDash >
        <Link href='/dashboard'><MdOutlineSpaceDashboard /><span>Dashboard</span></Link> 
        </NavItemDash> } */}
        {/* conditional render for login /logout  */}
{/* {user.token ?
   <NavItem className='logout'>
   <UserIsloged />
           
     </NavItem>


: 
        <NavItem className='loginBtn'>
 <Link href='/login'><FaUser/><span>Signin {' '}/ {' '}Login</span> </Link> 
              
        </NavItem>
     } */}