import React, {useState} from 'react'
import {SidbarBox, RoleBoxx, Photo, Info,Name, Role, Navbar,NavItem,IconItem, SidebarModal, Main, ModalBox, CloseIcon, LogOut} from '../styles'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import {DropDownToggle, DropDownItem} from '../../../Header/LoginDropdown/styles'
import {DropDownMenu} from '../styles'
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { userLogout } from '../../../../features/userSlice';
import { useRouter } from 'next/router';


function RoleBox({modal}:any) {
    const dispatch=useAppDispatch()
    const dashboardStatus =useAppSelector(state=>state.dashboardSideStatus.dashboardSideStatus)
    const [show, setShow] = useState(false);
    const user=useAppSelector(state=>state.user.signinUser)
    const router = useRouter();

    
  const logoutedUser=()=>{
   
    dispatch(userLogout())
    localStorage.removeItem('name')
    localStorage.removeItem('token')
    router.push('/');
   }  


  return (
    <>
    <RoleBoxx modal={modal=== 'modal' ? 'modal': ''}>
            <Photo className={dashboardStatus ? 'show' : 'notShow'}>
           </Photo>
            <Info>
              <Name> {user.toUpperCase()}</Name>
              <Role>Admin</Role>
            </Info>
            <LogOut >
            <Dropdown
    onMouseOver={()=>setShow(true)}
    onMouseLeave={() => setShow(false)}
   >
        <DropDownToggle variant="success" id="dropdown-basic">
    ....
      </DropDownToggle> 
      <DropDownMenu show={show}>
      <DropDownItem onClick={logoutedUser}>Logout</DropDownItem>
      </DropDownMenu>
     </Dropdown>
            </LogOut>
        
           
        </RoleBoxx> 
        </>
  )
}

export default RoleBox