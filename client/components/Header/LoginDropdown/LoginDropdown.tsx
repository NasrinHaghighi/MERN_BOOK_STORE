import React,{useState, useEffect} from 'react'
import { FaUser } from "react-icons/fa";
import {LoginBox, DropDownToggle, DropDownItem, DropDownMenu} from './styles'
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { userLogout } from '../../../features/userSlice';
import {removeAllitem} from '../../../features/bookSlice'
import jwt from 'jsonwebtoken';
import {removeUserAddress} from '../../../features/UserAddressSlice'

function LoginDropdown({modal}:any) {


  const dispatch=useAppDispatch()
  const [show, setShow] = useState(false);
  const user=useAppSelector(((state: { user: any; })=> state.user))
  let token =user.token

  //console.log(token)

   

  const decodedToken = jwt.decode(token as unknown as string);
 //console.log(decodedToken)/*name , role, userId are included*/

  const logoutedUser=()=>{
    dispatch(userLogout())
    dispatch(removeUserAddress())
    dispatch(removeAllitem())
    localStorage.removeItem('user')
     /*need to remove books also from localstorage*/ 
  
   }


   //console.log(token);

  return (
  <LoginBox>
 <Dropdown
    onMouseOver={()=>setShow(true)}
    onMouseLeave={() => setShow(false)}
   >

        <DropDownToggle variant="success" id="dropdown-basic">
    <FaUser />
      </DropDownToggle> 

 {!token ? 
      <DropDownMenu show={show} modal={modal}>
        <DropDownItem href="/login" onClick={() => setShow(false)}>Login</DropDownItem>
      </DropDownMenu>
:    
<DropDownMenu show={show} modal='modal'>
<DropDownItem >Hi, <span>{user.signinUser}</span></DropDownItem>


 {typeof decodedToken === 'object' && decodedToken?.role === 'admin' && 
<DropDownItem href='/dashboard' color='color'>Dashboard</DropDownItem>} 


<DropDownItem onClick={logoutedUser}>Logout</DropDownItem>
</DropDownMenu> } 

   </Dropdown>


  </LoginBox>
  )
}

export default LoginDropdown

    