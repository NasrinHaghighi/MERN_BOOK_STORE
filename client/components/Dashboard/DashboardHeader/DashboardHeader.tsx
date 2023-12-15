import React,{useState} from 'react'
import { Wapper, HeaderWrapper, Logo, Title, Icons, IconItem, Num , Menu, HeaderWrapperRes} from './styles'
import { BsMailbox2 } from 'react-icons/bs'
import { FaShoppingCart } from "react-icons/fa";
import LogoPic from '../../../public/images/logo.jpg'
import { Images } from "../../../helpers/Image";
import {dashboardSideStatus} from '../../../features/dashboardSideSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import Link from 'next/link';
function DashboardHeader() {
  const dispatch =useAppDispatch()

const handelSidebar=()=>{
  dispatch(dashboardSideStatus())
}
//console.log(openSide)
  return (
    <Wapper>
      <HeaderWrapper>
       
       <Link href='/'> <Logo> <Images src={LogoPic} width={150} height={100}   alt="book"/> </Logo></Link>
        <Title></Title>
              <Icons>
          <IconItem> <BsMailbox2 /><Num order=''>2</Num></IconItem>
          <IconItem><FaShoppingCart /><Num order='order'>3</Num></IconItem>

        </Icons>
      </HeaderWrapper>
      <HeaderWrapperRes>
       <Menu onClick={handelSidebar} style={{zIndex:10}}><HiOutlineMenuAlt1/></Menu>
       <Logo><Images src={LogoPic} width={150} height={100}   alt="book"/> </Logo>
      
             <Icons>
         <IconItem> <BsMailbox2 /><Num order=''>2</Num></IconItem>
         <IconItem><FaShoppingCart /><Num order='order'>3</Num></IconItem>

       </Icons>
     </HeaderWrapperRes>
    </Wapper>
  )
}

export default DashboardHeader



  /** */
  // const showTit = () => {
  //   if (router.pathname === '/dashboard') {
  //     return 'Overview'
  //   }
  //   if (router.pathname === '/dashboard/order') {
  //     return 'Orders'
  //   }
  // }

  /** */