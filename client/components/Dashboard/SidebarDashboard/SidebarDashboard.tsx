import React ,{useState, useEffect}from 'react'
import User from '../../../public/images/man_avatar3.jpg'
import {SidbarBox, RoleBoxx, Photo, Info,Name, Role, Navbar,NavItem,IconItem, SidebarModal, Main, ModalBox, CloseIcon, LogOut, LogoDiv} from './styles'
import { Images } from "../../../helpers/Image";

import {BsBarChartFill} from 'react-icons/bs'
import {FaRegRectangleList, FaTruck} from 'react-icons/fa6'
import {FaBookOpen} from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {closeDashboardSide} from '../../../features/dashboardSideSlice'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import {DropDownToggle, DropDownItem} from '../../Header/LoginDropdown/styles'
import {DropDownMenu} from './styles'
import RoleBox from './RoleBox/RoleBox';
import LogoPic from '../../../public/images/logo.jpg'



function SidebarDashboard() {
const dispatch=useAppDispatch()
const dashboardStatus =useAppSelector(state=>state.dashboardSideStatus.dashboardSideStatus)


const router = useRouter()
const path=router.pathname
const [activepatch, setActivePath] =useState(path)


useEffect(() => {
  if (path.startsWith('/dashboard/order/')){
    setActivePath(  '/dashboard/order')
    } else if(path.startsWith('/dashboard/products/')){
    setActivePath('/dashboard/products')
    }
    else{
      setActivePath(path)
    }
}, [path])


//const userName =localStorage.getItem('name')


const handelClose=()=>{
  dispatch(closeDashboardSide())
  //setOpen(false)
}
  return (
<>
    <Main>
      
    <SidbarBox>

          <RoleBox />
          
        <Navbar>
          {navItem.map((item, index)=>{
              
            return <NavItem 
            key={item.id} 
           className={activepatch === item.link ?'active' :''}
          
           >
              <Link href={item.link}>
                <IconItem>{item.icon}</IconItem>
                {item.title}
                </Link>
                </NavItem>
          })}
           
        </Navbar>  

    </SidbarBox>
    <SidebarModal open={dashboardStatus}
        onClose={handelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={dashboardStatus ? 'show' : 'notShow'}
        >
    <ModalBox >
      <LogoDiv>
        <Link href='/'>
      <Images src={LogoPic} width={150} height={100}   alt="logo"/>
      </Link>
      </LogoDiv>
      <br/>
      <CloseIcon onClick={handelClose} style={{zIndex:10}}><AiOutlineCloseCircle /></CloseIcon>
      <br/>
      <RoleBox modal='modal'/>
   
        <Navbar>
          {navItem.map((item, index)=>{
              
            return <NavItem 
            key={item.id} 
           className={activepatch === item.link ?'active' :''}
          
           >
              <Link href={item.link}>
                <IconItem>{item.icon}</IconItem>
                {item.title}
                </Link>
                </NavItem>
          })}
           
        </Navbar>  
    </ModalBox>
    </SidebarModal>
    </Main>
    </>
  )
}

export default SidebarDashboard


const navItem =[
    {id:1, title:'Dashboard', value:'dashboard', icon:<BsBarChartFill />,link:'/dashboard'},
    {id:2, title:'Oders', value:'orders', icon:<FaRegRectangleList />, link:'/dashboard/order'},
    {id:3, title:'Products', value:'products', icon:<FaTruck />, link:'/dashboard/products'},
    {id:4, title:'Add Product', value:'addProducts', icon:<FaBookOpen />, link:'/dashboard/addproduct'},
]